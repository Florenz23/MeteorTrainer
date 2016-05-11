/**
 * Created by Florenz on 16.03.16.
 */
angular.module('vocabTrainer').controller('ShellController', function ($scope) {
    $scope.isActiveTab = function (tab) {
        return tab == $scope.activeTab;
    };

    $scope.$on('loadedController', function (event, section) {
        console.log('setting active tab to: ' + section);
        $scope.activeTab = section;
    });
});
