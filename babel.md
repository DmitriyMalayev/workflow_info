<!-- 
babeljs 
Used to make modern javascript code compatible with older browsers.  
Need to install node and npm 
Then we need to do 
npm init
npm install @babel/core @babel/cli --save-dev
npm install @babel/preset-env --save-dev
-->

```js
class User {
  constructor(name){
  this.name = name
  }
}

//Becomes this

"use strict";

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
