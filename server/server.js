const http = require('http')
const Koa = require('koa');

const app = new Koa();
const db = require('./common/db')
const currenciesService = require('./modules/currencies/service')

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

let server = http.createServer(app.callback())
setRoutes(app)

if (process.env.NODE_ENV !== 'test') {
    Promise
        .all(Object.keys(db.models).map((modelName) => db.models[modelName].sync()))
        .then(() => currenciesService.startUpdateJob())
        .then(() => {
            app.listen(4576).on("error", err => {
                console.error(err);
            })
        })
}

module.exports = server;
