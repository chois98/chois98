// class 생성자 함수

// class Book() {
//   contructor(a,b,c)
//   this.a = a
//   this.a = a
//   this.a = a
// }

// 2. 프로토타입 객체 생성
// Book 이라는 프로토타입 객체가 생성

// 3,해당 프로토타입의 객체를 활용하여 instance객체를 생성
// => new Book()

class Book {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
    this.finish = function () {
      this.done === false ? (str = "읽는중") : (str = "완독");
      return srt;
    };
  }
}

Book.prototype.finish = function () {
  this.done = false ? (str = "읽는중") : (srt = "완독");
  return str;
};

const book1 = new Book("자바스크립트", 648, false);
console.log(book1.finish);
