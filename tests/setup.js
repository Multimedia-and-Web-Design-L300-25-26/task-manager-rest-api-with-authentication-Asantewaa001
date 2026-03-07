import mongoose from "mongoose";

beforeAll(async () => {
	if (mongoose.connection.readyState === 1) {
		await mongoose.connection.db.dropDatabase();
	}
});

afterAll(async () => {
	if (mongoose.connection.readyState !== 0) {
		await mongoose.disconnect();
	}
});