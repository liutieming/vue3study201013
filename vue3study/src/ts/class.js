//多态:父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现
//多态属于继承
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = 'm';
    }
    Animal.prototype.eat = function () {
        console.log("\u8FD9\u662F\u5403\u7684\u65B9\u6CD5");
    };
    Animal.prototype.run = function (speed, name) {
        console.log('这是跑的方法');
        return speed;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + "\u559C\u6B22\u5403\u8089 ");
    };
    // 多态要求返回值的类型要一致.
    Dog.prototype.run = function () {
        return 'xxx';
    };
    return Dog;
}(Animal));
var dog = new Dog('小狗');
dog.eat(); //小狗喜欢吃肉
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        console.log(this.name + "\u559C\u6B22\u5403\u8001\u9F20");
    };
    return Cat;
}(Animal));
var cat = new Cat('小猫');
cat.eat(); //小猫喜欢吃鱼
