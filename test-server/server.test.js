const server = require("../server/server");
const request = require("supertest");


describe("routes: index", () => {
    afterEach(() => {
        server.close();
    });

    test("should respond as expected", async () => {
        const response = await request(server).get("/");
        expect(response.status).toEqual(200);
        expect(response.type).toEqual("application/json");
        expect(response.body).toEqual({ hello: 'world' });
    });
});
