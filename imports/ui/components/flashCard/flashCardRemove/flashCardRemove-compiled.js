import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './flashCardRemove.html';
import { FlashCards } from '../../../../api/flashCards';

class ListRemove {
    remove() {
        if (this.list) {
            FlashCards.remove(this.list._id);
        }
    }
}

const name = 'listRemove';

// create a module
export default angular.module(name, [angularMeteor]).component(name, {
    templateUrl: `imports/ui/components/lists/${ name }/${ name }.html`,
    bindings: {
        list: '<'
    },
    controllerAs: name,
    controller: ListRemove
});

//# sourceMappingURL=flashCardRemove-compiled.js.map