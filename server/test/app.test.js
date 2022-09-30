// const request = require("supertest")
const app = require('../app')

describe("API server", () => {
    let api;

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log(`Example app listening on port 5000`)
        })
    })

    afterAll((done) => {
		console.log("gracefully stopping test server");
		api.close(done);
	});

    it("responds with a status of 200 when using the / endpoint", (done) => {
        request(api).get("/").expect(200, done);
    })
})
