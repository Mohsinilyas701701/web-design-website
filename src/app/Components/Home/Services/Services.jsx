import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Services.scss";

const Services = () => {
  return (
    <>
      <div className='services my-10' id='services'>
        <Container>
          <Row
            className=' justify-content-center text-center gap-3'
            data-aos='zoom-in-up'
            data-aos-delay='600'
            data-aos-easing='ease-in-out'
            data-aos-duration='800'
          >
            <h2>
              Our
              <strong> Services</strong>
            </h2>
            <p className='w-75'>
              We believe in cultivating creativity by encouraging it and harnessing fresh ideas,
              perspectives, techniques and sources of inspiration that make us more effective
              problem-solvers. Our diverse range services include responsive website design, website
              development, mobile applications, graphic design, branding, digital marketing & SEO.
              We communicate openly and honestly, especially around thorny topics and honor
              diversity in opinions.
            </p>
          </Row>

          <Row
            className='py-5'
            data-aos='zoom-in-up'
            data-aos-delay='600'
            data-aos-easing='ease-in-out'
            data-aos-duration='800'
          >
            <Col md={4}>
              <div class='flip'>
                <div class='front bg-service-img1'></div>
                <div class='back d-flex flex-column align-items-center text-center justify-content-center gap-3'>
                  <h3>User Interface (UI) Design</h3>
                  <p>
                    UI designers focus on designing elements such as buttons, menus, icons, and
                    typography to enhance the user's interaction and overall experience with the
                    website
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class='flip'>
                <div class='front bg-service-img2'></div>
                <div class='back d-flex flex-column align-items-center text-center justify-content-center gap-3'>
                  <h3>User Experience (UX) Design</h3>
                  <p>
                    User experience design focuses on improving the overall experience users have
                    while interacting with a website
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class='flip'>
                <div class='front bg-service-img3'></div>
                <div class='back d-flex flex-column align-items-center text-center justify-content-center gap-3'>
                  <h3>Graphic Design</h3>
                  <p>
                    Graphic design in web design involves creating visual elements, such as logos,
                    banners, illustrations, and images, that contribute to the overall aesthetic
                    appeal and branding of a website
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          {/* Second Row */}
          <Row>
            <Col md={4}>
              <div class='flip'>
                <div class='front bg-service-img4'></div>
                <div class='back d-flex flex-column align-items-center text-center justify-content-center gap-3'>
                  <h3>Interaction Design</h3>
                  <p>
                    Interaction design concentrates on designing and enhancing the interactive
                    elements and transitions within a website.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class='flip'>
                <div class='front bg-service-img5'></div>
                <div class='back d-flex flex-column align-items-center text-center justify-content-center gap-3'>
                  <h3>E-commerce Design</h3>
                  <p>
                    E-commerce design is specifically tailored for online stores and aims to create
                    an effective and seamless online shopping experience
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class='flip'>
                <div class='front bg-service-img6'></div>
                <div class='back d-flex flex-column align-items-center text-center justify-content-center gap-3'>
                  <h3>Responsive Web Design</h3>
                  <p>
                    By using fluid grids, flexible images, and CSS media queries, responsive web
                    design ensures a seamless user experience across various devices, such as
                    desktops, tablets, and smartphones
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
