var appModule =angular.module("mainApp",['ngRoute']);
appModule.controller("checkForNews",function(){
    //alert("chekc for news called");
    this.headlines="This is headlines";
    
});

appModule.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/chennai',{
        templateUrl:"views/chennai/news.html"
        
    })
    .when('/bangalore',{
        templateUrl:"views/bangalore/news.html"
        
    })
    .when('/kochi',{
        templateUrl:"views/kochi/news.html"
        
    })
}]);


appModule.directive("news",function(){
  return{
     // template:"<div ng-controller='checkForNews'> This is today's news<div ng-bind='headlines'></div></div>"
    templateUrl:"views/newsformt.html",
    controllerAs:"ctrlObj",
    controller:"checkForNews"
  } 
    
    
});