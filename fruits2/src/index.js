import Fruits from "./foods";
import { choice, remove } from "./helpers";

console.log(Fruits);

let chosenFruit = choice(Fruits);

console.log(`I'd like to buy some ${chosenFruit} please`);

console.log(`Here you go, some ${chosenFruit}`);

console.log("Delicious, may I have another?");

remove(Fruits, chosenFruit);

const left = Fruits.length;

console.log(`Sorry, we only have: ${left} remaining!`);
