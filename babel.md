babeljs
Used to make modern javascript code compatible with older browsers.  
Need to install node and npm
Then we need to do
npm init
npm install @babel/core @babel/cli --save-dev
npm install @babel/preset-env --save-dev

This command converts the file
node_modules/.bin/babel before.js -o after.js

node_modules folder
This is where all of the third party libraries are installed

package.json
npm installs all of the packages inside package.json

```js
class User {
  constructor(name) {
    this.name = name;
  }
}

//Becomes this

("use strict");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var User = function User(name) {
  _classCallCheck(this, User);

  this.name = name;
};
```

# Project Sturcture

`src Folder`
`app.js`
The src folder contains the source JavaScript code inside of app.js
Contains the new features.

`dist Folder`
Contains the end code

`assets Folder`
Contains JS, Images, CSS, index.html, bundle.js

`index.html`
Contains a reference to the bundle

`bundle.js`
Contains the output of converted code that is browser compatible.
This is the file we load to a web server

`node_modules/.bin/babel src/app.js -o dist/assets/bundle.js`

# Adding Scripts Inside package.json
npm run babel
-w is a watch flag. Any time there is a change the script will be run automatically. 

```json
"scripts": {
    "babel": "node_modules/.bin/babel src/app.js -w -o dist/assets/bundle.js"
  },
```


