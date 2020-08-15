let sym1 = Symbol();
;
let sym2 = Symbol("key");
let sym3 = Symbol("key");

console.log(sym2);
// console.log(sym2 === sym3); // false, symbols是唯一
//
//
// const getClassNameSymbol = Symbol();
//
// class C {
//     [getClassNameSymbol](){
//         return "C";
//     }
// }
//
// let c1 = new C();
// let className = c1[getClassNameSymbol](); // "C"
// console.log(className)

