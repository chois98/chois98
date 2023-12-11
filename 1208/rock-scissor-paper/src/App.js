import "./App.css";
import { useState } from "react";
import Box from "./Box";

// 컴퓨터와 가위,바위,보 게임을 한다면 무엇이 필요한가
// 1.나와 컴퓨터가 선택한 가위,바위,보를 화면에 출력
// 2.내가 가위 , 바위, 보 중 무엇을 선택할지에 대한 옵션 선택
// 3.내가 가위, 바위 , 보 중 무엇인가를 선택한다면, 해당 결과를 화면 출력
// 4.컴퓨터는 랜덤으로 값을 선택/ 결과 화면에 출력
// 5.3~4의 결과값에 따라 누가 이겼는지 승,패 를 알아야함
// 6.승자와 패자의 화면 결과를 살짝 다르게 스타일링 해주면 좋을듯

const choice = {
  scissors: {
    name: "scissors",
    img: "https://img.freepik.com/premium-photo/male-hand-with-two-fingers-up-isolated-on-white-background-brutal-man-s-index-and-middle-finger-showing-scissors-gesture-finger-gestures_301558-1077.jpg",
  },
  rock: {
    name: "rock",
    img: "https://img.freepik.com/premium-photo/hand-clenched-in-a-fist-woman-hand-gesturing-isolated-on-white_146377-3568.jpg",
  },
  paper: {
    name: "paper",
    img: "https://src.hidoc.co.kr/image/lib/2020/3/27/1585295218513_0.jpg",
  },
};

function App() {
  const [userSelect, setuserSelect] = useState({});
  const [computerSelect, setcomputerSelect] = useState({});
  const [result, setResult] = useState("");
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log(itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log(randomItem);
    let final = itemArray[randomItem];
    console.log(final);
    return choice[final];
  };

  const judgement = (user, Computer) => {
    console.log(user, Computer);
    if (user.name === Computer.name) {
      return "tie";
    } else if (user.name === "rock") {
      return Computer.name === "scissors" ? "win" : "lose";
    } else if (user.name === "scissors") {
      return Computer.name === "paper" ? "win" : "lose";
    } else if (user.name === "paper") {
      return Computer.name === "rock" ? "win" : "lose";
    }
  };

  const play = (userChoice) => {
    setuserSelect(choice[userChoice]);
    let ComputerChoice = randomChoice();
    setcomputerSelect(ComputerChoice);
    setResult(judgement(choice[userChoice], ComputerChoice));
  };

  return (
    <div className="App">
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={(active) => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
