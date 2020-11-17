interface Person {
    readonly id: Number;    // 只读属性, 只允许创建时赋值
    name: String;
    age?: Number;           // 加?号的做用: age 属性是可选的
}

let lst: Person = {
    id: 0
    , name: 'aaa'
}

// lst.id = 100;            // 报错, 因为 id 是只读属性.

