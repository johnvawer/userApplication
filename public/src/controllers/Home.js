angular.module('Home', ['Rest']).controller('HomeController', function($scope, $location, Rest) {

    init();

    //Get all users
    function init() {
        Rest.get('/users').then(function(users) {
            $scope.users = users.data;
        });
    }

    /**
     * On selecting a user load the posts relating to the selected user
     *
     * @param {Number} userId
     */
    this.onUserClick = function(userId) {
        $location.path('post').search({
            userId: userId
        });
    };

});