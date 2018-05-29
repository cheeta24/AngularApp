'use strict';


// Creating Service
accountApp.service('jsonService', function ($http) {

var displayServ = {};

this.getJson = function (callback) {

    $http.get('data/Accounts.json')
            .success(function(data) {
                displayServ =  data;
                callback(data);
            });

    return displayServ;

}

});



//Another Way is using Factory
//accApp.factory('jsonService', function($http) {
    
/*return {

getJson: function (callback) {


    var displayFact = [];
    $http.get('data/Accounts.json')
            .success(function(data) {
                displayFact =  data;
                console.log(displayFact);
                callback(data);
            });
    
    return displayFact;
  
}

};

});*/
