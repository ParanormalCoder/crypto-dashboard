const repo = require('./repository')
const currenciesRepo = require('../currencies/repository')

class PortfolioService {
    static async get() {
        return repo.getAll()
    }

    static async buy({ slug, qty } = {}) {
        const currency = await currenciesRepo.findOneBySlug(slug)
        if (currency) {
            return repo.buyOne({ currencyId: currency.id, qty, buyPrice: currency.price })
        }
    }
}

module.exports = PortfolioService
