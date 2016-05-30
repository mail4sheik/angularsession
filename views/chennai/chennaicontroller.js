function chennaiController(pageCounter){
    if(pageCounter.chennaiVisitCounter){
        
        pageCounter.chennaiVisitCounter+=1;
    }else{
        
        pageCounter.chennaiVisitCounter=1;
    }
    
    if(this.counter){
        this.counter+=1;
        
    }else{
        
        this.counter =1;
    }
    
   // this.counter = pageCounter.chennaiVisitCounter;
}


//appModule.controller('chennaiController',chennaiController);
appModule.controller('chennaiController',['pageCounter',chennaiController]);