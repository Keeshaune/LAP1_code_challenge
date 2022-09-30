const request = require("supertest");
const app = require("../app");
const gameArray = require("../data");


describe("google API",  ()=>{ 

    let api;

    beforeAll(() => {
		api = app.listen(5001, () => {
			console.log(`Example app listening on port 5001`);
		});
	});

    afterAll((done) => {
		console.log("gracefully stopping test server");
		api.close(done);
	});

    it("sends back a status of 200", (done) => {
		request(api).get("/").expect(200,done);
	});

    it("fetches the full list of games", (done) => {
		request(api).get("/games").expect(200).expect(gameArray,done);
	});
});
