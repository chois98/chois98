import React from "react";

const box = ({ title, item }) => {
  return (
    <div>
      <div className="box">
        <h1>{title}</h1>
        <img
          className="item-img"
          src={item && item.img}
          alt={item && item.name}
        />
        <h2>Win</h2>
      </div>
    </div>
  );
};

export default box;
