import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';

import { FlashCards } from '../../../api/flashCards';


export function ClassFlashCard(flashCardObject) {
    this.init = function () {
        this.setId(flashCardObject);
        this.question = flashCardObject.question;
        this.setAnswer(flashCardObject);
        this.setAnswers(flashCardObject);
        this.poolStatus = this.setStartPoolStatus(flashCardObject.poolStatus);
        this.setLastRevision(flashCardObject);
        this.setRight(flashCardObject);
        this.setWrong(flashCardObject);
        this.setRating(flashCardObject);
        this.calculateImportance();
    };


    this.setId = function (object) {
        if (object._id) {
            this._id = object._id;
        }
        if (object.id) {
            this.id = object.id;
        }
    };
    this.setAnswer = function (object) {
        if (object.answer) {
            this.answer = object.answer;
        } else {
            this.answer = false;
        }
    };
    this.setAnswers = function (object) {
        if (object.answers) {
            this.answers = object.answers;
        } else {
            this.answers = false;
        }
    };
    this.setLastRevision = function (object) {
        if (object.lastRevision) {
            this.lastRevision = object.lastRevision;
        } else {
            this.lastRevision = "notLearned";
        }
    };

    this.setRight = function (flashCardObject) {
        if (!isNaN(parseFloat(flashCardObject.right))) {
            this.right = flashCardObject.right;
        } else {
            this.right = 0;
        }
    };
    this.setWrong = function (flashCardObject) {
        if (!isNaN(parseFloat(flashCardObject.wrong))) {
            this.wrong = flashCardObject.wrong;
        } else {
            this.wrong = 0;
        }
    };
    this.setRating = function (flashCardObject) {
        if (!isNaN(parseFloat(flashCardObject.rating))) {
            this.rating = flashCardObject.rating;
        } else {
            this.rating = 0;
        }
    };

    this.setStartPoolStatus = function (poolStatus) {
        var start_pool_status = 1;
        var newPoolStatus;
        if (poolStatus == undefined) {
            newPoolStatus = start_pool_status;
        } else {
            newPoolStatus = poolStatus;
        }
        return newPoolStatus;
    };

    this.markAsCorrectAnswered = function () {
        this.updateRight();
        this.updateData(1);
        if (this.poolStatus <= 0) {
            this.poolStatus++;
        }
    };
    this.markAsWrongAnswered = function () {
        this.updateWrong();
        this.updateData(0);
        this.poolStatus = -1;
    };
    this.updateData = function (check) {
        this.correctLastRevision();
        if (this.poolStatus == 1){
            this.calculateRating(check);
            this.setImportance();
        }
        this.updateDbFlashCard();
    };
    this.correctLastRevision = function(){
        if (this.lastRevision == "notLearned"){
            this.lastRevision = new Date().getTime();
        }
    };
    this.updateRight = function () {
        this.right++;
    };
    this.updateWrong = function () {
        this.wrong++;
    };
    this.calculateRating = function (correct) {
        if (this.poolStatus != 1) {
            return;
        }
        var rating = this.rating;
        if (correct == 1) {
            rating++;
        }
        if (correct == 0) {
            if (rating > -1) {
                rating = -0.1 * rating - 1.1;
            }
        }
        this.rating = rating;
        //this.rating = Math.round(this.rating).toFixed(2);
        return rating;
    };
    this.setImportance = function(){
        if (this.lastRevision == "notLearned"){
            this.setNotLearnedImportance();
        }  else {
            this.calculateImportance();
        };
    }
    this.calculateImportance = function () {
        var passed_time = (new Date().getTime() - this.lastRevision ) / (3600 * 24 * 1000); //in Tagen (!)
        this.importance = passed_time - (0.17 * Math.exp(1.4 * this.rating - 0.17));
        //this.importance = Math.round(this.importance).toFixed(6);
    };
    this.setNotLearnedImportance = function(){
        if (this.lastRevision == "notLearned"){
            this.importance = 0;
        };
    };
    this.updateDbFlashCard = function () {
        console.log(this);
        FlashCards.update({
            _id: this._id
        }, {
            $set: {
                right: this.right,
                wrong: this.wrong,
                rating: this.rating,
                importance: this.importance,
                lastRevision: new Date().getTime(),
            }
        }, (error) => {
            if (error) {
                console.log('Oops, unable to update the flashCard...');
            } else {
                console.log('Updated!');
            }
        });
    }
    this.init();

}