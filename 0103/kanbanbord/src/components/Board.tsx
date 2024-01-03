import DraggableCard from "./DragableCard";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { ITodo, toDoState } from "../Atoms";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
  padding: 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 600px;
  background: ${(props) => props.theme.boardColor};
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDragginFromThis: boolean;
}

const Area = styled.div<IAreaProps>`
  background: ${(props) =>
    props.isDraggingOver
      ? "#ffcfd2"
      : props.isDragginFromThis
      ? "#b9fbc0"
      : "#90dbf4"};
  flex-grow: 1;
  border-radius: 5px;
  transition: background 0.2s ease-in-out;
  padding: 10px;
`;

const Form = styled.form`
  width: 100%;
  input {
    width: 99%;
    padding: 14px 0;
    border: none;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }
`;

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

interface IForm {
  toDo: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newTodo, ...allBoards[boardId]],
      };
    });
    setValue("toDo", "");
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add Task on`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDragginFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                toDoId={toDo.id}
                toDoText={toDo.text}
                index={index}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
