var dgram = require('dgram');
var server = dgram.createSocket("udp4");
server.on("message", function (msg: string, rinfo: { address: string; port: string; }) {
    console.log("server got: " + msg + " from " +
        rinfo.address + ":" + rinfo.port);
});
server.on("listening", function () {
    var address = server.address();
    console.log("server listening " +
        address.address + ":" + address.port);
});
server.on('close',function(){
    console.log("客户端关闭了")
});
server.bind(41234);
