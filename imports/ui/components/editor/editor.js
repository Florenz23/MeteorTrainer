import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import './editor.html';
import { name as FlashCards } from '../flashCard/flashCard';
import { name as Party } from '../socially/fcList';

class Editor {
    constructor($scope, $reactive, $stateParams) {
        'ngInject';
        $reactive(this).attach($scope);
    }
}

const name = 'editor';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    FlashCards,
    Party,
    'accounts.ui'
]).component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: Editor
})
    .config(config);

function config($stateProvider) {

    'ngInject';

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<editor></editor'
        });
}
