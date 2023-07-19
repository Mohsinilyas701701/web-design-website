"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFormik } from "formik";
import { signUpSchema } from "../../../schemas/index";
import "./Form.scss";
import CustomButton from "../../common/Button/CustomButton";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  number: "",
};

const Form = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log("🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values", values);
      action.resetForm();
    },
  });
  console.log("🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors", errors);

  return (
    <>
      <div className='cta-form justify-content-center' id='contactForm'>
        <Container>
          <Row
            className='text-center'
            data-aos='zoom-in-up'
            data-aos-delay='600'
            data-aos-easing='ease-in-out'
            data-aos-duration='800'
          >
            <h2>Contact form</h2>
            <p className='w-75 m-auto'>
              If you are interested, Please fill the form. Our team will contact you soon!
            </p>
          </Row>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <Row
              className='py-5 g-5 justify-content-center text-center'
              data-aos='fade-in'
              data-aos-delay='800'
              data-aos-easing='ease-in-out'
              data-aos-duration='800'
            >
              <Col md={3}>
                <input
                  type='text'
                  className='form-control'
                  placeholder='First Name'
                  name='first_name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.first_name && touched.first_name ? (
                  <p className='text-danger'>{errors.first_name}</p>
                ) : null}
              </Col>
              <Col md={3}>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Last Name'
                  name='last_name'
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.last_name && touched.last_name ? (
                  <p className='text-danger'>{errors.last_name}</p>
                ) : null}
              </Col>
              <Col md={3}>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className='text-danger'>{errors.email}</p>
                ) : null}
              </Col>
              <Col md={3}>
                <input
                  type='number'
                  name='number'
                  className='form-control'
                  placeholder='Phone No'
                  value={values.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.number && touched.number ? (
                  <p className='text-danger'>{errors.number}</p>
                ) : null}
              </Col>
              <Col md={1}>
                <CustomButton buttonTitle='Submit' type='submit' />
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Form;
