const axios = require('axios')
const { URL } = require('url')
const conf = require('../../conf')
const repo = require('./repository')

let UPDATE_JOB_INTERVAL_PERIOD = 30 * 60 * 1000 // every 30 mins prices get updated
let refreshInterval = null

class CurrenciesService {
    static set refreshInterval(value) {
        refreshInterval = value
    }

    static set UPDATE_JOB_INTERVAL_PERIOD(value) {
        UPDATE_JOB_INTERVAL_PERIOD = value
    }

    static async getPrices() {
        let response
        try {
            const {
                data: {
                    data: responseData
                }
            } = await axios.get(new URL('/v1/cryptocurrency/listings/latest?start=1&convert=USD', conf.pricesApiUrl).href, {
                headers: {
                    'X-CMC_PRO_API_KEY': conf.pricesApiKey,
                    'Accept': 'application/json'
                }
            })

            response = responseData
        } catch (err) {
            console.error(err.message)
        }

        return response
    }

    static async getDbPrices() {
        return repo.getAll()
    }

    static async storePrices(prices = []) {
        if (!prices || !prices.length) {
            return
        }

        const minimizedPricesData = prices.map(currency => ({
            id: currency.id,
            name: currency.name,
            slug: currency.slug,
            price: currency.quote.USD.price
        }))

        await repo.saveAll(minimizedPricesData)
    }

    static async refreshPrices() {
        const prices = await CurrenciesService.getPrices()
        await CurrenciesService.storePrices(prices)
    }

    static killUpdateJob() {
        clearInterval(CurrenciesService.refreshInterval)
        CurrenciesService.refreshInterval = null
    }

    static async startUpdateJob() {
        await CurrenciesService.refreshPrices()
        CurrenciesService.refreshInterval = setInterval(CurrenciesService.refreshPrices, UPDATE_JOB_INTERVAL_PERIOD)
    }
}

module.exports = CurrenciesService
