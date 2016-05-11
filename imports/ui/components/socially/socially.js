import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import './socially.html';
import { name as FlashCards } from '../flashCard/flashCard';
import { name as Party } from '../socially/fcList';
import { name as Navigation } from '../navigation/navigation';
import { name as Auth } from '../user/auth/auth';

class Socially {
}

const name = 'socially';

// create a module
export default angular.module(name, [
    angularMeteor,
    ngMaterial,
    uiRouter,
    FlashCards,
    Party,
    Navigation,
    Auth,
    'accounts.ui'
]).component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: Socially
})
    .config(config)
    //redirect not authorized user
    .run(run);

function config($locationProvider, $urlRouterProvider) {

    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/fcLists');
}

// redirect no authorised user
function run($rootScope, $state) {
    'ngInject';

    $rootScope.$on('$stateChangeError',
        (event, toState, toParams, fromState, fromParams, error) => {
            if (error === 'AUTH_REQUIRED') {
                $state.go('fcLists');
            }
        }
    );
}