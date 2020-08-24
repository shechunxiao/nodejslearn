"use strict";
// Node.js 事件触发器
// 事件触发器的基本流程是：
// 1.事件触发器上添加某个事件的监听
// 2.在需要的使用通过相应的方法，触发这个监听，当触发的时候，会通过监听找到绑定的事件，然后执行这个事件
// 3.关于触发事件，javascript在浏览器中有click，change等触发器，当我们点击或者改变的时候会触发这个触发器，从而实现相应的功能
//   在nodejs中，提供了event模块，该模块可以通过on绑定事件监听器，emit用来触发这个监听，当这个emit触发时和浏览器的效果是一致的
// 4.根据上面两条，联想到订阅/发布模式，我们可以通过订阅消息，当达到这个触发条件时，我们去触发这个触发器，然后就能根据订阅信息，触发相应的操作
// 5.委托也和这个事件触发很像，添加一个事件监听，当达到某个条件时，使用类似emit来主动触发相应的监听，从而实现相应的逻辑，事件监听最大的好处就是解耦，避免了文件和文件之间的过度依赖，也就是所谓的消息机制。
// 6.消息机制：就是通过服务器返回不同类型的消息，客户端根据消息类型的不同，进行不同的处理，然后我们可以根据一定的条件，比如消息类型，来主动通过触发委托触发器，利用委托实现业务的复杂处理，尽可能的实现了解耦。
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const eventEmitter = new events_1.EventEmitter();
eventEmitter.on("test", (args, args2) => {
    console.log("触发了测试test函数");
    console.log(args);
    console.log(args2);
});
let myBool = true;
if (myBool) {
    eventEmitter.emit("test", 123, 345);
}
//# sourceMappingURL=event.js.map