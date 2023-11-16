// pet 이라는 이름의 클래스를 만든 후 하나의 인스턴스 객체 만들기
// pet 클래스는 name,color프로퍼티를 갖고, run()메서드를 갖고 있어야 합니다.
// run() 메서드는 반려동물의 name 속성값과
// "is runnung" 이라는 속성값과 함께 "is running"이라는 문자를 알림창에 표시 할 수 있도록 정의

class pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    alert(`${this.name} is running!`);
  }
}

const cheez = new pet("치즈", "yellow");
cheez.run();

// 방금 만든 pet클래스를 상속받는 cat 클래스를 만들기
// cat 클래스에는 고양이의 품종을 의미하는 breed 라는 프로퍼티를 추가하고, 고양이의 이름과 색상, 품종을 한번에 표시 할수 있는 viewinfo()메서드를 추가

// cat 클래스를 활용해서 인스턴스 객체를 만든후 viewinfo()메서드를 실행

class cat extends pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }

  viewInfo() {
    alert(`이름 : ${this.name}, 품종 : ${this.breed},색상 : ${this.color}`);
  }
}
const cheez = new pet("치즈", "노란색");
cheez.run();

const bori = new cat("야옹이", "흰색", "코숏");
bori.viewInfo;
