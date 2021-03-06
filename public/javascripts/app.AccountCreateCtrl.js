angular.module('lyricalApp')
    .controller('AccountCreateCtrl', function($scope, $http, $location, $rootScope) {

        $scope.changetoRoute = function() {
            $location.path('/');
        };

        $scope.message = '';

        $scope.createAccount = function(username, email, password) {
            $http({
                url: 'http://104.236.15.65/account/register',
                method: 'POST',
                params: { username: username, email: email, password: password }
            }).success(function(results) {
                console.log(results);
                if (results == 'User does not exist') {
                    $scope.changetoRoute();
                }
                else {
                    $scope.message = results
                    $scope.username = username
                    console.log('that username is taken')
                }
            }).error(function(err) {
                console.log('There was an error');
                console.log(err);
            });
        };

    });

