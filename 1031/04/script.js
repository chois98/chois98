const member = {
  name: "kim",
  age: 25,
};

// let name = member.name;
// console.log(name);

// 객체 축약법 & 구조분해할당 융합
let { name, age } = member;
console.log(name);
console.log(age);

let student {
  name01:"아이유",
  score: {
    history: 85,
    science:94,
  },
  friends: ['kim','lee','park'],
}
