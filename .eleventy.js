const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");



module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("html, md, njk");
    eleventyConfig.addPassthroughCopy("content/assets");

    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // set 404 config for GitHub Pages
    eleventyConfig.setBrowserSyncConfig({  
      callbacks: {    
        ready: function(err, browserSync) {
          const content_404 = fs.readFileSync('docs/404.html');
      
          browserSync.addMiddleware("*", (req, res) => {
            // Provides the 404 content without redirect.        
            res.write(content_404);        
            res.end();      
          });    
        },  
      },  
      ui: false,  
      ghostMode: false
    });
  
    return {
      dir: {
        input: "content",
        output: "docs"
      }
    }
  }