const db = require('../server/common/db')

class Common {
    static async createDB() {
        return Promise.all(Object.keys(db.models).map((modelName) => db.models[modelName].sync()))
    }

    static async cleanDB() {
        await db.query("SET FOREIGN_KEY_CHECKS = 0")
        await db.query('DELETE FROM `portfolios` WHERE TRUE')
        await db.query('DELETE FROM `currencies` WHERE TRUE')
        await db.query("SET FOREIGN_KEY_CHECKS = 1")
    }
}

module.exports = Common
