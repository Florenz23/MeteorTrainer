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

    iniTrainer() {

        Vocab.iniTrainer(this.flashCards);
        this.flashCard = Vocab.currentFlashCard;
        this.shuffleFlashCardAnswers();
    }

    shuffleFlashCardAnswers() {
        console.log(this.flashCard);
        this.flashCard.answers = shuffleArray(this.flashCard.answers);
    }

    getFlashCards() {
        var objArray = [];
        for (var i = 0; i < this.flashCards.length; i++) {
            var obj = new ClassFlashCard(this.flashCards[i]);
            objArray[i] = obj;
        }
        return objArray;
    }

    //this.ini();
    //this.answers = {};
    showResult() {
        this.correctCount = 0;
        var answers = this.flashCard.answers;
        this.flashCard.userAnswerCorrect = false;
        this.getUserAnswer();
        for (var j = 0; j < answers.length; j++) {
            answers[j].selected = "donno";
            answers = this.checkIfSelectedAnswerIsCorrect(j, answers);
            answers = this.checkIfSelectedAnswerIsWrong(j, answers);
        }
        this.checkUserAnswer(answers);
        return answers;
        //console.log(this.answers);
    }

    getUserAnswer() {
        this.flashCard.userAnswer = this.answers[0];
    }

    checkIfSelectedAnswerIsCorrect(j, answers) {
        if (this.flashCard.userAnswer === answers[j].value && answers[j].correct === true) {
            this.flashCard.userAnswerCorrect = true;
            answers[j].selected = "true";
        }
        return answers;
    }

    checkIfSelectedAnswerIsWrong(j, answers) {
        if (this.flashCard.userAnswer === answers[j].value && answers[j].correct === false) {
            answers[j].selected = "false";
        }
        return answers;
    }

    nextFlashCard() {
        this.startIndex++;
        this.flashCard = this.flashCards[this.startIndex];
    }

    checkUserAnswer() {
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

    refreshSelection() {
        var answers = this.flashCard.answers;
        this.getUserAnswer();
        for (var j = 0; j < answers.length; j++) {
            answers[j].selected = "donno";
        }
    }

    proceedToNextFlashCard() {
        this.refreshSelection();
        this.flashCard = Vocab.currentFlashCard;
        this.shuffleFlashCardAnswers();
    }

    acceptAnswer() {
        Vocab.markAnswerAsCorrect();
    }

    denyAnswer() {
        Vocab.markAnswerAsWrong();
    }

    random() {
        return 0.5 - Math.random();
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


