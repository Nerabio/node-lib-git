import typescript from "rollup-plugin-typescript2";

export default {
	input: 'build/esm/index.js',
	output: {
		file: './index.js',
		format: 'esm'
	},
	plugins: [typescript({ useTsconfigDeclarationDir: true })],
};