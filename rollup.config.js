import typescript from "rollup-plugin-typescript2";
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
			typescript({
				useTsconfigDeclarationDir: true,
			}),
			babel({
				exclude: ["node_modules/**", "src/scss/**"],
				plugins: ["@babel/plugin-transform-react-jsx"],
				presets: ["@babel/preset-react"],
			}),
			json(),
			scss({
				include: ["src/scss/**"],
				output: `${name}.css`,
				outputStyle: "compressed",
				sourceMap: true,
			}),
			external(),
			resolve(),
			terser(),
		],
	},
];
