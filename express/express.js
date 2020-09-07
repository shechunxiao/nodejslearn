var express = require("express");
var querystring = require("querystring");
var app = express();
var middle = require('./middle');
// console.log(app);
// app.get('/:id?/:name?', function (req, res) {
//     // let html = "";
//     // html += '<div style="color:red;">百度</div>'
//     // res.send(html)
//     // res.send({id:1,name:"张三"});
//     res.send(req.params);
// })
// app.get('/:id',function(req,res,next){
//     if(req.params.id > 5){
//         next();
//     }else{
//         res.send('id小于5');
//     }
// });
// app.get('/:id',function(req,res,next){
//     res.send('id大于5');
// });
// app.use(middle.setHeader());
app.use(express.basicAuth('testuser','testpass'));
app.post('/post',function(req,res){
    req.on('data',function(data){
        // res.send(data);
        // res.send(data.toString());
        res.send(querystring.parse(data.toString()));

    });

});
app.get('/file',function(req,res){
    res.sendFile(__dirname+'/test.html')
});
app.put('/put',function(req,res){
    req.on('data',function(data){
        res.send(querystring.parse(data.toString()));

    })
});
// app.use('/middle',middle.setHeader());
app.get('/middle',middle.setHeader(),middle.two(),function(req,res){
    res.send('middle');
});


app.listen('1337','127.0.0.1');
