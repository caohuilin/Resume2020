const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/en': { page: '/en' }
    }
  }, ...withCSS(
    withLess({
      webpack(config, options) {
        return config;
      }
    })
  )
};