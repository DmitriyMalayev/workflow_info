const path = require("path");
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dir, "dist/assets"),
    filename: "./bundle.js",
  },
};

// We are exporting a web configuration object. Takes two properties, an entry property and an output property.
// This is javascript that can only run with the help of node.js
// This is run on the computer not in the browser.
// bundle.js runs in the browser

// __dirname  This retrieves the absolute path to the root directory.
// path module from the node library.
// path.resolve(__dirname, path to the folder where the file will be, we don't write the extension.)

// 