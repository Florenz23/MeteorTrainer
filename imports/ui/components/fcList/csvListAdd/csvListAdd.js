import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import template from './csvListAdd.html';
import { Parties } from '../../../../api/fcLists';
import { FlashCards } from '../../../../api/flashCards';

class CsvAdd {
    constructor($stateParams) {
        'ngInject';
        this.fcList = {};
        this.list = {};
        this.fcList.listId = "WEEk8A8NWaKdNRNMJ";
/*      this.test = { "_id" : "4qvSuXqFiSQw4WC7z", "question" : "я", "answer" : "ja", "owner" : "sz4ptdPRdaYvpCYfe", "listId" : "5DPjftxrGTdQizWQw", "right" : 4, "wrong" : 0, "rating" : 4, "lastRevision" : 1467230430219, "importance" : -26.34075476606216 };*/
    }

    submit() {
        this.fcList.owner = Meteor.user()._id;
        this.test = {  "question" : "я", "answer" : "ja", "owner" : Meteor.user()._id, "listId" : this.fcList.listId, "right" : 0, "wrong" : 0, "rating" : 0, "lastRevision" : "notLearned" };
        console.log(this.test);
        FlashCards.insert(this.test, function(err,docsInserted){
            if(err)console.log(err);
            else {
                // The above statement will output the id of the
                // inserted object
            }
        });
        this.reset();

        if(this.done) {
            this.done();
        }

    }

    reset() {
        this.fcList = {};
    }
}

const name = 'csvListAdd';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter
]).component(name, {
    template,
    bindings: {
        done: '&?'
    },
    controllerAs: name,
    controller: CsvAdd
})
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('csvListAdd', {
            url: '/csvListAdd',
            template: '<csv-list-add></csv-list-add>'
        });
}

