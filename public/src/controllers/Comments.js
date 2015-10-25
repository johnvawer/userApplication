angular.module('Comments', ['Rest']).controller('CommentsController', function($scope, $routeParams, $location, Rest) {

    init();

    //Get all posts
    function init() {
        var postId = $routeParams.postId;

        Rest.get('/comments', {
            postId: postId
        }).then(function(comments) {
            $scope.comments = comments.data;
        });
    }

    /**
     * Navigate back to the posts
     */
    this.onBackToPosts = function() {
        var userId = $routeParams.userId;

        $location.path('/post').search({
            userId: userId
        });
    };

});