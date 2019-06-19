import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://www.thespruce.com/thmb/ZZzAC5AE1tK4_xePtx3Hnad9-Ak=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/108077468956143_Anthony-Rosenberg_E-_Getty-Images_crop-58a47a505f9b58819c96d22f.jpg">
        <h1>704 Yard Sales</h1>
        <h2>Helping you find yard sales with ease!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To 704 Yardsales!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              You can post, search, and save different yard sales in the area that you are looking to go to.
              Each yard sale will have a date, time and location so that you can find when and where you'd like to go.
              Some of them may list out the items that will be available at the yard sale in case you are looking for 
              anything specific.
            </p>
            <p>
              To post a yard sale you will need to fill out a form that will have required information so that others will
              have the knowledge of yard sale that you will be having. There is a form on another page and then will be added
              so others can find you and come buy your items!
            </p>
            <p>
              If you would like to save the yard sales you are interested in. You will have to login
              so that you will have your information saved along with the yard sales that you are interested in.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

