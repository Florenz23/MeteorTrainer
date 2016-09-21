import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './displayFlashCard.html';
import {FlashCards} from '../../../../api/flashCards';
import {name as FlashCardsAdd} from '../flashCardAdd/flashCardAdd';
import {name as FlashCardRemove} from '../flashCardRemove/flashCardRemove';

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


    editrow = function ($index) {
        this.istrue = true;
        this.$index = $index;
        angular.copy(this.flashCards[$index], this.editedItem);
    }
    closepopup = function () {
        this.istrue = false;

    }
    save = function () {
        this.istrue = false;
        FlashCards.update({
            _id: this.editedItem._id
        }, {
            $set: {
                question: this.editedItem.question,
                answer: this.editedItem.answer,
            }
        }, (error) => {
            if (error) {
                console.log('Oops, unable to update the fcList...');
            } else {
                console.log('Done!');
                angular.copy(this.editedItem, this.flashCards[this.$index])
            }
        });
    }

    save1(flashCard) {
        FlashCards.update({
            _id: flashCard._id
        }, {
            $set: {
                question: flashCard.question,
                answer: flashCard.answer,
            }
        }, (error) => {
            if (error) {
                console.log('Oops, unable to update the fcList...');
            } else {
                console.log('Done!');
            }
        });
    }
}

const name = 'displayFlashCard';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    FlashCardsAdd,
    FlashCardRemove,
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
