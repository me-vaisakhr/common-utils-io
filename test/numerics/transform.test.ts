import {
	numberWithCommaSeparated,
	prependZero,
} from "../../src/numerics/transform";

describe("numerics/transform", () => {
	describe("Transform value with comma separated", () => {
		it("should give value with out comma separated correctly", () => {
			expect(numberWithCommaSeparated(10)).toEqual("10");
		});
		it("should give value with comma separated correctly", () => {
			expect(numberWithCommaSeparated(1000)).toEqual("1,000");
		});
	});

	describe("Prepend zero to a number", () => {
		const num = 9;
		it("should prepend zero", () => {
			expect(prependZero(num, num < 5)).toEqual(`${num}`);
		});
		it("should not prepend zero", () => {
			expect(prependZero(num, num < 10)).toEqual(`0${num}`);
		});
	});
});
