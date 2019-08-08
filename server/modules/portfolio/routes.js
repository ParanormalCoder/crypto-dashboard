const Router = require('koa-router')
const PortfolioCont = require('./controller')

let router = new Router({})

router.get('/portfolio', PortfolioCont.getAll)
router.post('/portfolio', PortfolioCont.buyOne)

module.exports = router
