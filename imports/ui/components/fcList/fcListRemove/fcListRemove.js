import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './fcListRemove.html';
import { Parties } from '../../../../api/fcLists';

class FcListRemove {
  remove() {
    if (this.list) {
      Parties.remove(this.list._id);
    }
  }
}

const name = 'fcListRemove';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
    template,
  bindings: {
    list: '<'
  },
  controllerAs: name,
  controller: FcListRemove
});
