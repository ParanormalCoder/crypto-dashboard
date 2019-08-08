const service = require('./service')

class PortfolioCont {
    static async getAll(ctx) {
        ctx.body = await service.get()
    }

    static async buyOne(ctx) {
        await service.buy(ctx.request.body)
        ctx.body = { success: true}
    }
}

module.exports = PortfolioCont
