angular.module('allservices',[]).provider('pageCounter',function(){
    
    
    
    this.toReturn = {chennaiVisitCounter:null}
    
    
    this.$get= function(){
        
        return this.toReturn;
        
    }
    
  // return toReturn;
    
    
    
    
});


angular.module('allservices').service('pageCounterServ',function(){
    
   this.bangaloreVisitCounter = null;
   
});

angular.module('allservices').factory('pageCounterServ',function(){
    
  var toReturnObject = {kochiVisitCounter:null}; 
  return toReturnObject;
   
})