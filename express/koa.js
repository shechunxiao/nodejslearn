const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const serve = require('koa-static');
// const main = ctx => {
//   ctx.response.body = 'Hello World';
// };
const main = ctx => {
    ctx.response.body = 'Hello World';
};
const about = ctx => {
    ctx.response.body = '这里是about';
}
const redirect = ctx => {
    ctx.response.redirect('/');
};
const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    next();
}
app.on('error', function(err){
    log.error('server error', err);
});
app.use(logger);
app.use(route.get('/',main));
app.use(route.get('/about',about));
app.use(serve(__dirname));
app.use(route.get('/redirect',redirect));

app.listen(3000);
