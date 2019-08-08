const Sequelize = require('sequelize')
const db = require('../../common/db')

const { Currencies } = require('../currencies/model')

const Portfolio = db.define(
    'portfolio',
    {
        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        currencyId: {
            type: Sequelize.STRING,
            allowNull: false
        },
        qty: {
            type: Sequelize.DECIMAL(15, 2),
            allowNull: false
        },
        buyPrice: {
            type: Sequelize.DECIMAL(15, 2),
            allowNull: false
        }
    },
    {
        timestamps: true
    }
)

Currencies.belongsTo(Portfolio, { foreignKey: 'currencyId' })
Portfolio.hasMany(Currencies, { foreignKey: 'currencyId' })

module.exports = {
    Portfolio
}
