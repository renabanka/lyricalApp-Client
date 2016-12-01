angular.module('lyricalApp')
    .controller('LyricsDetailCtrl', function($scope, $http, $routeParams, $rootScope, $location) {

    $scope.goToLyric = function(id) {
            console.log('is this working')
            $location.path('/' + id);
        };

    $scope.goToDashboard = function(id) {
            console.log('back on dashboard')
            $location.path('/dashboard');
        };

    $scope.goToSavedLyrics = function(id) {
            console.log('routed to saved lyrics page')
            $location.path('/mylyrics');
        };

    $scope.goToLogout = function(id) {

            $location.path('/');
        };


    $scope.addLyrics = function() {
            console.log('routed to saved lyrics page')
            $location.path('/createlyrics');
        };

    $scope.lyrics = "";
    $scope.fetch = function() {

        $http.get('http://localhost:9292/dashboard/' + $routeParams.id).success(function(results) {
            console.log($routeParams);
            console.log(results);
            $scope.lyrics = results;
            console.log(results);

        }).error(function(err) {
            console.log(err);
        });
    };

    $scope.fetch();

    $scope.saveToLyricsDatabase = function() {
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
             params: { song_id: $routeParams.id, user_id: localStorage.userid, song: $scope.lyrics.song, artist: $scope.lyrics.artist}
         }).success(function(results) {
             console.log(results);
             console.log($rootScope.key, 'this is the userid');
                 $scope.goToSavedLyrics();
            console.log('Success');
         }).error(function(err) {
             console.log('There was an error');
             console.log(err);
         })

     }
});













