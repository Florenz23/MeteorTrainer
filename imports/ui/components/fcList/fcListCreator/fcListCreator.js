import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './fcListCreator.html';
import { name as DisplayNameFilter } from '../../../filters/displayNameFilter';

/**
 * PartyCreator component
 */
class PartyCreator {
    constructor($scope) {
        'ngInject';

        $scope.viewModel(this);

        this.helpers({
            creator() {
                if (!this.list) {
                    return '';
                }

                const owner = this.list.owner;

                if (Meteor.userId() !== null && owner === Meteor.userId()) {
                    return 'me';
                }

                return Meteor.users.findOne(owner) || 'nobody';
            }
        });
    }
}

const name = 'fcListCreator';

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
    controller: PartyCreator
});