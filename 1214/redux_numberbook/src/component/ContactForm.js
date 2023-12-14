import React from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const dispatch = useDispatch();
  const getName = (event) => {
    setName(event.target.value);
  };
  const getNumber = (event) => {
    setphoneNumber(event.target.value);
  };

  const addContact = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
  };

  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={getName}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContect">
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type="number"
          placeholder="전화번호를 입력해주세요"
          onChange={getNumber}
        />
      </Form.Group>
      <Button variant="danger" type="submit">
        추가
      </Button>
    </Form>
  );
};

export default ContactForm;
