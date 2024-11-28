module.exports = function (eleventyConfig) {
	return {
		passthroughFileCopy: true,
		dir: {
			input: "docs",
			output: "public",
			includes: "_templates",
		},
	};
};