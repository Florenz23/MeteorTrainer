import angular from 'angular';
import angularMeteor from 'angular-meteor';
import _ from 'underscore';

import { Meteor } from 'meteor/meteor';

import template from './fcListRsvp.html';

class PartyRsvp {
    yes() {
        this.answer('yes');
    }

    isYes() {
        return this.isAnswer('yes');
    }

    maybe() {
        this.answer('maybe');
    }

    isMaybe() {
        return this.isAnswer('maybe');
    }

    no() {
        this.answer('no');
    }

    isNo() {
        return this.isAnswer('no');
    }


    answer(answer) {
        Meteor.call('rsvp', this.list._id, answer, (error) => {
            if (error) {
                console.error('Oops, unable to rsvp!');
            } else {
                console.log('RSVP done!')
            }
        });

    }

    isAnswer(answer) {
        if (this.list) {
            return !!_.findWhere(this.list.rsvps, {
                user: Meteor.userId(),
                rsvp: answer
            });
        }
    }
}

const name = 'fcListRsvp';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        list: '<'
    },
    controller: PartyRsvp
});