import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { CallMe } from "./CallMe";
// import { Container } from "react-bootstrap";

export function Navigation() {
  return (
    <Navbar className="bg-body-tertiary" id="navbar">
      <Navbar.Brand href="/">
        <text className="crown">♚</text> EQUITY KING
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Navbar.Collapse id="basic-navbar-nav"> */}
      <Nav className="ms-auto">
        <Nav.Link href="/about">ABOUT</Nav.Link>
        <Nav.Link href="/gallery">GALLERY</Nav.Link>
      </Nav>
      {/* </Navbar.Collapse> */}
      <CallMe />
    </Navbar>
  );
}
