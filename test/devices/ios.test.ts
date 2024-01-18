import { isIOSDevice } from "../../src/devices/ios";

describe("devices/ios", () => {
	describe("Check for ios devices", () => {
		it("should not be ios device", () => {
			expect(isIOSDevice()).toBeFalsy();
		});
	});
});