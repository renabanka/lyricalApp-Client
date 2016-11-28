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

    $scope.userlyrics = [];
    $scope.fetch = function() {

        $http.get('http://localhost:9292/userlyrics/').success(function(results) {
            console.log($routeParams);
            console.log(results);
            $scope.userlyrics = results;
            console.log(results);
            console.log($rootScope.key, 'userid!');
            // 1. get user id
            // 2. loop through results
            // 3. if results .user_id == id
            // 4. push to $scope.userLyrics

        }).error(function(err) {
            console.log(err);
        });
    };

    $scope.fetch()

    $scope.deleteFromUserLyricsDatabase = function() {
            var uid = $rootScope.key;
            console.log(uid);
            console.log('this is happeninggg')
            console.log($scope.lyrics.song)
            console.log($scope.lyrics.artist)
            console.log($scope.lyrics.lyrics)
            console.log($routeParams.id, ' this is route params')
            console.log($rootScope, ' this is rootscope')
            $http({
                url: 'http://localhost:9292/userlyrics/savelyrics',
                method: 'POST',
                params: { song_id: $routeParams.id, user_id: $rootScope.key, song: $scope.lyrics.song, artist: $scope.lyrics.artist}
            }).success(function(results) {
                console.log(results);
                console.log($rootScope.key, 'this is the userid');
                // $scope.changetoRoute();
                console.log('Success');
            }).error(function(err) {
                console.log('There was an error');
                console.log(err);
            })

        }

});
