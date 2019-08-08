const service = require('./service')

class CurrenciesCont {
    static async getAll(ctx) {
        ctx.body = await service.getDbPrices()
    }
}

module.exports = CurrenciesCont
