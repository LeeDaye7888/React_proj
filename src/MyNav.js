import React from "react";
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MyNav() {
  let navigate = useNavigate();
  const navList = [
    { id: 0, name: "Home" },
    { id: 1, name: "Cart" },
    { id: 2, name: "MyPage" },
    { id: 3, name: "Login" },
  ];

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="navbarWrap">
          <Navbar className="logo">Crème</Navbar>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/detail/0");
                }}
              >
                Detail
              </Nav.Link> 
              <Nav.Link
                onClick={() => {
                  navigate("/cart");
                }}
              >
                Cart
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  alert("로그인을 해주십시오.");
                  navigate("/login");
                }}
              >
                MyPage
              </Nav.Link> 

              {/* {navList.map((a, i) => {
                return (
                  <Nav.Link
                    onClick={() => {
                      navigate(navList[i].name);
                    }}
                  >
                    {navList[i].name}
                  </Nav.Link>
                );
              })} */}

              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNav;
