import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import './csvListAdd.html';
import { Parties } from '../../../../api/fcLists';

class PartyAdd {
    constructor($stateParams) {
        'ngInject';

        this.fcList = {};
        this.listId = $stateParams.listId;
    }

    submit() {
        this.fcList.owner = Meteor.user()._id;
        this.fcList.listId = this.listId;
        console.log(this.fcList);
        Parties.insert(this.fcList);
        this.reset();

        if (this.done) {
            this.done();
        }
    }

    reset() {
        this.fcList = {};
    }
}

const name = 'fcListAdd';

// create a module
export default angular.module(name, [angularMeteor, uiRouter]).component(name, {
    templateUrl: `imports/ui/components/fcList/${ name }/${ name }.html`,
    bindings: {
        done: '&?'
    },
    controllerAs: name,
    controller: PartyAdd
}).config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('fcListAdd', {
        url: '/addParty',
        template: '<fc-list-add></fc-list-add>'
    });
}

//# sourceMappingURL=fcListAdd-compiled.js.map