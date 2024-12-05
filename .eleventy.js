const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

	eleventyConfig.addPassthroughCopy("pages/css");
	eleventyConfig.addPassthroughCopy("pages/media");

  eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

	return {
		dir: {
			input: "pages",
			output: "public",
			includes: "_templates",
		},
	};
};