import * as http from "http";
import {hostname} from "os";
const port = 3000;
const server = http.createServer((request,response)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type','text/plain');
    response.end("测试信息");
})
server.listen(port,()=>{
    console.log(`服务器运行再http://${hostname}${port}`)
})
