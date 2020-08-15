// (x: number, y: number) => number 这里定义了myAdd的参数类型和返回值类型
// function(x: number, y: number): number { return x + y; }; 这里定义了函数体
// let myAdd: (x: number, y: number) => number =
//     function(x: number, y: number): number { return x + y; };
// console.log(myAdd(1, 2));

// function t(a:string,...params:string[]){
//     console.log(a);
//     console.log(params);
// }
//
// t("战三",'one','two','three');

// function te<T>(arg:T[]):T[]{
//     console.log(arg.length)
//     return arg;
// }
//
// console.log(te([1,2,3]));
//
// function te2<T>(arg:Array<T>):Array<T>{
//     console.log(arg.length)
//     return arg;
// }
//
// console.log(te2([4,5,6,7]))

// 泛型接口
// interface myFan {
//     <T>(arg:T):T;
// }
//
// function identity<T>(arg: T): T {
//     return arg;
// }
// let my2:myFan = function<T>(g:T): T {
//     return g;
// };
// let my:myFan = identity

// 泛型类
// class fxClass<T> {
//     zeroValue:T;
//     add(arg1:T,arg2:T){
//         console.log(arg1)
//     }
//     constructor(arg:T){
//         this.zeroValue = arg
//     }
//
// }
// let fx = new fxClass<string>("张三");
// fx.add("涨","跌");
// console.log(fx.zeroValue);

// 泛型约束

// interface length {
//     length:number
// }
// function testLength<T extends length>(arg:T):T{
//     console.log(arg.length);
//     return arg;
// }
// testLength("fdsfsdfkjdsk");

// 在泛型里使用类类型

// c:{new():T}和c:new()=>T是一样的，后者是前者的简写，意即C的类型是对象类型且这个对象包含返回类型是T的构造函数。
// 注意，':'后面是TypeInformation，这里的'=>'不是arrowfunction，只是用来标明函数返回类型。



// class BeeKeeper {
//     hasMask: boolean;
// }
//
// class ZooKeeper {
//     nametag: string;
// }
//
// class Animal {
//     numLegs: number;
// }
//
// class Bee extends Animal {
//     keeper: BeeKeeper;
// }
//
// class Lion extends Animal {
//     keeper: ZooKeeper;
// }
//
// function createInstance<A extends Animal>(c: new () => A): A {
//     return new c();
// }
//
// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!






