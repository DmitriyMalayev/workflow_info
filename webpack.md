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