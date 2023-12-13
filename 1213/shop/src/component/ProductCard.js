import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const Navigate = useNavigate();
  const showDetail = () => {
    Navigate(`/product/${item?.id}`);
  };
  return (
    <div className="productcard" onClick={showDetail}>
      <img src={item.img} alt="img" />
      <div>Conscious</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new === true ? "신상품" : "세일상품"}</div>
    </div>
  );
};
export default ProductCard;
