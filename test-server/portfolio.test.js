const server = require("../server/server");
const request = require("supertest");

const common = require('./common')
const portfolioService = require('../server/modules/portfolio/service')
const currenciesService = require('../server/modules/currencies/service')

describe("routes: portfolio", () => {
    beforeEach(async () => {
        await common.createDB()
        return common.cleanDB()
    })
    afterEach(async () => {
        server.close();
    });

    test("should respond with the saved two currencies", async () => {
        await currenciesService.storePrices([{
                "id": 1,
                "name": "Bitcoin",
                "slug": "bitcoin",
                "quote": {
                    "USD": {
                        "price": 11848.6065904,
                    }
                }
            },
                {
                    "id": 1027,
                    "name": "Ethereum",
                    "slug": "ethereum",
                    "quote": {
                        "USD": {
                            "price": 225.630873067,
                        }
                    }
                }]
        )

        let response = await request(server)
            .post("/portfolio")
            .send({ slug: 'ethereum', qty: 12 })

        expect(response.status).toEqual(200);
        expect(response.type).toEqual("application/json");
        expect(response.body).toEqual({ success: true });
    });

    test("should respond with the saved two currencies", async () => {
        await currenciesService.storePrices([{
                "id": 1,
                "name": "Bitcoin",
                "slug": "bitcoin",
                "quote": {
                    "USD": {
                        "price": 11848.6065904,
                    }
                }
            },
                {
                    "id": 1027,
                    "name": "Ethereum",
                    "slug": "ethereum",
                    "quote": {
                        "USD": {
                            "price": 225.630873067,
                        }
                    }
                }]
        )

        await request(server)
            .post("/portfolio")
            .send({ slug: 'ethereum', qty: 12 })

        await request(server)
            .post("/portfolio")
            .send({ slug: 'ethereum', qty: 12 })

        await request(server)
            .post("/portfolio")
            .send({ slug: 'bitcoin', qty: 12 })

        await request(server)
            .post("/portfolio")
            .send({ slug: 'bitcoin', qty: 12 })

        await request(server)
            .post("/portfolio")
            .send({ slug: 'bitcoin', qty: 12 })

        const response = await request(server)
            .get("/portfolio")

        expect(response.status).toEqual(200);
        expect(response.type).toEqual("application/json");
        const portfolio = response.body.map(currency => {
            delete currency.currencyId
            return currency
        })
        expect(portfolio).toEqual([
            {
                "averagePrice": "11848.610000",
                "totalPrice": "426549.96",
                "totalQty": "36"
            }, {
                "averagePrice": "225.630000",
                "totalPrice": "5415.12",
                "totalQty": "24"
            }]
        )
    });
});
