import angular from 'angular';
import angularMeteor from 'angular-meteor';
import _ from 'underscore';

import { Meteor } from 'meteor/meteor';

import './fcListUnanswered.html';
import { name as DisplayNameFilter } from '../../../filters/displayNameFilter';

class PartyUnanswered {
    getUnanswered() {
        if (!this.fcList || !this.fcList.invited) {
            return;
        }

        return this.fcList.invited.filter(user => {
            return !_.findWhere(this.fcList.rsvps, { user });
        });
    }

    getUserById(userId) {
        return Meteor.users.findOne(userId);
    }
}

const name = 'fcListUnanswered';

// create a module
export default angular.module(name, [angularMeteor, DisplayNameFilter]).component(name, {
    templateUrl: `imports/ui/components/fcList/${ name }/${ name }.html`,
    controllerAs: name,
    bindings: {
        fcList: '<'
    },
    controller: PartyUnanswered
});

//# sourceMappingURL=fcListUnanswered-compiled.js.map