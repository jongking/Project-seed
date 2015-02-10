/**
 * Created by Administrator on 2015/2/10.
 */
'use strict';
angular.module('yourAppDep').filter('upCase', function() {
    return function(input) {
        return input.toUpperCase();
    };
});
