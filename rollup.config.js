import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import scss from "rollup-plugin-scss";

const name = require("./package.json").main.replace(/\.js$/, "");

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: `${name}.js`,
				format: "cjs",
				sourcemap: true,
			},
			{
				file: `${name}.mjs`,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			babel({
				exclude: ["node_modules/**", "src/scss/**"],
				plugins: ["@babel/plugin-transform-react-jsx"],
				presets: ["@babel/preset-react"],
			}),
			scss({
				include: ["src/scss/**"],
				output: `${name}.css`,
				sourceMap: true,
			}),
			json({
				include: ["src/constants/**/*.json"],
			}),
			typescript({
				tsconfig: "tsconfig.json",
			}),
			external(),
			resolve(),
			terser(),
		],
	},
];
