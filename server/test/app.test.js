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

    it("can it work?", (done) => {
		request(api).get("/").expect(200,done);
	});

    it("can it work?", (done) => {
		request(api).get("/games").expect(200).expect(gameArray,done);
	});

    // it("can it work?", async () => {
    //     const data = await request(api).get("/games/lucky")
	// 	.expect(200).expect(typeof data).toBe("object");
	// });

    
});



  
//   app.get('/games/lucky', (req, res) => {
//     let randomGame = gameArray[Math.floor(Math.random()*gameArray.length)];
//     res.send(randomGame);
//    })
