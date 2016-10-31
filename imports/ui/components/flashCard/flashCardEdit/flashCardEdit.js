import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './flashCardEdit.html';
import {FlashCards} from '../../../../api/flashCards';

class FlashCardEdit {

    openModal = function () {
        console.log("jojo");
        $("#myModal").modal("show");
    }


    saveEdit = function () {
        FlashCards.update({
            _id: this.flashCard._id
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
            }
        });
    }

}

const name = 'flashCardEdit';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    bindings: {
        flash: '<'

    },
    controllerAs: name,
    controller: FlashCardEdit
});
