angular.module('lyricalApp')
    .controller('UserLyricsCtrl', function($scope, $http, $routeParams, $rootScope, $location) {

        $scope.goToLyric = function(id) {
            console.log('is this working')
            $location.path('/' + id);
        };

        $scope.goToDashboard = function() {
            console.log('back on dashboard')
            $location.path('/dashboard');
        };

        $scope.goToSavedLyrics = function() {
            console.log('routed to saved lyrics page')
            $location.path('/mylyrics');
        };

        $scope.goToLogout = function() {
            $location.path('/');
        };

        $scope.newuserlyrics = [];
        $scope.fetch = function() {

            $http.get('http://localhost:9292/userlyrics/').success(function(results) {
                console.log($routeParams);
                console.log(results);
                $scope.userlyrics = results;

                for (var i = 0; i < results.length; i++) {

                    console.log(results[i].user_id)
                    console.log(localStorage.userid)
                    if (results[i].user_id == localStorage.userid) {
                        console.log('there was a match!')
                        $scope.newuserlyrics.push($scope.userlyrics[i])}
                    else {
                        console.log('this is not working :(')
                    }

                }

                //console.log($scope.newuserlyrics);


            }).error(function(err) {
                console.log(err);
            });
        };

        $scope.fetch()

        $scope.deleteFromUserLyricsDatabase = function() {
            $http({
                url: 'http://localhost:9292/userlyrics/:id',
                method: 'DELETE',
                params: { id: $routeParams.id}
            }).success(function(results) {
                console.log(results);
                console.log('Success');
            }).error(function(err) {
                console.log('There was an error');
                console.log(err);
            })

        }

    });
