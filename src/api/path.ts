// import path from "path";
//
// console.log(path.basename('./http.js'));
// console.log(path.dirname('./http.js'));
// console.log(path.extname('./http.js'));
// console.log(path.basename('./http.js',path.extname("./http.js")));
// const name = 'joe';
// console.log(path.join('/', 'users', name, 'notes.txt')); //'/users/joe/notes.txt'
// console.log(path.join('/','test','finish','last.js'));
//
// console.log(path.resolve('/')); // 获取某个路径的绝对路径
//
// console.log(path.normalize('/users/joe/..//test.txt')); ///users/test.txt // 计算实际想表示的路径
//
// console.log(path.resolve('/users/joe/..//test.txt')); ///users/test.txt

process.nextTick(function(){
    console.log('nexttick')
})
