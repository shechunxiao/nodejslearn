"use strict";
// import * as t from './module1';
//
// console.log(t.a);
// let m = new t.Module1();
// m.add();
// class Change implements t.Test{
//     age = "字符串";
// }
// let change = new Change();
// console.log(change.age)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {a as bbb} from './module1';
//
// console.log(bbb)
// 导入默认的,一个文件可以到处多个元素(变量， 类，接口等等),import name from './path'
const module1_1 = __importDefault(require("./module1"));
console.log(module1_1.default);
//# sourceMappingURL=module2.js.map