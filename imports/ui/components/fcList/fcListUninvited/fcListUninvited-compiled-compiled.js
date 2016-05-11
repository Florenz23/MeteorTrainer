/**
 * Created by Florenz on 15.04.16.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import './fcListUninvited.html';
import { name as UninvitedFilter } from '../../../filters/uninvitedFilter';

class PartyUninvited {
    constructor($scope) {
        'ngInject';

        $scope.viewModel(this);

        this.helpers({
            users() {
                return Meteor.users.find({});
            }
        });
    }
}

const name = 'fcListUninvited';

// create a module
export default angular.module(name, [angularMeteor, UninvitedFilter]).component(name, {
    templateUrl: `imports/ui/components/${ name }/${ name }.html`,
    controllerAs: name,
    bindings: {
        fcList: '&lt;'
    },
    controller: PartyUninvited
});

//# sourceMappingURL=fcListUninvited-compiled.js.map

//# sourceMappingURL=fcListUninvited-compiled-compiled.js.map