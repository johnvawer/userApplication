angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController as model'
        })
        .when('/post', {
            templateUrl: 'views/posts.html',
            controller: 'PostsController as model'
        })
        .when('/comment', {
            templateUrl: 'views/comments.html',
            controller: 'CommentsController as model'
        });
}]);