let query      = require('mysql');
let connection_query = query.createConnection({
    host     : '106.54.64.55',
    user     : 'root',
    password : 'scxmdrslb',
    database : 'shechunxiao'
});
connection_query.connect();
// 第一种query形式
// connection_query.query('select * from mysql_first', function(err: any, rows: { solution: any; }[], fields: any) {
//     if (err) throw err;
//     console.log('The solution is: ', rows);
//     for (let row of rows){
//         console.log("当前数据是:"+row.id,row.name,row.email)
//     }
// });
// 第二种query形式
// 带有占位符的查询query
// connection_query.query("select * from mysql_first where id = ?",[5],function(err: any, rows: any, fields: any){
//     console.log(rows)
// });

// 第三种query形式
// .query(options, callback)，在查询时带有大量的高级可选项，比如 转义查询值(escaping query values)，联结重叠列名(joins with overlapping column names)，超时(timeouts), 和 类型转换(type casting)。
// connection_query.query({
//     sql:"select * from mysql_first where id = ?",
//     values:[4]
// },function(err: any, rows: any, fields: any){
//     console.log(rows)
// });

// 查询值转义
// 为了防止SQL注入，每当需要在SQL查询中使用用户数据时，你都应当提前对这些值进行转义。转义可以通过 mysql.escape(), connection.escape() 或 pool.escape() 方法实现：
// 这里推荐使用上面的第二和第三那种占位的方式
// let userId = 1;
// let sql    = 'select * from mysql_first where id = ' + connection_query.escape(userId);
// console.log(connection_query.escape(userId))
// connection_query.query(sql, function(err: any, results: any) {
//     console.log(results)
// });
// 插入
let post = {id:6,name:"nodejs测试",email:"dfdf"}
connection_query.query("insert into mysql_first set ?",post,function(err: any, rows: any){
    console.log(rows)
});



connection_query.end(function(err: any){
    if (err){
        console.log(err)
    }
});
