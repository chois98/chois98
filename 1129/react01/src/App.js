import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// 생김새는 함수인데, 첫단어가 대문자로 시작

// Jsx 문법 = javascript & Xml
// svg => xmlns => xml name space : 해당 xml 문법을 창시한 창시작 혹은 기업을 가리기 위한 약속
// xml => Extenble markup language => 개발자가 자신만의 고유한 문법을 만들어서 사용하고 싶을 때
// <desk></desk>

function App() {
  const name = "chois";
  const location = "강남구";
  return (
    <div className="App">
      <Header />
      <Body name={name} location={location} />
      <Footer />
    </div>
  );
}

export default App;
