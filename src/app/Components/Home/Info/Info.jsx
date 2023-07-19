import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Info.scss";

const Info = () => {
  return (
    <div className='company_info' id='info'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={10}>
            <div
              className='company_info_content p-5'
              data-aos='zoom-in-up'
              data-aos-delay='600'
              data-aos-easing='ease-in-out'
              data-aos-duration='800'
            >
              <h2>Best Web Design Company in Dubai</h2>
              <p>
                In today’s world where the cutthroat competition prevails your brand will have to
                stand on its own. Our web development company in Dubai is armed with creative
                intelligence with visionary ideas and original thinking. We believe in dedication to
                hard work with integrity and honesty.
              </p>
              <p>
                At Noor Fateh web design dubai, we are passionate people who think in delivering
                outstanding results. At Noor Fateh web design Dubai you can count on us to be an
                integrated communications agency with a good track record that can take your company
                and frame your project as an extension of the core promise of your brand.
              </p>
              <p>
                Because we love what we do and because we want our clients to feel the same way
                about our work, Noor Fateh web design Dubai keeps everything 100% in-house. From
                designing, development, or digital marketing. We take pride in our team, in which
                every member aims to contribute to our mutual goal – to deliver and maintain, at all
                means necessary, the highest quality of service from Dubai to the world.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
