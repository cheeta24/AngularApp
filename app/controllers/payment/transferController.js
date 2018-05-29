'use strict';

transferApp.controller('TransferController',
            function($scope, $http, jsonService){
                
                $scope.myCollections = {};

                jsonService.getJson( function(data){

                    $scope.fromnames = data;
                    $scope.tonames = data;
                });
                
                
                $scope.fromnames = $scope.myCollections;
                $scope.tonames = $scope.fromnames;

                $scope.onTransfer = function () {
                    $scope.Message = "Amount Transferred SuccessFully."
                }

                $scope.onCancel = function () {
                    
                    $scope.selectedFromName ="";
                    $scope.selectedToName = "";
                    $scope.amount = "";
                    $scope.remark="";
                    $scope.myVar=""; 
                    $scope.Message = "Transaction Cancelled."
                }

            
 });
