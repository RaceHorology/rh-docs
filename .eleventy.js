const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// used for 11ty upgrades
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

const fs = require('fs');

module.exports = function (eleventyConfig) {

  //check any issues that prevent updating to latest version
  eleventyConfig.addPlugin(UpgradeHelper);

  eleventyConfig.setTemplateFormats("html, md, njk");
  eleventyConfig.addPassthroughCopy("assets");

  // passthrough files that are required for GitHub Pages support
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy(".nojekyll");

  //eleventyConfig.addShortcode("myPrefix", () => process.env.MY_PREFIX);
  
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // set 404 config for GitHub Pages
  //const NOT_FOUND_PATH = "docs/404.html"; #only on dev-machine
  const NOT_FOUND_PATH = "404.html";

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          if (!fs.existsSync(NOT_FOUND_PATH)) {
            throw new Error(`Expected a \`${NOT_FOUND_PATH}\` file but could not find one. Did you create a 404.html template?`);
          }

          const content_404 = fs.readFileSync(NOT_FOUND_PATH);
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    dir: {
      input: "content",
      output: "docs"
    }, 
    pathPrefix: process.env.MY_PREFIX
  }
}