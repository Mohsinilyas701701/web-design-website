import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import brandLogo from "../../../assets/logo.png";
import "./CustomNavbar.scss";
import Image from "next/image";

const CustomNavbar = () => {
  return (
    <div>
      <Navbar className='navbar-nav py-4' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <Image src={brandLogo} alt='Picture of the author' layout='responsive' />
          </Navbar.Brand>
          <Nav className='ms-auto navbar'>
            <Nav.Link href='#intro'>Intro</Nav.Link>
            <Nav.Link href='#aboutus'>About Us</Nav.Link>
            <Nav.Link href='#services'>Services</Nav.Link>
            <Nav.Link href='#info'>Info</Nav.Link>
            <Nav.Link href='#contactForm'>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
