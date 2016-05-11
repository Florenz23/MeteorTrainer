import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './partyDetails.html';

class PartyDetails {
    constructor($stateParams) {
        'ngInject';

        this.partyId = $stateParams.partyId;
    }
}

const name = 'partyDetails';

// create a module
export default angular.module(name, [angularMeteor, uiRouter]).component(name, {
    templateUrl: `imports/ui/components/${ name }/${ name }.html`,
    controllerAs: name,
    controller: PartyDetails
}).config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('partyDetails', {
        url: '/parties/:partyId',
        template: '&lt;party-details&gt;&lt;/party-details&gt;'
    });
};

//# sourceMappingURL=fcListUserInvite-compiled.js.map