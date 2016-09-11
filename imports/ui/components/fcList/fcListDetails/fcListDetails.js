import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import template from './fcListDetails.html';
import { Parties } from '../../../../api/fcLists';
import { name as PartyUninvited } from '../fcListUninvited/fcListUninvited';

class PartyDetails {
    constructor($stateParams, $scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.fcListId = $stateParams.fcListId;
        this.subscribe('fcLists');
        this.subscribe('users');
        this.helpers({
            fcList() {
                return Parties.findOne({
                    _id: $stateParams.fcListId
                });
            },
            users() {
                return Meteor.users.find({});
            },
            isLoggedIn() {
                return !!Meteor.userId();
            }

        });
    }

    canInvite() {
        if (!this.fcList) {
            return false;
        }

        return !this.fcList.public && this.fcList.owner === Meteor.userId();
    }

    save() {
        Parties.update({
            _id: this.fcList._id
        }, {
            $set: {
                name: this.fcList.name,
                description: this.fcList.description,
                public: this.fcList.public
            }
        }, (error) => {
            if (error) {
                console.log('Oops, unable to update the fcList...');
            } else {
                console.log('Done!');
            }
        });
    }
}

const name = 'fcListDetails';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    PartyUninvited
]).component(name, {
    template,
    controllerAs: name,
    controller: PartyDetails
})
    .config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('home.fcListDetails', {
        url: '/fcLists/:fcListId',
        template: '<fc-list-details></fc-list-details>',
        resolve: {
            currentUser($q) {
                if (Meteor.userId() === null) {
                    return $q.reject('AUTH_REQUIRED');
                } else {
                    return $q.resolve();
                }
            }
        }
    });
};