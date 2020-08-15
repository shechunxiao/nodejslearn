// 要想在构造函数中直接定义和赋值，那么必须是readonly
// class myAttr {
//     constructor(readonly name:string){
//     }
//
// }
// let obj = new myAttr("张三");
// console.log(obj.name);

// class Octopus {
//     readonly numberOfLegs: number = 8;
//     constructor(readonly name: string) {
//     }
// }
//
// let oct = new Octopus("张三");
// console.log(oct);

// class my {
//     private _fullName:string = '';
//     get full(){
//         return this._fullName;
//     }
//     set full(fullName:string){
//         this._fullName = fullName;
//     }
// }
// let my1 = new my();
// console.log(my1.full);
// my1.full = "张三my";
// console.log(my1.full);

// class Test {
//     static ttt:string= "李四";
// }
//
// console.log(Test.ttt);


// abstract class Department {
//
//     constructor(public name: string) {
//         console.log("11111",name)
//     }
//
//     printName(): void {
//         console.log('Department name: ' + this.name);
//     }
//
//     abstract printMeeting(): void; // 必须在派生类中实现
// }
//
// class AccountingDepartment extends Department {
//
//     constructor() {
//         super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//     }
//
//     printMeeting(): void {
//         console.log('The Accounting Department meets each Monday at 10am.');
//     }
//
//     generateReports(): void {
//         console.log('Generating accounting reports...');
//     }
// }
//
// let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
