"use strict";
//这里是包含所有类型的实践文件
// 布尔值
let isDone = false;
// 数字 和JavaScript一样，TypeScript里的所有数字都是浮点数
let num1 = 111;
// 字符串
let myName = "张三";
let myAll = `我的名字是${myName},我的年龄是${num1}`;
// 数组
let arr = [1, 2, 3];
let brr = [1, 2, 3, 4, 5];
// 元组 Tuple ,元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组
let x;
x = [1, "张三"];
// 枚举类型
var Color;
(function (Color) {
    Color["first"] = "\u84DD\u8272";
    Color["second"] = "\u7EA2\u8272";
    Color["third"] = "\u767D\u8272";
})(Color || (Color = {}));
// any类型
let myAny = 4;
myAny = "张三";
myAny = false;
myAny = 123;
let notSure = 4;
let test = [1, "张三", false];
// void
function voidFun() {
    console.log("没有任何返回值");
}
// voidFun();
// Null 和 Undefined ,TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
let u = undefined;
let n = null;
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// let num2:number = 11;
// num2 = undefined;
// console.log(num2)
// never类型表示的是那些永不存在的值的类型
// function fail():never{
//     throw new Error("这里是错误了的never类型");
// }
// fail();
// function fail2(){
//     return Error("错误了");
// }
//
// console.log(fail2());
// 返回never的函数必须存在无法达到的终点
// function infiniteLoop(): never {
//     while (true) {
//         console.log(111)
//     }
// }
// infiniteLoop();
// Object对象类型 object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
// function create(o:object|null):void{
//     console.log(o)
// }
// create([13,3,4,5]);
// create("false");
// 类型断言 就是开发者清楚的知道是什么类型的
let str = "这里是一段文字";
// let num3:number = (<string>str).length;
let num4 = str.length;
console.log(num4);
// 尽量使用let而不是var
//# sourceMappingURL=type.js.map