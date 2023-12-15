import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Dropdown,
  DropdownMenu,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [loading, setLoading] = useState(null);
  const [product, setProduct] = useState(undefined);
  const { id } = useParams();
  const getProductDetail = async () => {
    setLoading(true);
    const url = `https://my-json-server.typicode.com/chois98/shopping-site/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
    setLoading(false);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  if (loading || product === undefined) {
    return <h1>loading...</h1>;
  }
  return (
    <Container>
      <Row>
        <Col>
          <img
            className="product-detail-img"
            src={product?.img}
            alt="product"
          />
        </Col>
        <Col>
          <div className="product-info">{product?.title}</div>
          <div className="product-info">￦{product?.price}</div>
          <div className="choice">
            {product?.choice ? "Concious choice" : ""}
          </div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>
            <DropdownMenu>
              {product?.size.length > 0 &&
                product?.size.map((item, index) => (
                  <Dropdown.Item key={index} href="#/action">
                    {item}
                  </Dropdown.Item>
                ))}
            </DropdownMenu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
