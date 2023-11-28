import { IterrableUsingGenerator } from "./IterrableUsingGenerator";

const array = [1, 2, 3];
const test = new IterrableUsingGenerator(array);
for (let item of test) {
  console.log(item);
}
