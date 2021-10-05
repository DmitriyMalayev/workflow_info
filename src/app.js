const greet = (name) => {
  console.log(`hello ${name}`);
};

greet("a");
greet("b");
greet("c");

class User {
  constructor() {
    this.score = 100;
    this.name = "";
    this.last_name = "";
  }
}
