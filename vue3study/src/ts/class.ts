//多态:父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现
//多态属于继承

class Animal {
  name: string = 'm';
  age: 100;
  constructor (name: string) {
  }
  eat () {
    console.log(`这是吃的方法`);
  }
  run (speed: number, name) {
    console.log('这是跑的方法');
    return speed;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log(`${this.name}喜欢吃肉 `)
  }
  // 多态要求返回值的类型要一致.
  run () {
    return 'xxx';
    
  }
}

let dog = new Dog('小狗');




dog.eat(); //小狗喜欢吃肉

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log(`${this.name}喜欢吃老鼠`)
  }
}

let cat = new Cat('小猫')

cat.eat() //小猫喜欢吃鱼