'use strict';

accountApp.controller('AccountController',
        function ($scope, $location, $filter, jsonService) {

        	/*var request = {
        			method:'get',
        			url:'data/Accounts.json',
        			dataType: 'json',
                	contentType: 'application/json'
        	}*/

            $scope.accounts = new Array;

            jsonService.getJson( function(data){

                $scope.accounts =  data;
                $scope.list = $scope.accounts;
            });

            

        	/*$http(request)
        		.success (function (jsonData) {
                
        		$scope.accounts =  jsonData;
           		$scope.list = $scope.accounts;

        	})
        	.error(function () {

        	});
*/
            $scope.txnDetails = function(Selectedid){

                var TxnObj = $filter('filter')($scope.list, { accountID: Selectedid })[0];
                localStorage.setItem("TxnDetails",JSON.stringify(TxnObj));
                $location.path('/trans');
            };

    });