import React from "react";
import styled from "styled-components";
import Todoitem from "./Todoitem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface props {
  toDoList: Array<string>;
  onDelete?: (todo: string) => void;
}

const Todolist = ({ toDoList, onDelete }: props) => {
  return (
    <Container>
      {toDoList.map((todo, index) => (
        <Todoitem
          key={index}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default Todolist;
