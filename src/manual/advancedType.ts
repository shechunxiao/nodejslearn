// 高级类型
// 1.交叉类型
// 2.联合类型
// interface Bird {
//     fly();
//     layEggs();
// }
//
// interface Fish {
//     swim();
//     layEggs();
// }
//
// function getSmallPet(): Fish | Bird {
//     // ...
// }
//
// let pet = getSmallPet();
// pet.layEggs(); // okay
// pet.swim();    // errors

// 类型保护

// interface Bird {
//     fly();
//     layEggs();
// }
//
// interface Fish {
//     swim();
//     layEggs();
// }
// function isFish(pet: Fish | Bird): pet is Fish {
//     return (<Fish>pet).swim !== undefined;
// }
// if (isFish(pet)) {
//     pet.swim();
// }
// else {
//     pet.fly();
// }

// 这些* typeof类型保护*只有两种形式能被识别： typeof v === "typename"和 typeof v !== "typename"，
// "typename"必须是 "number"， "string"， "boolean"或 "symbol"。
// 但是TypeScript并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。
// function f(x: number, y?: number) {
//     return x + (y || 0);
// }
// f(1, 2);
// f(1);
// f(1, undefined);
// f(1, null);

// 类型别名,使用type来定义
type Name = number;
function tt(str:number):Name{
    return 111;
}
