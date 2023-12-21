import React, { useState } from "react";
import ShowinputButton from "./ShowinputButton";
import Todoinput from "./Todoinput";

interface props {
  toDo: string;
  setTodo: (todo: string) => void;
  onAdd: (todo: string) => void;
}

const InputContainer = ({ toDo, setTodo, onAdd }: props) => {
  const [showToDoInput, setShowToDoInput] = useState(true);
  return (
    <div>
      {showToDoInput && (
        <Todoinput toDo={toDo} setTodo={setTodo} onAdd={onAdd} />
      )}
      <ShowinputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </div>
  );
};

export default InputContainer;
