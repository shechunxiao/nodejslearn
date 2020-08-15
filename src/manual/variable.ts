//这里是变量声明的实践文件

// let在很多方面与var是相似的，但是可以帮助大家避免在JavaScript里常见一些问题。 const是对let的一个增强，它能阻止对一个变量再次赋值。
// a++; // illegal to use 'a' before it's declared;
// let a;
// let aa = 1;
// aa = 2;
// console.log(aa);

// const bb = 2;
// bb = 3;
// console.log(bb)

//解构数组
// let input = [1,2,3];
// let [first,second,three] = input
// console.log(three)
// let input2 = [2,4];
// function f([first, second]: [number, number]) {
//     console.log(first);
//     console.log(second);
// }
// f(input);
// let input3 = [1,3,4,5];
// let [m,,t] = input3
// console.log(m)
// console.log(t)

// let [o,...t] = input3
// console.log(o)
// console.log(t)

//对象解构
// let o = {
//     ttt1:'foo',
//     ttt2:'fbo'
// }
// let {ttt1,ttt2} = o
// console.log(ttt1)
// console.log(ttt2)

// 属性重命名
// 默认值
// function last(obj:{a:string,b?:string}){
//     let {a,b="b"} = obj
//     console.log(a,b)
// }
// last({
//     a:"sss",
// })

// function first(a:string = "ssss"){
//     console.log(a)
// }
// first();

// type c = {a:string,b?:string};
// function second({a,b}:c){
//     console.log(a,b)
// }
// second({
//     a:"zhangs",
//     b:"lisi"
// });

// 展开操作符正与解构相反。 它允许你将一个数组展开为另一个数组，或将一个对象展开为另一个对象。
// let first = [1,2,3]
// let second = [4,5,6]
// let three = [...first,...second]
// console.log(three)

let obj1 = {last:123,test:333,ceshi:789,tt:function(){
        console.log(111)
    }}
let obj2 = {sss:343,ceshi:777}
let obj3 = {...obj1,...obj2}
console.log(obj3.tt())
