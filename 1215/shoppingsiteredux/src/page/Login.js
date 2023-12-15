import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const trueOK = useSelector((state) => state.auth.authenticate);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    dispatch(authenticateAction.login(id, password));
    setAuthenticate(trueOK);
    navigate("/");
    dispatch(authenticateAction.login(id, password));
  };
  const idChange = (event) => setId(event.value);
  const passwordChange = (event) => setPassword(event.value);
  return (
    <Container className="login-area">
      <Form className="login-form" onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={idChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={passwordChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
