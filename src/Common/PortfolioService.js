import axios from 'axios'

export default class PortfolioService {
    static async getList() {
        const resp = await axios.get('http://localhost:4576/portfolio')
        return resp.data || []
    }

    static async buy(slug, qty) {

        const resp = await axios.post('http://localhost:4576/portfolio', {
            slug, qty
        })
        return resp.data || []
    }
}
