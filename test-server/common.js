const db = require('../server/common/db')

class Common {
    static async cleanDB() {
        return Promise.all(Object.keys(db.models).map((modelName) => db.models[modelName].sync()))
    }
}

module.exports = Common
