const serverConf = require('./server')
const testConf = require('./test')

module.exports= process.env.NODE_ENV === 'test' ? testConf : serverConf
