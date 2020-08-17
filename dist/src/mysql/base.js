"use strict";
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '106.54.64.55',
    user: 'root',
    password: 'scxmdrslb',
    database: 'shechunxiao'
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err)
        throw err;
    console.log('The solution is: ', rows[0].solution);
});
connection.end(function (err) {
    if (err) {
        console.log(err);
    }
});
// connection.destroy();
//# sourceMappingURL=base.js.map