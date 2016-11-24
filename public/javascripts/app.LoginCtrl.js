angular.module('lyricalApp')
    .controller('LoginCtrl', function($scope, $http, $location, $rootScope) {

        console.log($rootScope)

        $scope.changetoLoginRoute = function() {
            $location.path('/dashboard');
        }
        $scope.changetoRegisterRoute = function() {
            $location.path('/register');
        }
        $scope.message = ''
        $scope.loginToDashboard = function(username, password) {
            $http({
                url: 'http://localhost:9292/account/login',
                method: 'POST',
                params: { username: username, password: password }
            }).success(function(results) {
                console.log(results , username, password);
                if (!results.key) {
                    $scope.message = results.message;

                } else {
                    $scope.message = results.message;
                    $rootScope.key = results.key;
                    console.log($rootScope);
                    $scope.changetoLoginRoute();
                }
            }).error(function(err) {
                console.log('There was an error');
                console.log(err);
            });
        };

    });
