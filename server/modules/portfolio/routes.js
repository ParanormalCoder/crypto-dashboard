const Router = require('koa-router')

let router = new Router({})
router.get('/portfolio', async (ctx) => {
    ctx.body = {}
})
router.post('/portfolio', async (ctx) => {
    ctx.body = {}
})

module.exports = router
