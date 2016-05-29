function bangaloreController(pageCounter){
    if(pageCounter.bangaloreVisitCounter){
        
        pageCounter.bangaloreVisitCounter+=1;
    }else{
        
        pageCounter.bangaloreVisitCounter=1;
    }
    
    if(this.counter){
        this.counter+=1;
        
    }else{
        
        this.counter =1;
    }
    
    this.counter = pageCounter.bangaloreVisitCounter;
}


appModule.controller('bangaloreController',bangaloreController);