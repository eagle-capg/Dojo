'use strict';

angular.module('prjIntegrAngularApp')
  .controller('MainCtrl', function ($scope) {

  	console.log("Hello world");
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
