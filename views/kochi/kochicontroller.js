function kochiController(pageCounter){
    if(pageCounter.kochiVisitCounter){
        
        pageCounter.kochiVisitCounter+=1;
    }else{
        
        pageCounter.kochiVisitCounter=1;
    }
    
    if(this.counter){
        this.counter+=1;
        
    }else{
        
        this.counter =1;
    }
    
    //this.counter = pageCounter.kochiVisitCounter;
}


appModule.controller('kochiController',kochiController);