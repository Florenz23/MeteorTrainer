import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { name as Editor } from '../editor/editor';
import { name as MultiChoice } from '../multiChoiceTrainer/multiChoiceTrainer';

import template from './navigation.html';
class Navigation {

}
const name = 'navigation';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    Editor,
    MultiChoice
]).component(name, {
    template,
    controllerAs: name,
    controller: Navigation
})
    .config(config);

function config($locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/home');
};