// 문자열 & 배열
//  => 메서드
// .length : 전체 문자열 몇개로 구성되어있는지 알수 있다
// 반복문을 활용해서 특정 문자열 안에 어떤 단어 확인

// 사용자로부터 특정 문자열을 받으세요
// 사용자로부터 특정 문자열 안에 속해있는 특정단어를 받으세요
// 해당 문자열에서 특정 단어가 몇번 사용 되었는지
// 문자열에서 특정 단어가 몇번 사용되었는지 사용자에게 알려주는 알림창

const string = prompt("문자열을 입력하세요!");
const letter = prompt("어떤 문자를 체크하시겠습니까?");

let counting = (str, ch) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      count += 1;
    }
  }

  return count;
};

const result = counting(string, letter);
alert(`${string}에는 ${letter}가 ${result}개 있습니다.`);
