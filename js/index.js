// URL Routing
//'ui.grid', 'ui.grid.edit', 'ui.grid.cellNav','ui.grid.autoResize'
var myApp = angular.module('myApp', ['ngRoute', 'faq', 'imp']);

// angular.module('myApp').requires.push(
//   'ui.grid',
//   'ng-touch'
//   );
// myApp.controller('username-ctrl', function($scope) {
//   $scope.username = "Alkesh Srivastava";
// });

// angular
//   .module('myApp', [
//     'ng-route'
//   ])
  myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: 'main.html',
        // controller: 'mainController'
      })

      .when('/dashboard',{
        templateUrl: 'main.html',
        // controller: 'dashController'
      })
      .when("/manage-registrations", {
        templateUrl: "manage.html",
        // controller: 'manageController'
      })
      .when("/import", {
        templateUrl: "import.html",
        //templateUrl: "import.html"
        // controller: 'importController'
        controller: 'importController'
      })
      .when("/faq", {
        templateUrl: "faq.html",
        controller: 'faqController'
      })
      .when("/batch-assignment", {
        templateUrl: "batch.html",
        // controller: 'batchController'
      });
  }]);

// console.log("routed");
// myApp.controller('mainController', function($scope) {
//   $scope.message = 'Alkesh';
//   console.log("message 1 printed");
// });
//
// console.log("routed for second time");
// myApp.controller('dashController', function($scope) {
//   $scope.message = 'Dashboard Page';
//   console.log("message 2 printed");
// });
