import { name as PartyAdd } from '../csvListAdd';
import { Parties } from '../../../../api/fcLists';
import 'angular-mocks';

describe('PartyAdd', () => {
  beforeEach(() => {
    window.module(PartyAdd);
  });

  describe('controller', () => {
    let controller;
    const fcList = {
      name: 'Foo',
      description: 'Birthday of Foo'
    };

    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(PartyAdd, {
          $scope: $rootScope.$new(true)
        });
      });
    });

    describe('reset()', () => {
      it('should clean up fcList object', () => {
        controller.fcList = fcList;
        controller.reset();

        expect(controller.fcList).toEqual({});
      });
    });

    describe('submit()', () => {
      beforeEach(() => {
        spyOn(Parties, 'insert');
        spyOn(controller, 'reset').and.callThrough();

        controller.fcList = fcList;

        controller.submit();
      });

      it('should insert a new fcList', () => {
        expect(Parties.insert).toHaveBeenCalledWith(fcList);
      });

      it('should call reset()', () => {
        expect(controller.reset).toHaveBeenCalled();
      });
    });
  });
});

//# sourceMappingURL=partyAdd.tests-compiled.js.map