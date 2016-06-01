var firstmodule;
(function (firstmodule) {
    var Firstclass = (function () {
        function Firstclass(sendMeThis) {
            this.sendMeThis = sendMeThis;
            this.getAnotherMessage = function () { return "another message"; };
            Firstclass.instanceCounter += 1;
            this.messageValue = sendMeThis;
        }
        Firstclass.prototype.showInstanceNumber = function () {
            document.getElementById('instanceCounter').innerHTML = String(Firstclass.instanceCounter);
        };
        Firstclass.prototype.getMessage = function () {
            return this.sendMeThis; //"message from Instance";
        };
        Firstclass.prototype.thirdFunction = function () {
            var _this = this;
            var thatOldThis = this;
            var innerArrowfunction;
            var anotherUsualFunction;
            console.log("Inside parent function ");
            console.log("this is %O", this);
            function innerUsualFunction() {
                //this.cat = "MEOW";
                console.log("Inside normal function ");
                console.log("this is %O", this);
                console.log("thatOldThis is %O", thatOldThis);
            }
            innerArrowfunction = function () {
                console.log("Inside arrow function");
                console.log("this is %O", _this);
                console.log("thatOldThis is %O", thatOldThis);
            };
            innerUsualFunction();
            innerArrowfunction();
        };
        Firstclass.instanceCounter = 0;
        return Firstclass;
    }());
    firstmodule.Firstclass = Firstclass;
})(firstmodule || (firstmodule = {}));
//# sourceMappingURL=anothermodule.js.map