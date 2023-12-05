import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { emotionList, getFormattedDate } from "../util";
import "./Editor.css";

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const today = new Date();
  const initDate = new Date(parseInt(initData.date));
  const [state, setState] = useState({
    date: getFormattedDate(today),
    emotionId: 3,
    content: "",
  });
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(today),
      });
    }
  }, [initDate]);
  const handleChangeDate = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };
  const handlesubmit = () => {
    onSubmit(state);
  };
  const handleOnGoback = () => {
    navigate(-1);
  };
  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    });
  };
  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 감정</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>
      <div className="editor_section bottom_section">
        <Button text={"취소하기"} type={"negative"} onClick={handleOnGoback} />
        <Button text={"작성완료"} type={"positive"} onClick={handlesubmit} />
      </div>
    </div>
  );
};

export default Editor;
