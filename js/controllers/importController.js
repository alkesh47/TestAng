console.log("Code reached of import controller");
//angular.module.requires.push('ui.grid', 'ng-touch');
//var imp = angular.module('imp', ['ui.grid','ng-touch']);

var imp = angular.module('imp',['ui.grid', 'ui.grid.edit', 'ui.grid.cellNav','ui.grid.autoResize']);

//Wrong way of injecting dependencies----->>>>

// imp.controller('importController', function($scope) {
// imp.controller('importController', ['$scope', function($scope) {
//     $scope.message = 'Import controller routed successfully..!!';
//     //console.log("message printed");
//     $scope.myData = [
//       {
//         "firstname" : "Alkesh",
//         "lastname"  : "Srivastava"
//       },
//       {
//         "firstname" : "Alkesh",
//         "lastname"  : "Srivastava"
//       },
//       {
//         "firstname" : "Alkesh",
//         "lastname"  : "Srivastava"
//       }
//     ];
//   }]);

// imp.controller('importController', importController);
//     //console.log("message printed");
//
// importController.$inject=['$scope'];
//
// function importController($scope) {
//   $scope.message = 'Import controller routed successfully..!!';
//   $scope.myData = [
//     {
//       "firstname" : "Alkesh",
//       "lastname"  : "Srivastava"
//     },
//     {
//       "firstname" : "Alkesh",
//       "lastname"  : "Srivastava"
//     },
//     {
//       "firstname" : "Alkesh",
//       "lastname"  : "Srivastava"
//     }
//   ];
// }


imp.controller('importController', importController);

importController.$inject = ['$scope','$http'];

function importController($scope, $http){
  $scope.message = "Import Page route successful..!";
  $scope.gridOpts = {
	  // enableGridMenus : false,
	  // enableSorting: false,
	  // enableFiltering: false,
	  // enableCellEdit : false,
	  // enableColumnMenus : false,
    // enableHorizontalScrollbar:0,
    columnDefs:[
      { name: 'Batch'},
      { name: 'Name'}
    ]
    // data : [{
    //           "Batch" : "45",
    //           "Name"  : "Alkesh"
    // }]
  };
  // $scope.gridOpts = {};
  //
  // $scope.myfunction = function(){
 // 	 location.href = 'http://localhost:8080/approve';
  // };

    $http.get("data.json")
      .then(function (data){
        console.log("GET successful...!!" + JSON.stringify(data));
        $scope.gridOpts.data = data;
    });
}
