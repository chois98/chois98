import React from "react";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [keyWord, setKeyWord] = useState();
  const changeKeyword = (event) => {
    setKeyWord(event.target.value);
  };
  const searchByname = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyWord } });
  };
  return (
    <Form onSubmit={searchByname}>
      <Row className="searchBox">
        <Col>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={changeKeyword}
          />
        </Col>
        <Col>
          <Button type="submit" variant="danger">
            검색
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
