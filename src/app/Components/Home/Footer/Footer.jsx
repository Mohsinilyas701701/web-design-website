import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer class='site-footer'>
        <div class='container'>
          <div class='row justify-content-between'>
            <div class='col-sm-12 col-md-6'>
              <h6>About Company</h6>
              <p class='text-justify'>
                Our website Design company in Dubai has a profound sense of teamwork that they use
                to satisfy our customer’s needs. Comparing other web design company Dubai, in our
                company we share truthfulness, modesty, and laughter. The staff is made of a
                diversified background of talents and knowledge and uses this knowledge to keep the
                creative juices flowing making this a strong foundation.
              </p>
            </div>
            <div class='col-xs-6 col-md-3'>
              <h6>Quick Links</h6>
              <Nav className='d-flex flex-column'>
                <Nav.Link href='#services'>Services</Nav.Link>
                <Nav.Link href='#aboutus'>About Us</Nav.Link>
                <Nav.Link href='#intro'>Intro</Nav.Link>
                <Nav.Link href='#contactForm'>Contact Us</Nav.Link>
              </Nav>
            </div>
          </div>
          <hr />
        </div>
        <div class='container'>
          <div class='row'>
            <div class='col-md-8 col-sm-6 col-xs-12'>
              <p class='copyright-text'>
                Copyright &copy; 2017 All Rights Reserved by
                <a href='#'>Scanfcode</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
