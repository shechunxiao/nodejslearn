"use strict";
let poolsql = require("mysql");
let pool = poolsql.createPool({
    connectionLimit: 10,
    host: '106.54.64.55',
    user: 'root',
    password: 'scxmdrslb',
    database: 'shechunxiao'
});
// pool.query('select 1+1 as solution',function(err: any, rows: { solution: any; }[], fields: any){
//     if(err){
//         throw err;
//     }
//     console.log(rows[0].solution)
// });
pool.getConnection(function (err, connection) {
    if (err)
        throw err;
    // console.log(connection);
    connection.query('select 1+1 as solution', function (err, rows) {
        console.log(rows[0].solution);
        // 使连接回到连接池
        connection.release();
        // 如果你想关闭连接并从连接池中删除它
        // connection.destroy();
    });
});
// 连接池事件监听
pool.on('connection', function (connection) {
    // console.log(connection);
    console.log("有连接发生了");
});
pool.on('enqueue', function () {
    console.log('Waiting for available connection slot');
});
// 一旦pool.end()被调用，pool.getConnection及其它操作将不再被执行！
// pool.end(function(){
//     console.log("所有连接已关闭")
// });
//# sourceMappingURL=pool.js.map