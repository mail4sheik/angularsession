var kickstarter;
(function (kickstarter) {
    function init() {
        alert("init called");
        letUsCreateAnInstance();
    }
    kickstarter.init = init;
    function letUsCreateAnInstance() {
        var firstInstance = new firstmodule.Firstclass("Message from instance");
        document.getElementById('messageFromInstance').innerHTML = firstInstance.getMessage();
        document.getElementById('anotherMessageFromInstance').innerHTML = firstInstance.getAnotherMessage();
        firstInstance.thirdFunction();
        firstInstance.showInstanceNumber();
        new firstmodule.Firstclass("Message from instance");
        new firstmodule.Firstclass("Message from instance");
        new firstmodule.Firstclass("Message from instance");
        firstInstance.showInstanceNumber();
    }
})(kickstarter || (kickstarter = {}));
//# sourceMappingURL=app.js.map