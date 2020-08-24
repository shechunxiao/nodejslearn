"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
console.log(path_1.default.basename('./http.js'));
console.log(path_1.default.dirname('./http.js'));
console.log(path_1.default.extname('./http.js'));
console.log(path_1.default.basename('./http.js', path_1.default.extname("./http.js")));
const name = 'joe';
console.log(path_1.default.join('/', 'users', name, 'notes.txt')); //'/users/joe/notes.txt'
console.log(path_1.default.join('/', 'test', 'finish', 'last.js'));
console.log(path_1.default.resolve('/')); // 获取某个路径的绝对路径
console.log(path_1.default.normalize('/users/joe/..//test.txt')); ///users/test.txt // 计算实际想表示的路径
console.log(path_1.default.resolve('/users/joe/..//test.txt')); ///users/test.txt
//# sourceMappingURL=path.js.map