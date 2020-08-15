// 1.数字枚举
// enum Direction {
//     Up ,
//     Down,
//     Left,
//     Right
// }

// 字符串枚举
// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
// }
// 异构枚举（Heterogeneous enums）
// // 从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做：
// //
// // enum BooleanLikeHeterogeneousEnum {
// //     No = 0,
// //     Yes = "YES",
// // }
// // 除非你真的想要利用JavaScript运行时的行为，否则我们不建议这样做。

// enum E { X }
// enum E1 { X, Y, Z }
//
// enum E2 {
//     A = 1, B, C
// }

// 枚举表达式
// enum FileAccess {
//     // constant members
//     None,
//     Read    = 1 << 1,
//     Write   = 1 << 2,
//     ReadWrite  = Read | Write,
//     // computed member
//     G = "123".length
// }
//
// console.log(FileAccess.G)

// 反向枚举，也就就是根据枚举的值获取枚举的key
// enum  tttt {
//     one=1,
//     two = 2,
//     three = 3,
//     C = count(1)
// }
// console.log(tttt[2])
// console.log(tttt.C)
//
// // 常量枚举
// // 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。
// // 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员,下面的count会报错
// const enum Enum {
//     A = 1,
//     B = A * 2,
//     C = count(1)
// }
//
// console.log(Enum.A)
// console.log(Enum.B)
//
// function count(nu:number){
//     return nu*4;
// }

// 外部枚举
// enum Enum {
//     A = 1,
//     B,
//     C = 2
// }
//
// console.log(Enum.A)
// console.log(Enum.B)
// console.log(Enum.C)

declare enum Enum {
    A = 1,
    B,
    C = 2
}

console.log(Enum.A)
