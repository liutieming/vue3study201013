// 定义一个函数
//      有三个参数, 都是 number
//      返回值也是 number
//      说明 z 是可选参数, 可选参数后面不能再增加确定的参数(可以增加可选参数)

// const add = (x: number, y: number, z?: Number): number => {
function add (x: number, y: number, z?: Number): number {
    if (typeof z === 'number') {
        return x + y + z;
    } else {
        return x + y;
    }
}


let number = add(1, 2);
console.log(number);


// 下面的代码是定义 add2 变量, 这个变量 有三个输入的参数 一个Number类型的返回值.
//      它之所以能被赋值为 add (它是一个函数), 是因为 add2 的形状与 add 函数是一致的. ()输入输出是可匹配的)
//      这里的 => number 不是箭头函数, 而是说明返回值是 number
//      小贴士: 冒号后面的不是程序的逻辑, 都是在说明前面的类型是什么.
const add2: (x: number, y: number, z:number) => number = add;

// 好了通过上面的试例发散一下, interface 它可用于描述函数类型, 看看下面的例子
interface ISum {
    (x: number, y: number, z:number): number    // 这行代码, 实际上是声明了一个函数类型
}
const add3: ISum = add;







