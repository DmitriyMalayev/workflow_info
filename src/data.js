const fruits = [
  { fruit: "apple", premium: true },
  { fruit: "banana", premium: true },
  { fruit: "orange", premium: true },
  { fruit: "lemons", premium: false },
];

export const premiumFruits = (fruits) => {
  return fruits.filter(fruit => fruit.premium)
}



export default fruits
// export {premiumFruits, fruits as default} alternative