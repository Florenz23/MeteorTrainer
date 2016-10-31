import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import {Meteor} from 'meteor/meteor';
import {FlashCards} from '../../../api/flashCards';
import template from './trainer.html'
import template1 from './show-learn-process.html'
import {Vocab} from './services';
import {name as DisplayFlashCard} from '../flashCard/displayFlashCard/displayFlashCard';
import {MultiChoiceFlashCard, convertTrainerArray, shuffleArray} from '../multiChoiceTrainer/MultiChoiceFlashCard'

class Trainer {
    constructor($scope, $reactive, $stateParams) {
        'ngInject';
        $reactive(this).attach($scope);
        this.subscribe('flashCards');
        this.helpers({
            flashCards() {
                if (Meteor.user() && Meteor.user()._id) {
                    const selector = {
                        listId: $stateParams.listId,
                    };
                    var flashCards = FlashCards.find(selector).fetch();
                    return flashCards;
                }
            }
        });
        this.editedItem = {};
    }

    iniTrainer = function () {
        var flashCards = this.flashCards;
        Vocab.iniTrainer(flashCards);
        this.flashCard = Vocab.currentFlashCard;
        this.displayAnswer = false;
        this.totalFlashCardsToLearn = Vocab.totalFlashCardsToLearn;
        this.masteredFlashCards = 0;
        this.hide_charge_button = true;
        this.showProcess();
    };
    iniTrainerShuffle = function () {
        var flashCards = shuffleArray(Vocab._flashCards);
        Vocab._flashCards = flashCards;
    };

    setEnterAction = function (userAnswer) {
        console.log("jojo");
        console.log(this.displayAnswer);
        if (this.displayAnswer === true) {
            console.log("deny");
            return this.denyAnswer();
        }
        if (this.displayAnswer === false) {
            console.log("check");
            return this.checkAnswer(userAnswer);
        }
    }
    checkAnswer = function (userAnswer) {
        if (Vocab.checkAnswer(userAnswer)) {
            this.displayAnswer = true;
        } else {
            this.displayAnswer = false;
            this.flashCard = Vocab.currentFlashCard;
            this.userAnswer = null;
            this.masteredFlashCards = Vocab.masteredFlashCards;
            this.showProcess();
        }
    };

    acceptAnswer = function () {
        Vocab.markAnswerAsCorrect();
        this.proceedToNextFlashCard();
    }
    denyAnswer = function () {
        Vocab.markAnswerAsWrong();
        this.proceedToNextFlashCard();
    }
    showAnswer = function () {
        this.displayAnswer = true;
    }

    proceedToNextFlashCard = function () {
        $("#user_answer").val("");
        this.flashCard = Vocab.currentFlashCard;
        this.displayAnswer = false;
        this.masteredFlashCards = Vocab.masteredFlashCards;
        this.showProcess();
    };

    soon = function (word) {
        Vocab.markForSoon(word);
        this.proceedToNextFlashCard();
    }

    later = function (word) {
        Vocab.markForLater(word);
        this.proceedToNextFlashCard();
    }
    showProcess = function () {
        this.counter++;
        this.recentProcess = Vocab.getPoll();
        console.log("jpoj");
    }
    editrow = function ($index) {
        this.istrue = true;
        this.$index = $index;
        angular.copy(this.flashCard, this.editedItem);
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
                angular.copy(this.editedItem, this.flashCard)
            }
        });
    }


}

const name = 'trainer';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    DisplayFlashCard
]).component(name, {
    template,
    controllerAs: name,
    controller: Trainer
})
    .directive('myTab', function () {
        return function (scope, element, attrs) {
            element.unbind("keydown keypress");
            element.bind("keydown keypress", function (event) {
                if (event.which === 9) {
                    scope.$apply(function () {
                        scope.$eval(attrs.myEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    })
    .directive('showLearnProcess', function () {
        return {
            restrict: 'E',
            template: template1,
            controller: Trainer
        };
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('trainer', {
            url: '/trainer/:listId',
            template: '<trainer></trainer>'
        });
}


var dbFlashCardss = [
    {
        question: 'one',
        answer: 'eins',
        importance: -1,
        type: 'noun'
    },
    {
        question: 'two',
        answer: 'zwei',
        importance: -1,
        type: 'adjective'
    },
    {
        question: 'three',
        answer: 'drei',
        importance: -1,
        type: 'Adjective'
    },
    {
        question: 'four',
        answer: 'vier',
        type: 'Adjective'
    },
    {
        question: 'five',
        answer: 'fünf',
        type: 'Adjective'
    },
    {
        question: 'a',
        answer: 'a',
        type: 'Adjective'
    },
    {
        question: 'b',
        answer: 'b',
        type: 'Adjective'
    },
    {
        question: 'c',
        answer: 'c',
        type: 'Adjective'
    }
];

