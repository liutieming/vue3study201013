//// Array 数组 是将同一类型的数据放在一起 /////////////////
let arrOfNumber: number[] = [1, 2, 34, 45, 222];             //定义了一个数字类型的数组

arrOfNumber.push(188);

// 类数组, 它是内定好的

function test () {
    console.log(arguments);                     // arguments 对象就是一个类数组 它是一个特殊的类型.
    let htmlCollection: HTMLCollection          // HTMLCollection 也是一个类数组,
}


//// Tuple 元组 是将不同类型的数据放在一起 /////////////////
////    元组起源于函数式编程
let user: [String, Number, Number] = ['abc', 1234, 1234]

