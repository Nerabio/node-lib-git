import typescript from "rollup-plugin-typescript2";

export default {
	input: 'build/cjs/index.js',
	output: {
		file: 'build/bundle.js',
		format: 'cjs'
	},
	plugins: [typescript({ useTsconfigDeclarationDir: true })],
};