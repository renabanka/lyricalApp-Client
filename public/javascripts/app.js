angular.module('lyricalApp', [ 'ngRoute'
]).config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {



        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false // good for anything IE9+
        });

        $routeProvider
            .when('/', {
                templateUrl: 'ngViews/login.html',
                controller: 'LoginCtrl'
            })        
            .when('/register', {
                templateUrl: 'ngViews/register.html',
                controller: 'AccountCreateCtrl'
            })
            .when('/dashboard', {
                templateUrl: 'ngViews/dashboard.html',
                controller: 'DashboardCtrl'

            })

            .when('/createlyrics', {
                templateUrl: 'ngViews/addlyric.html',
                controller: 'LyricsCreateCtrl'

            })

            .when('/mylyrics', {
                templateUrl: 'ngViews/userlyrics.html',
                controller: 'UserLyricsCtrl'

            })
            .when('/:id', {
                templateUrl: 'ngViews/lyrics.html',
                controller: 'LyricsDetailCtrl'
                
            });


        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);