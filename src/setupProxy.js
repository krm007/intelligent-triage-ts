// @ts-ignore
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "http://192.168.15.90:8899",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/"
      }
    })
  );
};
