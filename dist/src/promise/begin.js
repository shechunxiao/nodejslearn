"use strict";
// let done = true;
// const isItDoneYet = new Promise((resolve,reject)=>{
//    if (done){
//        const workDone = "这是创建的东西";
//        resolve(workDone);
//    } else{
//        const why = "仍然在处理其他事情";
//        reject(why);
//    }
// });
// ss
// console.log("最早执行")
// function ftest() {
//     return new Promise((resolve,reject)=>{
//         if (done){
//             const workDone = "这是创建的东西";
//             resolve(workDone);
//         } else{
//             const why = "仍然在处理其他事情";
//             reject(why);
//         }
//     });
// }
//
// console.log("第二执行")
// ftest().then(function(data){
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// });
//
// console.log("异步还是同步？")
// new Promise((resolve, reject) => {
//     throw new Error('错误')
// })
//     .catch(err => {
//         throw new Error('错误2')
//     })
//     .catch(err => {
//         console.error("err")
//         console.error(err)
//     })
// Promise.all()
// 如果需要同步不同的 promise，则 Promise.all() 可以帮助定义 promise 列表，并在所有 promise 都被解决后执行一些操作。
// 同步执行promise列表，当promise列表都被解决以后，执行一些操作,这里是同步的顺序执行
// const f1 = fetch('/something.json')
// const f2 = fetch('/something2.json')
//
// Promise.all([f1, f2])
//     .then(res => {
//         console.log('结果的数组', res)
//     })
//     .catch(err => {
//         console.error(err)
//     })
//
// Promise.all([f1, f2]).then(([res1, res2]) => {
//     console.log('结果', res1, res2)
// })
// Promise.race函数，字面上表示速度，如果若干个promise列表的元素，有一个首先完成resolve，则race触发。
// const first = new Promise((resolve, reject) => {
//     // setTimeout(resolve, 500, '第一个')
//     setTimeout(reject,1000,'第一个1');
// });
// const second = new Promise((resolve, reject) => {
//     // setTimeout(resolve, 100, '第二个')
//     // resolve("second");
//     resolve("第二");
// });
//
// Promise.race([first, second]).then(result => {
//     console.log(result) // 第二个
// });
// const doSomethingAsync = () => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve('做些事情'), 3000)
//     })
// }
//
// const doSomething = async () => {
//     console.log(await doSomethingAsync())
// }
//
// console.log('之前')
// doSomething()
// console.log('之后')
// 在任何函数前面加上async，意味着这个函数将返回一个promise对象
// const aFunction = async () => {
//     return '测试'
// }
// aFunction().then((data)=>{
//     console.log(data)
// })
// async/await函数的好处就是使promise的链式调用看起来像同步代码，更容易理解
// async的作用是放在函数前面，使函数的返回为promise对象，await的作用是，等待当前异步函数执行
// 并且可以将返回值赋值给一个变量,并且这个变量是一个promise对象
// const getFirstUserData = () => {
//     return fetch('/users.json') // 获取用户列表
//         .then(response => response.json()) // 解析 JSON
//         .then(users => users[0]) // 选择第一个用户
//         .then(user => fetch(`/users/${user.name}`)) // 获取用户数据
//         .then(userResponse => userResponse.json()) // 解析 JSON
// }
//
// getFirstUserData()
//
//
// const getFirstUserData = async () => {
//     const response = await fetch('/users.json') // 获取用户列表
//     const users = await response.json() // 解析 JSON
//     const user = users[0] // 选择第一个用户
//     const userResponse = await fetch(`/users/${user.name}`) // 获取用户数据
//     const userData = await userResponse.json() // 解析 JSON
//     return userData
// }
//
// getFirstUserData()
// 异步函数可以很容易地链接起来，并且语法比普通的promise更具可读性
// const promiseToDoSomething = () => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve('做些事情'), 1000)
//     })
// }
//
// const watchOverSomeoneDoingSomething = async () => {
//     const something = await promiseToDoSomething()
//     return something + ' 查看'
// }
//
// const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
//     const something = await watchOverSomeoneDoingSomething()
//     return something + ' 再次查看'
// }
//
// watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
//     console.log(res)
// })
// 总结:1.async是标志当前函数返回的是一个promise对象，2.await是等待函数执行，并返回一个值，这个值可以赋予一个变量
// 3.try catch对象，这个try catch用来捕获async/await的错误信息
//# sourceMappingURL=begin.js.map
