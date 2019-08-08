export default class Utils {
    static getFormattedPrice(priceStr) {
        return parseFloat(priceStr).toLocaleString('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    }
}
