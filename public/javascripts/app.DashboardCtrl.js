angular.module('lyricalApp')
    .controller('DashboardCtrl', function($scope, $http, $location, $rootScope) {

    $scope.goToLyric = function(id) {
    		console.log('is this working')
            $location.path('/' + id);
    };	

    $scope.goToDashboard = function(id) {
            console.log('back on dashboard')
            $location.path('/dashboard');
    };  

    $scope.goToSavedLyrics = function() {
            console.log('routed to saved lyrics page')
            $location.path('/mylyrics');
    };

        $scope.addLyrics = function() {
            console.log('routed to saved lyrics page')
            $location.path('/createlyrics');
        };

        $scope.goToLogout = function(id) {
            
        $location.path('/');
    };

    $scope.lyrics = [];
    $scope.fetch = function() {
            $http.get('http://localhost:9292/dashboard').success(function(results) {
                $scope.lyrics = results;
            }).error(function(err) {
                console.log(err);
            });

        }

    $scope.sortField = 'artist';
    $scope.sortField = 'song';
    $scope.sortField = 'id';
    console.log($rootScope.key, 'this is the userid');
    $scope.fetch()


});


    