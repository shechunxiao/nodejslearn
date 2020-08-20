"use strict";
const log4js = require("log4js");
let logger = log4js.getLogger();
logger.level = "error";
logger.error("是发送到发");
// log4js.configure({
//     appenders: {
//         cheese: {
//             type: "file",
//             filename: "cheese.log"
//         },
//         max:{
//             type:"file",
//             filename:"max.log"
//         },
//         min:{
//             type:"file",
//             filename:"../../min.log"
//         }
//     },
//     categories: {
//         default: {
//             appenders: ["cheese"],
//             level: "error"
//         },
//         max:{
//             appenders:["max"],
//             level:"error"
//         },
//         min:{
//             appenders:['min'],
//             level:"debug"
//         }
//     }
// });
//
// const logger = log4js.getLogger();
// logger.trace("Entering cheese testing");
// logger.debug("Got cheese.");
// logger.info("Cheese is Comté.");
// logger.warn("Cheese is quite smelly.");
// logger.error("Cheese is too ripe!");
// logger.fatal("Cheese was breeding ground for listeria.");
//# sourceMappingURL=begin.js.map