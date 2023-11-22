import { arrayLength, isEmpty } from "./arrayLength";

let numArray: number[] = [1, 2, 3];
let strArray: string[] = ["hello", "world"];

interface Iperson {
  name: string;
  age?: number;
}
let personArray = [{ name: "Jack" }, { name: "jane", age: 32 }];

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray),
  isEmpty([]),
  isEmpty([1])
);
