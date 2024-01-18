import { formatSecondsToHHMMSS } from "../../src/time/transform";

describe("time/transform", () => {
	describe("Format seconds", () => {
		it("should gives a proper time in HH:MM:SS format", () => {
			expect(formatSecondsToHHMMSS(60)).toEqual("00:01:00");
		});
	});
});