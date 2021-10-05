# Webpack
Webpack is a popular module bundler and front end tool.
It lets us bundle multiple files into one file such as bundle.js
Works well with babel
Ability to start local development server

# Webpack Dev Server Installation
npm install webpack-dev-server
npm run serve 


```json
  "scripts": {
    "build": "node_modules/.bin/webpack --mode production",      //production and building. Slower but optimized. 
    "serve": "webpack-dev-server"     //development. faster. 
  }
```

# Loaders in WebPack
npm install babel-loader --save-dev
Also we need to add a module with a rules property
Tasks that run when they're loaded via import


```js
const path = require("path");
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "./bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/assets/",
  },
  // whenever we run npm run build this runs. 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
    ],
  },
};
```
 We are exporting a web configuration object. Takes two properties, an entry property and an output property.
 This is javascript that can only run with the help of node.js
 This is run on the computer not in the browser.
 bundle.js runs in the browser

 __dirname  This retrieves the absolute path to the root directory.
 path module from the node library.
 path.resolve(__dirname, path to the folder where the file will be, we don't write the extension.)

 Running Webpack Requirements
 Webpack Core and Webpack CLI
 npm install webpack webpack-cli --save-dev
 node_modules/.bin/webpack
 After adding it to package.json we can do   npm run webpack

 Module
 A chunk of code that we can export from one file and import in another.

 Export
 If we want to use the files we need to prefix our methods with export and import them in the file needed.
