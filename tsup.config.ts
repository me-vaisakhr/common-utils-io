import { defineConfig } from "tsup";

export default defineConfig({
	clean: true,
	dts: true,
	entry: ["src/**/*.ts", "!test/**/*.test.*"],
	format: ["cjs", "esm"],
	outDir: "dist",
	sourcemap: true,
});