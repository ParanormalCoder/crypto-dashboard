import axios from 'axios'

export default class PortfolioService {
    static async getList() {
        let resp = {}
        try {
            resp = await axios.get('http://localhost:4576/portfolio')
        } catch (err) {
            console.log('Failed to get portfolio')
        }
        return resp.data || []
    }

    static async buy(slug, qty) {
        let resp = {}
        try {
            resp = await axios.post('http://localhost:4576/portfolio', {
                slug, qty
            })
        } catch (err) {
            console.log('Failed to buy')
        }

        return resp.data || []
    }
}
