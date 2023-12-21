import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigete = useNavigate();
  const onAboutClick = () => {
    navigete("/about");
  };
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>이벤트 참여 방법 확인하기</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
