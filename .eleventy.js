const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  // Passthrough copy for Assets
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    pathPrefix: "/ActividadUnir/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
