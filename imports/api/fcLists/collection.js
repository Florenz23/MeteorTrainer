import { Mongo } from 'meteor/mongo';

export const Parties = new Mongo.Collection('fcLists');
Parties.allow({
    insert(userId, fcList) {
        return userId && fcList.owner === userId;
    },
    update(userId, fcList, fields, modifier) {
        return userId && fcList.owner === userId;
    },
    remove(userId, fcList) {
        return userId && fcList.owner === userId;
    }
});
