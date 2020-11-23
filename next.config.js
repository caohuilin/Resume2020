const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
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