import { capitalizeFirstLetter } from "../../src/strings/transform";

describe("string/transform", () => {
	describe("Getting percentage from value", () => {
		it("should give capitalized correctly", () => {
			expect(capitalizeFirstLetter("sample")).toEqual("Sample");
		});
	});
});
