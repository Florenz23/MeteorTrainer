import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './csvListAdd.html';
import {Parties} from '../../../../api/fcLists';
import {FlashCards} from '../../../../api/flashCards';
import {CsvJsonConverter} from './csvConvertFactory'

class CsvAdd {
    constructor($stateParams) {
        'ngInject';
        this.fcList = {};
        this.list = {};
        this.fcList.listId = "WEEk8A8NWaKdNRNMJ";
        this.data = {};
        this.data.csv = '"ja","yes","eng"\n"nein","no","eng"';
        this.data.json = "moin";
        this.data.keys = '"question","answer","comment","owner","listId","right","wrong","rating","lastRevision"';
        this.data.listId = "WEEk8A8NWaKdNRNMJ";
        this.data.lastRevision = "notLearned";
    }

    getKeys = function () {
        var csv = this.data.keys;
        var array = CsvJsonConverter.CSVToArray(csv);
        return array;
    };

    convertToJson = function () {
        var convert_data = {};
        convert_data.csv = this.data.csv;
        convert_data.key_arr = this.getKeys();
        convert_data.owner = Meteor.user()._id;
        convert_data.listId = this.data.listId;
        var json = CsvJsonConverter.CSV2JSON(convert_data);
        console.log(json);
        return json;
    };
    display = function () {
        var owner = "asdflkj23234";
        var json = this.convertToJson(owner);
        this.data.json = json;
    }

    submit() {
        var data = this.convertToJson();
        data = JSON.parse(data);
        for (var i = 0;i<data.length;i++){
            FlashCards.insert(data[i]);
        }
        this.reset();

        if (this.done) {
            this.done();
        }

    }

    reset() {
        this.data = {};
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

