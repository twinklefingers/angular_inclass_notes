var myApp = angular.module('myApp', []); // same as what was declared on html <html lang='en' nq-app="myApp">

myApp.controller('IndexController', ['$scope', function($scope) {
    console.log("hey, it's werkin");

    $scope.people = [{
        firstname: 'Kris',
        lastname: 'Szafranski'
    }, {
        firstname: 'Casie',
        lastname: 'Siekman'
    }];

    $scope.addPerson = function() {
        $scope.people.push({
            firstname: 'Danny',
            lastname: "Ritter"
        });
    }

    // this code block throws errors
    // $scope.person = [{
    //     $scope.firstname = 'Kris',
    //     $scope.lastname = 'S'
    // }, {
    //     $scope.firstname = 'Ray',
    //     $scope.lastname = 'W'
    // }];


    $scope.start = 0;
    $scope.total = 5;

    $scope.increment = function(number) {
        $scope.total += 5;
    }



}]);
