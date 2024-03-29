import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.zarrarpalekar.com"
              target="_blank"
              rel="noreferrer"
            >
              Zarrar
            </a>{" "}
            E-Shop
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
