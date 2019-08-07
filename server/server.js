const Koa = require('koa');
const app = new Koa();

const setRoutes = require('./modules/routes')

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});


app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

setRoutes(app)

const server = app.listen(4576).on("error", err => {
    console.error(err);
});
module.exports = server;
