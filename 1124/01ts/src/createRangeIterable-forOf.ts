import { createRangeIterable } from "./createRangeIterable";
const iterable = createRangeIterable(1, 4);
for (let value of iterable) console.log(value);
