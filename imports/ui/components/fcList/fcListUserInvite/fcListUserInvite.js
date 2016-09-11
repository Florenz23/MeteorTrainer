import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './fcListUserInvite.html';

class PartyDetails {
    constructor($stateParams) {
        'ngInject';

        this.partyId = $stateParams.partyId;
    }
}

const name = 'fcListUserInvite';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter

]).component(name, {
    template,
    controllerAs: name,
    controller: PartyDetails
})
    .config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('fcListUserInvite', {
        url: '/parties/:partyId',
        template: '<fc-list-user-invite></fc-list-user-invite>'
    });
};