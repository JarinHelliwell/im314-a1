module.exports = function(eleventyConfig) {
     eleventyConfig.addWatchTarget("./_src/sass/");
     return {
          dir: {
               input: "_src"
          }
     }
}
// This JavaScript does not need to be linked to our index.html because it is being read by eleventy