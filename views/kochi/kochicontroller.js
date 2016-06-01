function kochiController(pageCounterFact){
    if(pageCounterFact.kochiVisitCounter){
        
        pageCounterFact.kochiVisitCounter+=1;
    }else{
        
        pageCounterFact.kochiVisitCounter=1;
    }
    
    if(this.counter){
        this.counter+=1;
        
    }else{
        
        this.counter =1;
    }
    
    this.counter = pageCounterFact.kochiVisitCounter;
}


appModule.controller('kochiController',kochiController);