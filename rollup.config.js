import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

const name = require("./package.json").main.replace(/\.js$/, "");

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: `dist/${name}.js`,
				format: "cjs",
				sourcemap: true,
			},
			{
				file: `dist/${name}.mjs`,
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
				output: `dist/${name}.css`,
				sourceMap: true,
			}),
			typescript({
				tsconfig: "./tsconfig.json",
			}),
			external(),
			resolve(),
			terser(),
		],
	},
];
