import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './displayFlashCard.html';
import { FlashCards } from '../../../../api/lists';
import { name as FlashCardsAdd } from '../flashCardAdd/flashCardAdd';
import { name as ListRemove } from '../flashCardRemove/flashCardRemove';

class DisplayFlashCard {
    constructor($scope, $reactive, $stateParams) {
        'ngInject';

        this.listId = $stateParams.listId;
        console.log(this.listId);
        $reactive(this).attach($scope);
        this.subscribe('lists');

        this.helpers({
            lists() {
                const selector = {
                    listId: $stateParams.listId
                };
                console.log(selector);
                return FlashCards.find(selector);
            }
        });
    }
}

const name = 'displayFlashCard';

// create a module
export default angular.module(name, [angularMeteor, uiRouter, ListsAdd, ListRemove]).component(name, {
    templateUrl: `imports/ui/components/flashCard/${ name }/${ name }.html`,
    controllerAs: name,
    controller: DisplayFlashCard
}).config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('fcListsList', {
        url: '/lists/:listId',
        template: '<display-flash-card></display-flash-card>'
    });
}

//# sourceMappingURL=displayFlashCard-compiled.js.map

//# sourceMappingURL=displayFlashCard-compiled-compiled.js.map