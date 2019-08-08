import axios from "axios";

export default class PriceService {
    static async getPriceList() {
        const resp = await axios.get('http://localhost:4576/currencies')
        return resp.data || []
    }
}
