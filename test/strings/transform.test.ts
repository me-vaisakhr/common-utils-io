import { capitalizeFirstLetter } from "../../src/strings/transform";

describe("string/transform", () => {
	describe("Capitalize a string", () => {
		it("should give capitalized correctly with lowercase letters", () => {
			expect(capitalizeFirstLetter("sample")).toEqual("Sample");
		});
		it("should give capitalized correctly with uppercase letters", () => {
			expect(capitalizeFirstLetter("SAMPLE")).toEqual("Sample");
		});
		it("should give capitalized correctly with random case letters", () => {
			expect(capitalizeFirstLetter("SaMpLe")).toEqual("Sample");
		});
	});
});
