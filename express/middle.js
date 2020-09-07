var setHeader = function(){
  return function(req,res,next){
      res.statusCode = 200;
      res.header('Content-Type','text/json');
      res.head = '<head><meta charset="utf-8"><title>www</title></head>';
      console.log("执行了中间件setHeader");
      next();
  }
};
var two = function(){
    return function(req,res,next){
        console.log("执行了中间件two");
        next();
    }
};
exports.setHeader = setHeader;
exports.two = two;
