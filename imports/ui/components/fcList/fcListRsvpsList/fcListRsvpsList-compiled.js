import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './fcListRsvpsList.html';
import { name as PartyRsvpUsers } from '../fcListRsvpUsers/fcListRsvpUsers';

class PartyRsvpsList {}

const name = 'fcListRsvpsList';

// create a module
export default angular.module(name, [angularMeteor]).component(name, {
    templateUrl: `imports/ui/components/fcList/${ name }/${ name }.html`,
    controllerAs: name,
    bindings: {
        rsvps: '<'
    },
    controller: PartyRsvpsList
});

//# sourceMappingURL=fcListRsvpsList-compiled.js.map