module.exports = function (eleventyConfig) {

  //check any issues that prevent updating to latest version
  const UpgradeHelper = require("@11ty/eleventy-upgrade-help");
  eleventyConfig.addPlugin(UpgradeHelper);

  //eleventyConfig.addPlugin(markdownItTableX);

  //markdown-it
  const markdownIt = require('markdown-it');
  const markdownItAttrs = require('markdown-it-attrs');

  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: false
  };
  const markdownLib = markdownIt(markdownItOptions)
    .use(markdownItAttrs)
    ;
  eleventyConfig.setLibrary('md', markdownLib);

  eleventyConfig.setTemplateFormats("html, md, njk");
  eleventyConfig.addPassthroughCopy("assets");

  // passthrough files that are required for GitHub Pages support
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy(".nojekyll");

  //eleventyConfig.addShortcode("myPrefix", () => process.env.MY_PREFIX);
  
  const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // set 404 config for GitHub Pages
  //const NOT_FOUND_PATH = "docs/404.html"; #only on dev-machine
  const fs = require('fs');
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
      output: "docs",
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk"
    }, 
    pathPrefix: process.env.MY_PREFIX
  }
}