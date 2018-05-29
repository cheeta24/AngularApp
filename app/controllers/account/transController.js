'use strict';

accountApp.controller('transactionController',
        function ($scope, $http) {

                $scope.accountdata = new Array;
                var getAlldata = JSON.parse(localStorage.TxnDetails);
                $scope.accountdata = getAlldata;
                $scope.transactions = $scope.accountdata;
                //console.log($scope.transactions);

});