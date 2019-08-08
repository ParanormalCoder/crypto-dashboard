const server = require("../server/server");
const request = require("supertest");
const sinon = require("sinon")

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
        currenciesService.UPDATE_JOB_INTERVAL_PERIOD = 3000
        const getPricesStub = sinon.stub(currenciesService, 'getPrices').returns(Promise.resolve([{
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
        )

        await currenciesService.startUpdateJob()

        await new Promise(resolve => setTimeout(resolve, 4000))

        expect(getPricesStub.callCount).toEqual(2);
        currenciesService.killUpdateJob()
        getPricesStub.restore()
    });
});
