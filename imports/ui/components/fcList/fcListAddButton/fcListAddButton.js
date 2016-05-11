import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './fcListAddButton.html';
import './fcListAddModal.html';
import { name as PartyAdd } from '../fcListAdd/fcListAdd';

class PartyAddButton {
    constructor($mdDialog, $mdMedia) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia
    }

    open(event) {
        this.$mdDialog.show({
            controller($mdDialog) {
                'ngInject';

                this.close = () => {
                    $mdDialog.hide();
                }
            },
            controllerAs: 'fcListAddModal',
            templateUrl: `imports/ui/components/fcList/${name}/fcListAddModal.html`,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}

const name = 'fcListAddButton';

// create a module
export default angular.module(name, [
    angularMeteor,
    PartyAdd
]).component(name, {
    templateUrl: `imports/ui/components/fcList/${name}/${name}.html`,
    controllerAs: name,
    controller: PartyAddButton
});