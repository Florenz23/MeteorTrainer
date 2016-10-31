import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './displayFlashCard.html';
import {FlashCards} from '../../../../api/flashCards';
import {name as FlashCardsAdd} from '../flashCardAdd/flashCardAdd';
import {name as FlashCardRemove} from '../flashCardRemove/flashCardRemove';
import {name as FlashCardEdit} from '../flashCardEdit/flashCardEdit';

class DisplayFlashCard {
    constructor($scope, $reactive, $stateParams) {
        'ngInject';
        this.listId = $stateParams.listId;
        $reactive(this).attach($scope);
        this.subscribe('flashCards');
        this.helpers({
            flashCards() {
                const selector = {
                    listId: $stateParams.listId
                };
                var flashCards = FlashCards.find(selector);
                return flashCards;
            }
        });
        this.editedItem = {};
    }


}

const name = 'displayFlashCard';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    FlashCardsAdd,
    FlashCardRemove,
    FlashCardEdit,
]).component(name, {
    template,
    controllerAs: name,
    controller: DisplayFlashCard
})
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('home.fcListsList', {
            url: '/lists/:listId',
            template: '<display-flash-card></display-flash-card>'
        });
}
