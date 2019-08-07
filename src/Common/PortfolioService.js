export default class PortfolioService {
    static async getList() {
        // Mock data
        return [
            {
                "id": 2492,
                "name": "Elastos01",
                "value": 3.27944523709,
                "price": 3.27944523709,
                "qty": 32,
            },
            {
                "id": 2492,
                "name": "Elastos02",
                "value": 3.27944523709,
                "price": 3.27944523709,
                "qty": 32,
            }
        ]
    }
}
