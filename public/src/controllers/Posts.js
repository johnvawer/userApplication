angular.module('Posts', ['Rest']).controller('PostsController', function($scope, $routeParams, $location, Rest) {

    init();

    //Get all posts
    function init() {
        var userId = $routeParams.userId;

        Rest.get('/posts', {
            userId: userId
        }).then(function(posts) {
            $scope.posts = posts.data;
        });
    }

    /**
     * When selecting a post redirect to the comments
     *
     * @param {Number} postId
     */
    this.onPostClick = function(postId, userId) {
        $location.path('/comment').search({
            postId: postId,
            userId: userId
        });
    };

    /**
     * Return to the list of users
     */
    this.onBackToUsers = function() {
        $location.path('/').search({});
    };

});