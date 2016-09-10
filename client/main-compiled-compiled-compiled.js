import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Meteor } from 'meteor/meteor';

import { name as Socially } from '../imports/ui/components/socially/socially';

function onReady() {}

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}

//# sourceMappingURL=main-compiled.js.map

//# sourceMappingURL=main-compiled-compiled.js.map

//# sourceMappingURL=main-compiled-compiled-compiled.js.map