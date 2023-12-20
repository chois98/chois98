import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Todolist from "./Todolist";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 50vh;
  background: #fff;
  padding: 32px;
  boder-radius: 8px;
`;

interface props {
  toDoList: Array<string>;
  onDelete?: (todo: string) => void;
}

const DataView = ({ toDoList, onDelete }: props) => {
  return (
    <Container>
      <Title label="To do List" />
      <Todolist toDoList={toDoList} onDelete={onDelete} />
    </Container>
  );
};

export default DataView;
