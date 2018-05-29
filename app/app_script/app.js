'use strict';

// declare modules
var accountApp = angular.module('BasicHttpAuthExample', ['ngRoute', 'ngCookies']);
var transferApp = angular.module('myApp', ['BasicHttpAuthExample']);

angular.module('angularApp', [
    'ng',
    'ngRoute',
    'ngCookies',
    'myApp',
    'BasicHttpAuthExample'
])

 .config(['$routeProvider', function ($routeProvider) {
	
    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'views/login/login.html',
            hideMenus: true
        })
 
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'views/home/home.html'
        })

        .when('/account', {
            controller: 'AccountController',
            templateUrl: 'views/account/account.html'
        })

        .when('/trans', {
            controller: 'transactionController',
            templateUrl: 'views/account/trans.html'
        })

        .when('/transfer', {
            controller : 'TransferController',
            templateUrl : 'views/payment/transfer.html'
        
         })
 
        .otherwise({ redirectTo: '/login' });
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);