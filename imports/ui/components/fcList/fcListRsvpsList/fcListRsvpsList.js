import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './fcListRsvpsList.html';
import { name as PartyRsvpUsers } from '../fcListRsvpUsers/fcListRsvpUsers';

class PartyRsvpsList { }

const name = 'fcListRsvpsList';

// create a module
export default angular.module(name, [
    angularMeteor,
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        rsvps: '<'
    },
    controller: PartyRsvpsList
});