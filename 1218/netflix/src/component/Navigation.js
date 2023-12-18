import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            width={100}
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link className="nav-item" to="/">
                홈
              </Link>
            </Nav.Link>
            <Nav.Link href="#action2">
              <Link className="nav-item-x">시리즈</Link>
            </Nav.Link>
            <Nav.Link href="#action3">
              <Link className="nav-item" to="/movies">
                영화
              </Link>
            </Nav.Link>
            <Nav.Link href="#action4">
              <Link className="nav-item-x">NEW! 요즘 대세 콘텐츠</Link>
            </Nav.Link>
            <Nav.Link href="#action5">
              <Link className="nav-item-x">내가 찜한 리스트</Link>
            </Nav.Link>
            <Nav.Link href="#action6">
              <Link className="nav-item-x">언어별로 찾아보기</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
