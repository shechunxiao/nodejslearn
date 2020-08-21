"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // let async = require("async");
const async_1 = __importDefault(require("async"));
// var task1 =function(callback: (arg0: null, arg1: string) => void){
//
//     console.log("task1");
//     callback(null,"task1")
// }
//
// var task2 =function(callback: (arg0: null, arg1: string) => void){
//
//     console.log("task2");
//     callback(null,"task2")
// }
//
// var task3 =function(callback: (arg0: null, arg1: string) => void){
//
//     console.log("task3");
//     callback(null,"task3")
// }
//
// async.series([task1,task2,task3],function(err: any, result: any){
//
//     console.log("series");
//
//     if (err) {
//         console.log(err);
//     }
//
//     console.log(result);
// })
//
// var task1 =function(callback: (arg0: null, arg1: string) => void){
//
//     console.log("task1");
//     setTimeout(function(){
//         console.log('task1完成')
//         callback(null,"task1")
//     },5000);
//
// }
//
// var task2 =function(callback: (arg0: null, arg1: string) => void){
//
//     console.log("task2");
//
//     setTimeout(function(){
//         console.log('task2完成')
//         callback(null,"task2")
//     },1000);
// }
//
// var task3 =function(callback: (arg0: null, arg1: string) => void){
//
//     console.log("task3");
//     setTimeout(function(){
//         console.log('task3完成')
//         callback(null,"task3")
//     },3000);
// }
// console.time("parallel方法");
// // 非顺序执行
// async.parallel([task1,task2,task3],function(err,result){
//
//     console.log("parallel");
//
//     if (err) {
//         console.log(err);
//     }
//
//     console.log(result);
//     console.timeEnd("parallel方法");
// })
// var task1 =function(callback: (arg0: null, arg1: string) => void){
//
//     console.log("task1");
//     callback(null,"11")
//
// }
//
// var task2 =function(q: string, callback: (arg0: null, arg1: string) => void){
//
//     console.log("task2");
//     console.log("task1函数传入的值: "+q);
//     callback(null,"22")
// }
//
// var task3 =function(q: string, callback: (arg0: null, arg1: string) => void){
//
//     console.log("task3");
//     console.log("task2函数传入的值: "+q);
//     callback(null,"33")
// }
// console.time("waterfall方法");
// async.waterfall([task1,task2,task3],function(err,result){
//
//     console.log("waterfall");
//
//     if (err) {
//         console.log(err);
//     }
//
//     console.log("result : "+result);
//     console.timeEnd("waterfall方法");
// })
var task1 = function (callback) {
    console.log("task1");
    setTimeout(function () {
        callback(null, "task1");
    }, 5000);
};
var task2 = function (callback) {
    console.log("task2");
    setTimeout(function () {
        callback(null, "task2");
    }, 3000);
};
var task3 = function (callback) {
    console.log("task3");
    setTimeout(function () {
        callback(null, "task3");
    }, 4000);
};
console.time("parallelLimit方法");
async_1.default.parallelLimit([task1, task2, task3], 2, function (err, result) {
    console.log("parallelLimit");
    if (err) {
        console.log(err);
    }
    console.log(result);
    console.timeEnd("parallelLimit方法");
});
//# sourceMappingURL=begin.js.map