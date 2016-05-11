import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';
import { Counts } from 'meteor/tmeasday:publish-counts';

import './fcListsList.html';
import { Parties } from '../../../../api/fcLists';
import { name as PartyAdd } from '../fcListAdd/fcListAdd';
import { name as PartyRemove } from '../fcListRemove/fcListRemove';
import { name as PartiesSort } from '../fcListsSort/fcListsSort';
import { name as PartyAddButton } from '../fcListAddButton/fcListAddButton';

import { name as PartyCreator } from '../fcListCreator/fcListCreator';
import { name as PartyRsvp } from '../fcListRsvp/fcListRsvp';
import { name as PartyRsvpsList } from '../fcListRsvpsList/fcListRsvpsList';
import { name as PartyUnanswered } from '../fcListUnanswered/fcListUnanswered';

import { name as DisplayFlashCard } from '../../flashCard/displayFlashCard/displayFlashCard';

class PartiesList {
    constructor($scope, $reactive,$stateParams) {
        'ngInject';

        $reactive(this).attach($scope);
        this.perPage = 3;
        this.page = 1;
        this.sort = {
            name: 1
        };
        this.searchText = '';


        this.subscribe('fcLists', () => [{
            limit: parseInt(this.perPage),
            skip: parseInt((this.getReactively('page') - 1) * this.perPage),
            sort: this.getReactively('sort')
        }, this.getReactively('searchText')
        ]);
        this.subscribe('users');


        this.helpers({
            fcLists() {
                const selector = {
                };
                return Parties.find(selector, {
                    sort: this.getReactively('sort')
                });
            },
            fcListsCount() {
                return Counts.get('numberOfParties');
            },
            isLoggedIn() {
                return !!Meteor.userId();
            },
            currentUserId() {
                return Meteor.userId();
            }
        });

    }
    isOwner(fcList) {
        return this.isLoggedIn && fcList.owner === this.currentUserId;
    }

    pageChanged(newPage) {
        this.page = newPage;
    }

    sortChanged(sort) {
        this.sort = sort;
    }
}

const name = 'fcListsList';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    PartyAdd,
    utilsPagination,
    PartiesSort,
    PartyRemove,
    PartyCreator,
    PartyRsvp,
    PartyRsvpsList,
    PartyAddButton,
    DisplayFlashCard,

]).component(name, {
    templateUrl: `imports/ui/components/fcList/${name}/${name}.html`,
    controllerAs: name,
    controller: PartiesList
});
