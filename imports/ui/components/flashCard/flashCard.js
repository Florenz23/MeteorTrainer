import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './flashCard.html';
import { name as DisplayFlashCards } from '../flashCard/displayFlashCard/displayFlashCard';

class FlashCards {
}

const name = 'lists';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    DisplayFlashCards,
    'accounts.ui'
]).component(name, {
    template,
    controllerAs: name,
    controller: FlashCards
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