import { styleBody, addTitle, myEmail, phoneNumber } from "./dom";
import fruits, { premiumFruits } from "./data";

styleBody();
addTitle("This is a test");
myEmail();
console.log(phoneNumber);
console.log("index file");
console.log(fruits);
console.log(premiumFruits(fruits));
