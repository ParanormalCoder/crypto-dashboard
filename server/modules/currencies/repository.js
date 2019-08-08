const model = require('./model')

class CurrenciesRepo {
    static async getAll() {
        return model.Currencies.findAll()
    }

    static async saveAll(prices = []) {
        return model.Currencies.bulkCreate(prices, { updateOnDuplicate: ['price'] })
    }
}

module.exports = CurrenciesRepo
