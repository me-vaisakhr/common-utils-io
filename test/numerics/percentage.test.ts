import {
	getPercentageFromValue,
	getValueFromPercentage,
} from "../../src/numerics/percentage";

describe("Percentage", () => {
    
	describe("Getting percentage from value", () => {
		it("should give percentage correctly", () => {
			expect(getPercentageFromValue(1, 2)).toEqual(50);
		});
		it("should give percentage correctly where percentage in 1000s", () => {
			expect(getPercentageFromValue(20, 80, 1000)).toEqual(250);
		});
	});

	describe("Getting value from percentage", () => {
		it("should give value correctly", () => {
			expect(getValueFromPercentage(50, 2)).toEqual(1);
		});
		it("should give percentage correctly where percentage in 1000s", () => {
			expect(getValueFromPercentage(250, 80, 1000)).toEqual(20);
		});
	});
});
