import { name as PartyRemove } from '../fcListRemove';
import { Parties } from '../../../../api/fcLists';
import 'angular-mocks';

describe('PartyRemove', () => {
  beforeEach(() => {
    window.module(PartyRemove);
  });

  describe('controller', () => {
    let controller;
    const fcList = {
      _id: 'fcListId'
    };

    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(PartyRemove, {
          $scope: $rootScope.$new(true)
        }, {
          fcList
        });
      });
    });

    describe('remove()', () => {
      beforeEach(() => {
        spyOn(Parties, 'remove');
        controller.remove();
      });

      it('should remove a fcList', () => {
        expect(Parties.remove).toHaveBeenCalledWith(fcList._id);
      });
    });
  });
});

//# sourceMappingURL=partyRemove.tests-compiled.js.map

//# sourceMappingURL=partyRemove.tests-compiled-compiled.js.map

//# sourceMappingURL=partyRemove.tests-compiled-compiled-compiled.js.map