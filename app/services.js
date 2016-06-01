angular.module('allservices',[]).provider('pageCounter',function(){
  
    this.toReturn = {chennaiVisitCounter:null}
    
    this.$get= function(){ //mandatory
        return this.toReturn;   //mandatory
    }
    
  // return toReturn;
});


angular.module('allservices').service('pageCounterServ',function(){
   this.bangaloreVisitCounter = null;
});

angular.module('allservices').factory('pageCounterFact',function(){
  var toReturnObject = {kochiVisitCounter:null}; 
  return toReturnObject; //mandatory
   
})
