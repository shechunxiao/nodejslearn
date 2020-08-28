"use strict";
var net = require('net');
var server = net.createServer(function (socket) {
    // ?的?接
    socket.on('data', function (data) {
        socket.write("您好");
    });
    socket.on('end', function () {
        console.log('连接断开');
    });
    socket.write("欢迎光临出Node.js???：\n");
});
server.listen(8124, function () {
    console.log('server bound');
});
// server.close(()=>{
//     console.log("服务器已关闭")
// });
//# sourceMappingURL=tcp.js.map