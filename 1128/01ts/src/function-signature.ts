// 고차함수에 대한 타입정의
type FirstOrderFunc<T, R> = (arg0: T) => R;
type SecondOrderFunc = (arg0) => FirstOrderFunc;
