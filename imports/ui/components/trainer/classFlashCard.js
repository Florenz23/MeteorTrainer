import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';

import { FlashCards } from '../../../api/flashCards';


export class ClassFlashCard {
    constructor(flashCardObject) {
        this.id = flashCardObject._id;
        this.question = flashCardObject.question;
        this.answer = flashCardObject.answer;
        this.poolStatus = this.setStartPoolStatus(flashCardObject.poolStatus);
        this.lastRevision = flashCardObject.lastRevision;
        this.setRight(flashCardObject);
        this.setWrong(flashCardObject);
        this.setRating(flashCardObject);
        this.calculateImportance();
    }

    setRight = function (flashCardObject) {
        if (!isNaN(parseFloat(flashCardObject.right))) {
            this.right = flashCardObject.right;
        } else {
            this.right = 0;
        }
    }
    setWrong = function (flashCardObject) {
        if (!isNaN(parseFloat(flashCardObject.wrong))) {
            this.wrong = flashCardObject.wrong;
        } else {
            this.wrong = 0;
        }
    }
    setRating = function (flashCardObject) {
        if (!isNaN(parseFloat(flashCardObject.rating))) {
            this.rating = flashCardObject.rating;
        } else {
            console.log("jo");
            this.rating = 0;
        }
    }

    setStartPoolStatus = function (poolStatus) {
        var start_pool_status = 1;
        var newPoolStatus;
        if (poolStatus == undefined) {
            newPoolStatus = start_pool_status;
        } else {
            newPoolStatus = poolStatus;
        }
        return newPoolStatus;
    }

    markAsCorrectAnswered = function () {
        if (this.poolStatus <= 0) {
            this.poolStatus++;
        }
        this.updateRight();
        this.updateData(1);
    }
    markAsWrongAnswered = function () {
        this.poolStatus = -1;
        this.updateWrong();
        this.updateData(0);
    }
    updateData = function(check){
        this.calculateRating(check);
        this.calculateImportance();
        this.updateDbFlashCard();
    }
    updateRight = function () {
        this.right++;
    }
    updateWrong = function () {
        this.wrong++;
    }
    updateDbFlashCard = function () {
        FlashCards.update({
            _id: this.id
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
    calculateRating = function (correct) {
        if(this.poolStatus != 1){
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
    }
    calculateImportance = function () {
        var passed_time = (new Date().getTime() - this.lastRevision ) / (3600 * 24 * 1000); //in Tagen (!)
        console.log("passed_time"+passed_time);
        console.log("rating"+this.rating);
        this.importance = passed_time - (0.17 * Math.exp(1.4 * this.rating - 0.17));
        //this.importance = Math.round(this.importance).toFixed(6);
    }
}

