
const supertest = require('supertest');
const Student = require('../api/students/model/Student');
const app = require('../index');

describe("Testing the students api", () => {

	it("tests the get-students endpoint", async () => {

		const response = await supertest(app).get('/api/students');

		expect(response.status).toBe(200);

	});

})