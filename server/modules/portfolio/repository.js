const Sequelize = require('sequelize')

const model = require('./model')
const { Currencies } = require('../currencies/model')

class PortfolioRepo {
    static async getAll() {
        return model.Portfolio.findAll({
            where: {},
            group: ['currencyId'],
            attributes: [
                'currencyId',
                [Sequelize.fn('SUM', Sequelize.col('qty')), 'totalQty'],
                [Sequelize.fn('AVG', Sequelize.col('buyPrice')), 'averagePrice']
            ]
        })
    }

    static async buyOne(currency) {
        return model.Portfolio.create(currency)
    }
}

module.exports = PortfolioRepo
