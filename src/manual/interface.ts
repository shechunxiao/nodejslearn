// 这里是接口study

// 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
// interface labelValue {
//     label:string
// }
// function printLabel(labelObj:labelValue){
//     console.log(labelObj.label)
// }
// let myObj = {size:10,label:"递四方速递"};
// printLabel(myObj);

// 可选属性，加?
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
//
// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = {color: "white", area: 100};
//     if (config.color) {
//         // Error: Property 'clor' does not exist on type 'SquareConfig'
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
//
// let mySquare = createSquare({color: "black"});

// 只读属性 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:
// interface myRead {
//     readonly test:string
//     name:string
// }
// let myread:myRead = {
//     test:"这里是测试",
//     name:"名字"
// }
// myread.name = "我的名字"
// myread.test = "不可更改"
// console.log(myread)

// 只读的数组
// let readArr:ReadonlyArray<number> = [1,2,3,4];
// let aaa:number[] = [1,3,4]
// aaa = readArr as number[]
// console.log(readArr)

// 函数类型 (也就是属性约束)
// interface myFun {
//     (str:string,num:number):boolean;
// }
// let mySearchFun:myFun;
// mySearchFun = function (str:string,num:number) {
//     return true
// }
// console.log(mySearchFun('1',1));
// let m:myFun
// m = function(){
//     console.log(1111)
//     return 222;
// }
// m();

// 可索引的类型
// 1.约束数组,下面接口的含义是，一个索引为number的数组，返回一个string类型的值
// TypeScript支持两种索引签名：字符串和数字,可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。
// interface numberIndexGetString {
//     [index:number]:string
// }
// let myArr:numberIndexGetString;
// myArr = ["张三","李四"]
// console.log(myArr[0]);

// 2.约束对象
// interface objGetString {
//     [index:string]:string;
// }
//
// let aBrr:objGetString;
// aBrr = {a:"涨",b:"ss"};
// console.log(aBrr.b)

// 这里定义了一个可索引的接口，key是字符串，值是数字,同时里面包含了两个属性，length和name必须都是number类型，否则会报错
// 如果在约束之前加上readonly，那么非具体指定的属性，如length和name，其他属性只读，不可更改
// interface NumberDictionary {
//     readonly [index: string]: number;
//     length: number;    // 可以，length是number类型
//     name: number       // 错误，`name`的类型与索引类型返回值的类型不匹配
// }
// let obj:NumberDictionary;
// obj = {length:111,name:222,age:444}
// obj.name = 333;
// console.log(obj.name);


// 类类型(类约束)

// interface Animal {
//     currentTime:String;
//     setTime(date:Date):Date;
// }
// class Person implements Animal{
//     currentTime = "2018-01-01";
//     setTime(date: Date): Date {
//         console.log(`时间是${date}`)
//         return new Date();
//     }
//     constructor(){
//         console.log("初始化执行");
//     }
// }
// let person = new Person();
// person.setTime(new Date());

// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick():void;
// }
//
// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }
//
// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick():void {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick():void {
//         console.log("tick tock");
//     }
// }
//
// let digital = createClock(DigitalClock, 12, 17);
// digital.tick();
// let analog = createClock(AnalogClock, 7, 32);
// analog.tick();

// 一个接口可以继承多个接口
// interface Shape {
//     color:string;
// }
// interface ShapeChild extends Shape{
//     name:string;
// }
