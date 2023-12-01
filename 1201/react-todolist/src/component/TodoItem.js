import React from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, createdDate }) => {
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input checked={isDone} type="checkbox" />
      </div>
      <div checked={content} className="title_col">
        할 일
      </div>
      <div checked={createdDate} className="date_col">
        {new Date().toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
