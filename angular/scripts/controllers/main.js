'use strict';
/**
 * Created by Administrator on 2015/2/10.
 */
angular.module('yourAppDep').controller('MyCtrl', ['$scope',
    function($scope) {
        $scope.model = 'hello world';
        $scope.reset = function(){
            $scope.model = 'hello world';
        }
    }
]);

