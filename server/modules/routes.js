const Router = require('koa-router')

const portfolioRoutes = require('../modules/portfolio/routes')
const pricesRoutes = require('../modules/currencies/routes')

let defaultRouter = new Router({})
defaultRouter.get('/', async (ctx) => {
    ctx.body = { hello: 'world' }
})

module.exports = app => {
    app
        .use(defaultRouter.routes())
        .use(defaultRouter.allowedMethods())
        .use(portfolioRoutes.routes())
        .use(portfolioRoutes.allowedMethods())
        .use(pricesRoutes.routes())
        .use(pricesRoutes.allowedMethods())
}
