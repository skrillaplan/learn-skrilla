module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addCollection("screens", (api) =>
    api.getFilteredByGlob("src/screens/*.md").sort((a, b) => a.data.order - b.data.order)
  );
  eleventyConfig.addCollection("guides", (api) =>
    api.getFilteredByGlob("src/guides/*.md").sort((a, b) => a.data.order - b.data.order)
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
