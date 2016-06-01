namespace firstmodule{
    
    interface IFirstInterface{
         mustVariable:String;
        
        
    }
    
    
    export class Firstclass implements IFirstInterface{
      private messageValue:string;
      mustVariable:String;
      
      static instanceCounter:number=0; 

        constructor(public sendMeThis:string){
           Firstclass.instanceCounter +=1;
           this.messageValue = sendMeThis; 
        }
        
        showInstanceNumber():void{
            
            document.getElementById('instanceCounter').innerHTML = String(Firstclass.instanceCounter);
            
        }
        
        getMessage():string{
            
            return this.sendMeThis;//"message from Instance";
        }
        
        
        getAnotherMessage =()=> "another message";
        
        
        thirdFunction():void{
            let thatOldThis = this;
            let innerArrowfunction;
            let anotherUsualFunction;
            
            console.log("Inside parent function ");
            console.log("this is %O",this);

            function innerUsualFunction(){
                //this.cat = "MEOW";
                console.log("Inside normal function ");
                console.log("this is %O",this);
                console.log("thatOldThis is %O",thatOldThis);
            }
            
            innerArrowfunction =():void=>{
                
                console.log("Inside arrow function");
                console.log("this is %O",this);
                console.log("thatOldThis is %O",thatOldThis);
                
                
            }
            

            innerUsualFunction();
            innerArrowfunction();
            
        }   
            
            
            
        
        
    }
    
    
}