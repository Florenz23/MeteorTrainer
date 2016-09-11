import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';


import template from './fcList.html';
import { name as FcListsList } from '../fcList/fcListsList/fcListsList';
import { name as FcListDetails } from '../fcList/fcListDetails/fcListDetails';
import { name as Trainer } from '../trainer/trainer';

class FcList {
}

const name = 'fcList';

// create a module
export default angular.module(name, [
    angularMeteor,
    FcListsList,
    uiRouter,
    FcListsList,
    FcListDetails,
    Trainer,
    'accounts.ui'
]).component(name, {
    template,
    controllerAs: name,
    controller: FcList
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