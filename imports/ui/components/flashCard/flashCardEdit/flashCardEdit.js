import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './flashCardRemove.html';
import { FlashCards } from '../../../../api/flashCards';

class FlashCardRemove {
    remove() {
        if (this.flash) {
            console.log(this.flash);
            FlashCards.remove(this.flash._id);
        }
    }
}

const name = 'flashCardRemove';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    bindings: {
        flash: '<'

    },
    controllerAs: name,
    controller: FlashCardRemove
});