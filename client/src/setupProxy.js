const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api/*",
    proxy({
      target: "http://localhost:5000",
      changeOrigin: true
    })
  );

  app.use(
    "/media/*",
    proxy({
      target: "http://localhost:5000",
      changeOrigin: false
    })
  );
};
