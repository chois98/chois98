let numArray: number[] = [1, 2, 3];
let strArray: string[] = ["Hello", "world"];
interface Iperson {
  name: string;
  age?: number;
}
type Iperson01 = {
  name: string;
  age?: number;
};
let personArray = [{ name: "Jack" }, { name: "Jane", age: 32 }];

// 배열이 중요한 이유, 배열객체가 갖고 있는 속성
// 배열 = iterable object => method & property
