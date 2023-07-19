import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.scss";
import aboutImg from "../../../assets/hero.png";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className='about_us' id='aboutus'>
        <Container>
          <Row
            className='align-items-center justify-content-center px-2'
            data-aos='zoom-in-up'
            data-aos-delay='600'
            data-aos-easing='ease-in-out'
            data-aos-duration='800'
          >
            <Col lg={7} className='px-5'>
              <Row className='about_us_wrapper'>
                <h2>
                  We Deliver <strong>Results</strong>
                </h2>
                <span className='sub-heading'>
                  <strong>
                    With good taste and great technology we Craft Award Winning Websites.
                  </strong>
                </span>
                <p>
                  These are what determine whether or not your customer has a reaction to what
                  you’re offering. Noot Fateh as digital agency creatively plans out a surprising
                  brand design that makes customers notice your company and inspires them to take
                  action.
                </p>
              </Row>
            </Col>

            <Col lg={5}>
              <Image
                src={aboutImg}
                alt='Picture of the author'
                width={400}
                height={350}
                layout='responsive'
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
