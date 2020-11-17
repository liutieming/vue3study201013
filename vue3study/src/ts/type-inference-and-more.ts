// 类型推论, 联合类型, 类型断言

// type-inference 类型推论
let str = 'str'        // 类型推论为 string 类型
str = 123;             // 报错, 因为 str变量已经被推论为 String 类型
str = '123'

// union-type 联合判刑
let strOrNum: String | Number;      // 即可以是 String 类型, 也可以是 Number 类型
strOrNum = "abc";
strOrNum = {};                      // 报错因为它只能是 string 或 number 类型
strOrNum = 1234;
strOrNum.toLocaleString()           // 可以访问联类型中共用的方法或属性.
console.log(typeof strOrNum);

// 类型断言
function getLength(input: String | Number): number {
  const str = input as String;      // 将 input 类型理解为 String, 这就是类型的断言. 可以使用断言的类型方法和属性
  if (str.length) {
    return str.length;
  } else {
    const num = input as Number;
    return num.toString().length;
  }
}


// 类型守护 type guard
function getLength2(input: String | Number): number {
  if (typeof input === 'string') {
    return input.length;            // 这里是不应报错的.  idea 好象不支持类型守护.
  } else {
    return input.toString().length;
  }
}








