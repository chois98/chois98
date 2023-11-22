// JS에서 split이라는 메서드는 어떤 역할 : 문자열을 배열로 변환(*간주)
// 어느 구분 영역에서 해당 아이템을 잘라서 배열의 독립 요소로 간주하게 할 것인가 정의
// 구분자
// merry christ mas => ["merry", "christ", mas"]

export const split = (str: string, delim: string = ""): string[] =>
  str.split(delim);

// 실행문 : cpu에서 함수실행결과값을 자동으로 인식 x => {return}
// 표현식문 : cpu에서 함수실행결과값을 자동인식o => {return} x
