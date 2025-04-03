import { Container, Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export function About() {
  return (
    <Container className="about-wrapper">
      <Row className="about-row">
        <Col md={6} className="photo-column" id="column">
          <Image
            src="./src/assets/images/john.jpg"
            fluid
            className="john-image"
          />
        </Col>
        <Col md={6} className="bio-column" id="column">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum modi
          inventore unde eveniet quia, ipsam, sapiente accusantium numquam
          ipsum, excepturi corporis debitis sit ratione incidunt dolore magnam
          non fugit consectetur suscipit sunt. Aliquid perspiciatis voluptatum
          itaque dolore dolores qui quod a provident aspernatur animi, autem
          earum velit aliquam eligendi quo natus id ullam, unde fugit rerum,
          optio atque ipsam laborum.
        </Col>
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
