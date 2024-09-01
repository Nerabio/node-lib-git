import typescript from "rollup-plugin-typescript2";

export default {
	input: 'build/cjs/index.js',
	output: {
		file: './index.js',
		format: 'cjs'
	},
	plugins: [typescript({ useTsconfigDeclarationDir: true })],
};