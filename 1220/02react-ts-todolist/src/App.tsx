import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import DataView from "./component/DataView";
import Todoinput from "./component/Todoinput";
import ShowinputButton from "./component/ShowinputButton";
import Button from "./component/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #ffecd1;
`;

const mockup = ["리액트 공부하기", "운동하기", "책 읽기"];

function App() {
  const [toDoList, setTodoList] = useState(mockup);
  const [toDo, setTodo] = useState("");
  const [showToDoInput, setShowToDoInput] = useState(true);
  const onDelete = (todo: string) => {
    setTodoList(toDoList.filter((item) => item !== todo));
  };

  const onAdd = (todo: string) => {
    if (toDo === "") return;
    setTodoList([...toDoList, toDo]);
    setTodo("");
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      {showToDoInput && (
        <Todoinput toDo={toDo} setTodo={setTodo} onAdd={onAdd} />
      )}
      <ShowinputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </Container>
  );
}

export default App;
