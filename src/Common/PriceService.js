export default class PriceService {
    static async getPriceList() {
        // Mock data
        return [
            {
                "id": 52,
                "name": "XRP",
                "last_updated": "2019-08-07T18:23:03.000Z",
                "quote": {
                    "USD": {
                        "price": 0.309529689362,
                    }
                }
            },
            {
                "id": 1831,
                "name": "ABCD",
                "last_updated": "2019-08-07T18:23:06.000Z",
                "quote": {
                    "USD": {
                        "price": 337.591061994,
                    }
                }
            }
        ]
    }
}
