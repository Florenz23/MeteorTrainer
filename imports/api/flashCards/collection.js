import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const FlashCards = new Mongo.Collection('flashCards');
FlashCards.allow({
    insert(userId, flashCard) {
        return userId && flashCard.owner === userId;
    },
    update(userId, flashCard, fields, modifier) {
        //return userId && flashCard.owner === userId;
        return userId ;
    },
    remove(userId, flashCard) {
        return userId && flashCard.owner === userId;
    }
});
