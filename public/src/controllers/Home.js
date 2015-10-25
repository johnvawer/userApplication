angular.module('Home', ['Rest']).controller('HomeController', function($scope, $location, Rest) {

    init();

    //Get all users
    function init() {
        Rest.get('/users').then(function(users) {
            $scope.users = users.data;
        });
    }

    this.onUserClick = function(userId) {
        console.log(userId);
    };

});