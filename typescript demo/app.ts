namespace kickstarter{
    
    export function init(){
        alert("init called");
        letUsCreateAnInstance();
        
    }
    
    function letUsCreateAnInstance(){
        
        let firstInstance = new firstmodule.Firstclass("Message from instance");
        
        
        document.getElementById('messageFromInstance').innerHTML = firstInstance.getMessage();
        document.getElementById('anotherMessageFromInstance').innerHTML = firstInstance.getAnotherMessage();
        firstInstance.thirdFunction();
        firstInstance.showInstanceNumber();
        new firstmodule.Firstclass("Message from instance");
        new firstmodule.Firstclass("Message from instance");
        new firstmodule.Firstclass("Message from instance");
        firstInstance.showInstanceNumber();
    }
    
    
}