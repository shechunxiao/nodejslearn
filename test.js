
// let mini = require('minimist');
// process.exitCode = 11;
// process.exit();
// console.log(process.pid)
// process.kill(process.pid,'SIGTERM');
//
// console.log(222);
// process.env.NODE_ENV = 'development';
//
// console.log(process.env.NODE_ENV);
//
// let args = process.argv.slice(2);
// console.log(mini(args['name']));
// const args = require('minimist')(process.argv.slice(2))
// console.log(args['name']); //joe
// console.log(args['age']); //joe

// console.log("%s,%d","是啥",23)
// const x = 1
// const y = 2
// const z = 3
// console.count(
//     'x 的值为 ' + x + ' 且已经检查了几次？'
// )
// console.count(
//     'x 的值为 ' + x + ' 且已经检查了几次？'
// )
// console.count(
//     'y 的值为 ' + y + ' 且已经检查了几次？'
// )
// console.count(
//     'x 的值为 ' + x + ' 且已经检查了几次？'
// )
// function test(){
//
// }
// console.trace(test)
// console.log('\x1b[33m%s\x1b[0m', '你好') // 这里输出着色

// const ProgressBar = require('progress')
//
// const bar = new ProgressBar(':bar', { total: 10 })
// const timer = setInterval(() => {
//     bar.tick()
//     if (bar.complete) {
//         clearInterval(timer)
//     }
// }, 100)

// console.log(module); //你会看到Module中的exports为空对象{}
// console.log(exports); //你会看到Module中的exports为空对象{}
// module.exports = {
//     print : function(){console.log(12345)}
// }
// console.log(module); //你会看到Module中的exports对象有了print()方法
// exports.name = '小白妹妹';
// console.log(module); //你会看到Module中的exports对象不仅有了print()方法，还有了name属性

// module.exports = {
//     name :'小白妹妹'
// };
// exports.age = 10;
// exports.test = function(){}
// // module.exports.print = function(){console.log(12345)};
// console.log(module);
// module.exports = {
//     name :'小白妹妹'
// };
// exports = {age:10}; // exports现在是{age:10}这个对象的引用，不再是module.exports的引用了
// console.log(module); //你会看到Module的exports中只有name属性！！！

// const bar = () => console.log('bar')
//
// const baz = () => console.log('baz')
//
// const foo = () => {
//     console.log('foo')
//     setTimeout(bar, 0)
//     new Promise((resolve, reject) =>
//         resolve('应该在 baz 之后、bar 之前')
//     ).then(resolve => console.log(resolve))
//     baz()
// }
//
// foo()
// process.nextTick(()=>{
//     console.log("一个滴答")
// })


// const test = function(){
//     console.log('begin。。。');
//     setTimeout(()=>{
//         console.log("setTimeout")
//     },500)
//     setImmediate(()=>{
//         console.log("setImmediate")
//     });
//     console.log("end ...");
// }
// test();
// process.nextTick(()=>{
//     console.log("下一个滴答执行")
// })

// const id = setTimeout(() => {
//     // 应该在 2 秒之后运行
//     console.log("定时任务");
// }, 2000)
//
// // 改变主意了
// clearTimeout(id)

// setTimeout(function(arg1,arg2){
//     console.log(arg1+arg2);
// },1000,1,2);

// var txt = 0;
// var num=0,i;
// function timedCount(){
//     console.log("测试")
//     if(txt > 5){
//         stopCount();
//     }
//     txt=num;
//     num=num+1;
//     i=setTimeout(timedCount,1000);
// }
// setTimeout(timedCount,1000);
//
// function stopCount(){
//     clearTimeout(i);
// }
