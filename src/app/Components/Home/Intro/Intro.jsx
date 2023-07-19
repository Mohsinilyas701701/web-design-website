import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Intro.scss";

const Intro = () => {
  return (
    <>
      <div className='Intro d-flex align-items-center' id='intro'>
        <Container>
          <Row
            className='d-flex justify-content-center text-center'
            data-aos='zoom-in-up'
            data-aos-delay='600'
            data-aos-easing='ease-in-out'
            data-aos-duration='800'
          >
            {/* Content */}
            <Col xs={10}>
              <Row className='gap-4'>
                <h2>
                  <strong>Web Design Company in Dubai</strong>
                </h2>
                <p>
                  Noor Fateh is a result-driven website design company and digital agency based in
                  Dubai. Our skilled in-house team provides website development, Magento e-commerce,
                  mobile applications, social media & SEO services. We have extensive experience and
                  a track record that ensures your website connects meaningfully with your
                  customers. Our approach looks beyond immediate business needs to frame your
                  website design & digital marketing project as an ongoing extension of your Brand’s
                  core promise.
                </p>
              </Row>

              {/* Stats */}
              <Row className='py-5 g-5 justify-content-center'>
                <Col md={3} className='border border-1 p-5 intro_stats'>
                  <div className='row'>
                    <h3>30+</h3>
                    <p>in-house Team</p>
                  </div>
                </Col>
                <Col md={3} className='border border-1 p-5 intro_stats'>
                  <div className='row'>
                    <h3>13+</h3>
                    <p>Years of Experience</p>
                  </div>
                </Col>
                <Col md={3} className=' border border-1 p-5 intro_stats'>
                  <div className='row'>
                    <h3>700+</h3>
                    <p>Digital Projects</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Intro;
