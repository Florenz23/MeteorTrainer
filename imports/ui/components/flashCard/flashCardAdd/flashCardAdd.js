import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { FlashCards } from '../../../../api/flashCards';
import { FA } from '../../multiChoiceTrainer/FA'
import { MultiChoiceFlashCard, convertTrainerArray } from '../../multiChoiceTrainer/MultiChoiceFlashCard'

import './flashCardAdd.html';

class FlashCardAdd {
    constructor($stateParams) {
        'ngInject';
        this.list = {};
        this.listId = $stateParams.listId;
    }

    submit() {
        this.list.owner = Meteor.user()._id;
        this.list.listId = this.listId;
        this.list.right = 0;
        this.list.wrong = 0;
        this.list.rating = 0;
        this.list.lastRevision = "notLearned";
        FlashCards.insert(this.list);
        if (FlashCards.find({ "listId": "z6HayndW5dTJNbuDq" }).count() < 20) {
            var owner = Meteor.user()._id;
            const parties = convertTrainerArray(FA,owner);
            console.log(parties);

            parties.forEach(party => {
                FlashCards.insert(party);
            });
        }
        this.reset();
        $("#addFlashCard").focus();
    }

    reset() {
        this.list = {};
    }
}


const name = 'flashCardAdd';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter
]).component(name, {
    templateUrl: `imports/ui/components/flashCard/${name}/${name}.html`,
    controllerAs: name,
    controller: FlashCardAdd
})
    .directive('myEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.myEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    })
