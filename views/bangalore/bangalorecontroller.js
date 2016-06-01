function bangaloreController(pageCounterServ){
    if(pageCounterServ.bangaloreVisitCounter){
        
        pageCounterServ.bangaloreVisitCounter+=1;
    }else{
        
        pageCounterServ.bangaloreVisitCounter=1;
    }
    
    if(this.counter){
        this.counter+=1;
        
    }else{
        
        this.counter =1;
    }
    
    this.counter = pageCounterServ.bangaloreVisitCounter;
}


appModule.controller('bangaloreController',bangaloreController);