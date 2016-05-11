import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';

import { Parties } from './collection';

function getContactEmail(user) {
    if (user.emails && user.emails.length)
        return user.emails[0].address;

    if (user.services && user.services.facebook && user.services.facebook.email)
        return user.services.facebook.email;

    return null;
}

export function invite(fcListId, userId) {
    check(fcListId, String);
    check(userId, String);

    if (!this.userId) {
        throw new Meteor.Error(400, 'You have to be logged in!');
    }

    const fcList = Parties.findOne(fcListId);

    if (!fcList) {
        throw new Meteor.Error(404, 'No such fcList!');
    }

    if (fcList.owner !== this.userId) {
        throw new Meteor.Error(404, 'No permissions!');
    }

    if (fcList.public) {
        throw new Meteor.Error(400, 'That fcList is public. No need to invite people.');
    }

    if (userId !== fcList.owner && ! _.contains(fcList.invited, userId)) {
        Parties.update(fcListId, {
            $addToSet: {
                invited: userId
            }
        });

        const replyTo = getContactEmail(Meteor.users.findOne(this.userId));
        const to = getContactEmail(Meteor.users.findOne(userId));

        if (Meteor.isServer && to) {
            Email.send({
                to,
                replyTo,
                from: 'noreply@socially.com',
                subject: `PARTY: ${fcList.title}`,
                text: `
          Hey, I just invited you to ${fcList.title} on Socially.
          Come check it out: ${Meteor.absoluteUrl()}
        `
            });
        }
    }
}
export function rsvp(fcListId, rsvp) {
    check(fcListId, String);
    check(rsvp, String);

    if (!this.userId) {
        throw new Meteor.Error(403, 'You must be logged in to RSVP');
    }

    if (!_.contains(['yes', 'no', 'maybe'], rsvp)) {
        throw new Meteor.Error(400, 'Invalid RSVP');
    }

    const fcList = Parties.findOne({
        _id: fcListId,
        $or: [{
            // is public
            $and: [{
                public: true
            }, {
                public: {
                    $exists: true
                }
            }]
        },{
            // is owner
            $and: [{
                owner: this.userId
            }, {
                owner: {
                    $exists: true
                }
            }]
        }, {
            // is invited
            $and: [{
                invited: this.userId
            }, {
                invited: {
                    $exists: true
                }
            }]
        }]
    });

    if (!fcList) {
        throw new Meteor.Error(404, 'No such fcList');
    }

    const hasUserRsvp = _.findWhere(fcList.rsvps, {
        user: this.userId
    });

    if (!hasUserRsvp) {
        // add new rsvp entry
        Parties.update(fcListId, {
            $push: {
                rsvps: {
                    rsvp,
                    user: this.userId
                }
            }
        });
    } else {
        // update rsvp entry
        const userId = this.userId;
        Parties.update({
            _id: fcListId,
            'rsvps.user': userId
        }, {
            $set: {
                'rsvps.$.rsvp': rsvp
            }
        });
    }
}

Meteor.methods({
    invite,
    rsvp
});

