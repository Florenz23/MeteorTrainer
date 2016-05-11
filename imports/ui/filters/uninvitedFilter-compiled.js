import angular from 'angular';
import _ from 'underscore';

const name = 'uninvitedFilter';

function UninvitedFilter(users, fcList) {
    if (!fcList) {
        return false;
    }

    return users.filter(user => {
        // if not the owner and not invited
        return user._id !== fcList.owner && !_.contains(fcList.invited, user._id);
    });
}

// create a module
export default angular.module(name, []).filter(name, () => {
    return UninvitedFilter;
});

//# sourceMappingURL=uninvitedFilter-compiled.js.map