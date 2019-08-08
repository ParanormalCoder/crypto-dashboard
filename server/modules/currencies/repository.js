const model = require('./model')

class CurrenciesRepo {
    static async getAll() {
        return model.Currencies.findAll()
    }

    static async saveAll(prices = []) {
        return model.Currencies.bulkCreate(prices, { updateOnDuplicate: ['price'] })
    }

    static async findOneBySlug(slug) {
        return model.Currencies.findOne({ where: { slug } })
    }
}

module.exports = CurrenciesRepo
