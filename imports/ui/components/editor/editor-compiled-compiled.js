import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import './editor.html';
import { name as FlashCards } from '../flashCard/flashCard';
import { name as Party } from '../socially/fcList';

class Editor {}

const name = 'editor';

// create a module
export default angular.module(name, [angularMeteor, ngMaterial, uiRouter, FlashCards, Party, 'accounts.ui']).component(name, {
    templateUrl: `imports/ui/components/${ name }/${ name }.html`,
    controllerAs: name,
    controller: Editor
}).config(config)
//redirect not authorized user
.run(run);

function config($stateProvider) {

    'ngInject';

    $stateProvider.state('home', {
        url: '/home',
        views: {
            'mainNavigator': {
                template: '<editor></editor'
            }
        }
    });
}

//# sourceMappingURL=editor-compiled.js.map

//# sourceMappingURL=editor-compiled-compiled.js.map