import React, { useState, useRef } from "react";

const Body02 = () => {
  const [text, setText] = useState("");
  const textRef = useRef();
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = () => {
    if (text.length < 5) {
      // 작성란에 5글자 이상 입렵해야 넘어가짐
      textRef.current.focus();
    } else {
      alert(text);
      setText("");
    }
  };
  // 텍스트 작성완료후 작성란 관리
  return (
    <div>
      <div>
        <input ref={textRef} value={text} onChange={handleOnChange} />
        <button onClick={handleOnClick}>작성완료</button>
      </div>
    </div>
  );
};

export default Body02;
