import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';
import { FlashCards } from '../../../api/flashCards';
import template from './trainer.html'
import { Vocab } from './services';
import { name as DisplayFlashCard } from '../flashCard/displayFlashCard/displayFlashCard';
import { MultiChoiceFlashCard, convertTrainerArray, shuffleArray } from '../multiChoiceTrainer/MultiChoiceFlashCard'

class Trainer {
    constructor($scope, $reactive, $stateParams) {
        'ngInject';
        $reactive(this).attach($scope);
        this.subscribe('flashCards');
        this.helpers({
            flashCards() {
                if(Meteor.user() && Meteor.user()._id) {
                    const selector = {
                        listId: $stateParams.listId,
                    };
                    var flashCards = FlashCards.find(selector).fetch();
                    return flashCards;
                }
            }
        });
    }

    iniTrainer = function () {
        var flashCards = this.flashCards;
        Vocab.iniTrainer(flashCards);
        this.flashCard = Vocab.currentFlashCard;
        this.displayAnswer = false;
        this.totalFlashCardsToLearn =  Vocab.totalFlashCardsToLearn;
        this.masteredFlashCards = 0;
        this.hide_charge_button = true;
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
    };

    soon = function (word) {
        Vocab.markForSoon(word);
        this.proceedToNextFlashCard();
    }

    later = function (word) {
        Vocab.markForLater(word);
        this.proceedToNextFlashCard();
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
        type: 'noun'
    },
    {
        question: 'two',
        answer: 'zwei',
        type: 'adjective'
    },
    {
        question: 'three',
        answer: 'drei',
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

