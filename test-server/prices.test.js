const server = require("../server/server");
const request = require("supertest");

const common = require('./common')
const currenciesService = require('../server/modules/currencies/service')

describe("routes: prices", () => {
    beforeEach(async () => {
        return common.cleanDB()
    })
    afterEach(() => {
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
            }])

        const response = await request(server).get("/currencies");
        expect(response.status).toEqual(200);
        expect(response.type).toEqual("application/json");
        expect(response.body.length).toEqual(2);
    });
});
