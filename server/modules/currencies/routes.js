const Router = require('koa-router')
const controller = require('./controller')
const service = require('./service')

let router = new Router({})
router.get('/currencies', controller.getAll)

module.exports = router
