import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './fcListRemove.html';
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
  templateUrl: `imports/ui/components/fcList/${name}/${name}.html`,
  bindings: {
    list: '<'
  },
  controllerAs: name,
  controller: FcListRemove
});
