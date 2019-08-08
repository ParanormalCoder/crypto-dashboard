const service = require('./service')

class PortfolioCont {
    static async getAll(ctx) {
        ctx.body = await service.get()
    }

    static async buyOne(ctx) {
        const { slug, qty } = ctx.request.body
        if (
            typeof slug !== 'string' || !slug.length ||
            Number.isNaN(parseFloat(qty)) || parseFloat(qty) <= 0
        ) {
            ctx.throw(400)
        }

        await service.buy(ctx.request.body)
        ctx.body = { success: true }
    }
}

module.exports = PortfolioCont
