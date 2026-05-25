// server.js - save this file
const cors_proxy = require("cors-anywhere");

const host = "0.0.0.0"; // Allow connections from external sources
const port = 5000;

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [], // Don't require any specific headers
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, function () {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
