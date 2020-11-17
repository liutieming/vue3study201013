var MiPhone = /** @class */ (function () {
    function MiPhone() {
        this.checkBatteryStatus = function () {
            console.log("\u624B\u673A\u7535\u6C60\u72B6\u6001\u662F: \u53EF\u7528!1");
            return true;
        };
        this.switchRadio = function (trigger) {
            console.log("\u6536\u5355\u673A\u5F00\u5173\u72B6\u6001\u662F: " + trigger);
        };
    }
    return MiPhone;
}());
var myPhone = new MiPhone();
myPhone.checkBatteryStatus();
myPhone.switchRadio('开');
