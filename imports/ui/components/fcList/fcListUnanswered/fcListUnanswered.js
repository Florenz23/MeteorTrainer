import angular from 'angular';
import angularMeteor from 'angular-meteor';
import _ from 'underscore';

import { Meteor } from 'meteor/meteor';

import template from './fcListUnanswered.html';
import { name as DisplayNameFilter } from '../../../filters/displayNameFilter';

class PartyUnanswered {
    getUnanswered() {
        if (!this.list || !this.list.invited) {
            return;
        }

        return this.list.invited.filter((user) => {
                return !_.findWhere(this.list.rsvps, { user });
    });
}

getUserById(userId) {
    return Meteor.users.findOne(userId)
}
}

const name = 'fcListUnanswered';

// create a module
export default angular.module(name, [
    angularMeteor,
    DisplayNameFilter
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        list: '<'
    },
    controller: PartyUnanswered
});