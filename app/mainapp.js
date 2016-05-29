var appModule =angular.module("mainApp",['ngRoute','allservices']);
appModule.controller("checkForNews",function(){
    //alert("chekc for news called");
    this.headlines="This is headlines";
    
});

appModule.config(['$routeProvider','pageCounterProvider',function($routeProvider,pageCounterProvider){
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
   // pageCounterProvider.toReturn.chennaiVisitCounter =5;
    
    
}]);




appModule.directive("news",function(){
  return{
     // template:"<div ng-controller='checkForNews'> This is today's news<div ng-bind='headlines'></div></div>"
    templateUrl:"views/newsformt.html",
    controllerAs:"ctrlObj",
    controller:"checkForNews"
  } 
    
    
});




