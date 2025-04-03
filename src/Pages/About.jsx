import { Container, Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export function About() {
  return (
    <Container className="about-wrapper">
      <Row className="about-bio-row">
        <Col md={6}>
          <Image src="./src/assets/images/john.jpg" fluid />
        </Col>
        <Col md={6}>Column 2</Col>
      </Row>
      {/* <div className="about-bio">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
        reprehenderit, eos nihil, officia delectus similique, ratione iure
        quibusdam a aliquam dicta deserunt modi in harum consequuntur numquam
        debitis at sapiente tempora? Et, ad!
      </div> */}
    </Container>
  );
}
