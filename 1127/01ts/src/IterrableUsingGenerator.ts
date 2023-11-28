//  js => 객체 지향 언어
// 우리가 알고 있는 js의 거의 모든 요소는 객체로 만들어져 있다.
// 핵심 오브 핵심 => class 생성자를 활용해서 우리 역시 객체를 만들어낼 수 있다
// class 생성자를 활용해서 => 이터러블한 객체도 만들어낼 수 있지 않을까
// 제네릭 => 제네릭 인터페이스
// 객체의 타입을 정의하고자 하는 인터페이스를 생성할때, 해당 객체안에 들어갈 key의 value 값에 대한 타입이 미정인경우
// 클래스 생성자는 오버로드 & 생성자 함수
// 오버로드는 언제 생략 -> 접근제어자 (*public private)

export class IterrableUsingGenerator<T> implements Iterable<T> {
  constructor(public values: T[] = [], public currentIndex: number = 0) {}
  [Symbol.iterator] = function* () {
    while (this.currentIndex < this.value.length) {
      yield this.values[this.currentIndex++];
    }
  };
}
