var appModule = angular.module("mainApp", ['ngRoute','allservices','ui.router']);
//ng-controller="mainAppController"
/*appModule.controller('mainAppController',function($scope,$state){
    
        $scope.navigateToState = function(toState){
        $state.go(toState);
    }
});*/




appModule.config(['$routeProvider','$stateProvider','$urlRouterProvider', 'pageCounterProvider', function ($routeProvider,$stateProvider,$urlRouterProvider,pageCounterProvider) {
      
      $routeProvider
      .when('/chennai',{
          controller:'chennaiController',
          controllerAs:'cityCtrl',
          templateUrl:"views/chennai/news.html"
      })
      .when('/bangalore',{
          controller:'bangaloreController',
          controllerAs:'cityCtrl',
          templateUrl:"views/bangalore/news.html"
      })
      .when('/kochi',{
          controller:'kochiController',
          controllerAs:'cityCtrl',
          templateUrl:"views/kochi/news.html"
          
      });
     
      //navigateToState('bangaloreState')
/*    $stateProvider
        .state('chennaiState', {
            controller: 'chennaiController',
            controllerAs: 'cityCtrl',
            url: "/chennai",
            templateUrl: "views/chennai/news.html"

        })
        .state('bangaloreState',{
            controller: 'bangaloreController',
            controllerAs: 'cityCtrl',
            url: "/bangalore",
            templateUrl: "views/bangalore/news.html"
 
        })
        .state('kochiState',{
            controller: 'kochiController',
            controllerAs: 'cityCtrl',
            url: "/kochi",
            templateUrl: "views/kochi/news.html"
 
        });*/
    // pageCounterProvider.toReturn.chennaiVisitCounter =5;


}]);

appModule.controller("checkForNews", function ($state) {
    //alert("chekc for news called");
    this.headlines = "This is headlines";

    

});


appModule.directive("news", function () {
    return {
        // template:"<div ng-controller='checkForNews'> This is today's news<div ng-bind='headlines'></div></div>"
        templateUrl: "views/newsformt.html",
        controllerAs: "ctrlObj",
        controller: "checkForNews"
    }

});




