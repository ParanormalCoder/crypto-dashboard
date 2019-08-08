const Sequelize = require('sequelize')
const db = require('../../common/db')

const Currencies = db.define(
    'currencies',
    {
        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        slug: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.DECIMAL(15, 2),
            allowNull: false
        }
    },
    {
        indexes: [
            {
                unique: true,
                fields: ['slug']
            }
        ],
        timestamps: true
    }
)

module.exports = {
    Currencies
}
