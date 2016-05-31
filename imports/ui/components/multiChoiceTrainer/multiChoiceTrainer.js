import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';
import { FlashCards } from '../../../api/flashCards';
import './multiChoiceTrainer.html'
import { Vocab } from '../trainer/services';
import { name as DisplayFlashCard } from '../flashCard/displayFlashCard/displayFlashCard';
// ess muss alles ortiert werden, da es zz noch von anderen Klassen genutzt wird flashCAdd
import { MultiChoiceFlashCard, convertTrainerArray, shuffleArray } from './MultiChoiceFlashCard'
class MultiChoiceTrainer {
    constructor($scope, $reactive, $stateParams) {
        'ngInject';
        $reactive(this).attach($scope);
        this.subscribe('flashCards');
        this.helpers({
            flashCards() {
                const selector = {
                    listId: "z6HayndW5dTJNbuDq"
                };
                var flashCards = FlashCards.find(selector).fetch();
                return flashCards;
            }
        });
    }

    shuffleFlashCardAnswers = function () {
        console.log(this.flashCard);
        this.flashCard.answers = shuffleArray(this.flashCard.answers);
    }
    getUserAnswer = function (value) {
        this.flashCard.userAnswer = value;
    }
    setPanelStyle = function () {
        var answers = this.flashCard.answers;
        this.getUserAnswer();
        for (var j = 0; j < answers.length; j++) {
            //answers[j].panel = "info";
        }
    }
    ini = function () {
        Vocab.iniTrainer(this.flashCards);
        this.flashCard = Vocab.currentFlashCard;
        this.shuffleFlashCardAnswers();
        this.setPanelStyle();
    }
    answers = {};
    showResult = function (value) {
        console.log(value);
        this.correctCount = 0;
        var answers = this.flashCard.answers;
        this.flashCard.userAnswerCorrect = false;
        this.getUserAnswer(value);
        for (var j = 0; j < answers.length; j++) {
            answers[j].selected = "donno";
            //answers[j].panel = "info";
            answers = this.checkIfSelectedAnswerIsCorrect(j, answers);
            answers = this.checkIfSelectedAnswerIsWrong(j, answers);
        }
        this.checkUserAnswer(answers);
        //setTimeout(this.proceedToNextFlashCard, 2000);
        return answers;
        //console.log(this.answers);
    }
    checkIfSelectedAnswerIsCorrect = function (j, answers) {
        if (this.flashCard.userAnswer === answers[j].value && answers[j].correct === true || answers[j].correct == true) {
            this.flashCard.userAnswerCorrect = true;
            answers[j].selected = "true";
            answers[j].panel = "success";
            this.wrongAnswered = true;
        }
        return answers;
    }
    checkIfSelectedAnswerIsWrong = function (j, answers) {
        if (this.flashCard.userAnswer === answers[j].value && answers[j].correct === false) {
            answers[j].selected = "false";
            answers[j].panel = "danger";
        }
        return answers;
    }
    checkUserAnswer = function () {
        var answers = this.flashCard.answers;
        for (var i = 0; i < answers.length; i++) {
            if (this.flashCard.userAnswer === answers[i].value && answers[i].correct === true) {
                this.acceptAnswer();
                return true;
            }
        }
        this.denyAnswer();
        return false;
    }
    refreshSelection = function () {
        var answers = this.flashCard.answers;
        this.getUserAnswer();
        for (var j = 0; j < answers.length; j++) {
            answers[j].selected = "donno";
            answers[j].panel = "";
        }
    }
    acceptAnswer = function () {
        Vocab.markAnswerAsCorrect();
    }
    denyAnswer = function () {
        Vocab.markAnswerAsWrong();
    }
    random = function () {
        return 0.5 - Math.random();
    }
    proceedToNextFlashCard = function () {
        console.log(this);
        this.refreshSelection();
        this.flashCard = Vocab.currentFlashCard;
        this.shuffleFlashCardAnswers();
        this.setPanelStyle();
    }

}

const name = 'multiChoiceTrainer';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    DisplayFlashCard
]).component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: MultiChoiceTrainer
}).directive('errSrc', function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('error', function () {
                if (attrs.src != attrs.errSrc) {
                    attrs.$set('src', attrs.errSrc);
                }
            });
        }
    }
})
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('boot', {
            url: '/boot',
            template: '<multi-choice-trainer></multi-choice-trainer>'
        });
}


