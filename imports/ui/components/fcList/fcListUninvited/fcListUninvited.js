/**
 * Created by Florenz on 15.04.16.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { name as DisplayNameFilter } from '../../../filters/displayNameFilter';

import { Meteor } from 'meteor/meteor';

import './fcListUninvited.html';
import { name as UninvitedFilter } from '../../../filters/uninvitedFilter';

class PartyUninvited {
    constructor($scope) {
        'ngInject';

        $scope.viewModel(this);

        this.helpers({
            users() {
                var users = Meteor.users.find({}).fetch();
                console.log(users);
                return users;
            }
        });
    }

    invite(user) {
        Meteor.call('invite', this.list._id, user._id,
            (error) => {
                if (error) {
                    console.log('Oops, unable to invite!');
                } else {
                    console.log('Invited!');
                }
            }
        );
    }

}

const name = 'fcListUninvited';

// create a module
export default angular.module(name, [
    angularMeteor,
    UninvitedFilter,
    DisplayNameFilter
]).component(name, {
    templateUrl: `imports/ui/components/fcList/${name}/${name}.html`,
    controllerAs: name,
    bindings: {
        list: '<'
    },
    controller: PartyUninvited
});