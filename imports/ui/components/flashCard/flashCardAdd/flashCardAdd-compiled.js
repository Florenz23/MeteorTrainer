import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { FlashCards } from '../../../../api/flashCards';

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
        FlashCards.insert(this.list);
        this.reset();
    }

    reset() {
        this.list = {};
    }
}

const name = 'flashCardAdd';

// create a module
export default angular.module(name, [angularMeteor, uiRouter]).component(name, {
    templateUrl: `imports/ui/components/flashCard/${ name }/${ name }.html`,
    controllerAs: name,
    controller: FlashCardAdd
});

//# sourceMappingURL=flashCardAdd-compiled.js.map