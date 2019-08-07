const Router = require('koa-router')

let router = new Router({})
router.get('/prices', async (ctx) => {
    ctx.body = {}
})

module.exports = router
