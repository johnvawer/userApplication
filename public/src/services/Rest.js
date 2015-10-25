angular.module('Rest', []).factory('Rest', ['$http', function($http) {

    return {
        //Perform get request passing the relevant params
        get: function(url, params) {

            return $http({
                method: 'GET',
                url: url,
                params: params || null
            });
        }
    }

}]);