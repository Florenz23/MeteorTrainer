import angular from 'angular';
import angularMeteor from 'angular-meteor';

// import template from './fcListAddButton.html';
import template1 from'./fcListAddModal.html';
import { name as PartyAdd } from '../fcListAdd/fcListAdd';

class PartyAddButton {
    constructor() {
        'ngInject';

    }

}

const name = 'fcListAddButton';

// create a module
export default angular.module(name, [
    angularMeteor,
    PartyAdd
]).component(name, {
    template1,
    controllerAs: name,
    controller: PartyAddButton
});