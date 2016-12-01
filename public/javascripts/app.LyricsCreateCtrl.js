angular.module('lyricalApp')
    .controller('LyricsCreateCtrl', function($scope, $http, $location, $rootScope) {

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

     $scope.addLyrics = function() {
            console.log('routed to saved lyrics page')
            $location.path('/createlyrics');
        };

     $scope.createLyric = function(artist, song, album, lyrics, year, genre, image, user_id) {
            $http({
                url: 'http://localhost:9292/dashboard/createlyrics',
                method: 'POST',
                params: { artist: artist, song: song, album: album, lyrics: lyrics, year: year, genre: genre, image: image, user_id: user_id }
            }).success(function(results) {
                console.log(results);
                console.log('Success');
                $location.path('/dashboard');
            }).error(function(err) {
                console.log('There was an error');
                console.log(err);

            });
        };

    });