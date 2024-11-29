const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

	eleventyConfig.addPassthroughCopy("docs/css");
	eleventyConfig.addPassthroughCopy("docs/media");

  eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

	return {
		dir: {
			input: "docs",
			output: "public",
			includes: "_templates",
		},
	};
};