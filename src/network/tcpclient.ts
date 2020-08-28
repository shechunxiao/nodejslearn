var net = require('net');
var client = net.connect({port: 8124}, function () { //'connect' listener
    console.log('client connected');
    client.write('world!\r\n');
});
client.on('data', function (data: { toString: () => any; }) {
    console.log(data.toString());
    client.end();
});
client.on('end', function () {
    console.log('client disconnected');
});
client.on('ready',()=>{
    console.log("准备就绪")
})
client.on('drain',()=>{
    console.log("服务端向客户端传输数据了")
})
