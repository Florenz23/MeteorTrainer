import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './fcListRsvpUsers.html';
import { name as DisplayNameFilter } from '../../../filters/displayNameFilter';

class PartyRsvpUsers {
    getUserById(userId) {
        return Meteor.users.findOne(userId);
    }
}

const name = 'fcListRsvpUsers';

// create a module
export default angular.module(name, [
    angularMeteor,
    DisplayNameFilter
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        rsvps: '<',
        type: '@'
    },
    controller: PartyRsvpUsers
});