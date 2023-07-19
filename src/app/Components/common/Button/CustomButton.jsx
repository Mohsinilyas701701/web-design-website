import React from "react";
import { Button } from "react-bootstrap";
import "./CustomButton.scss";

const CustomButton = ({ buttonTitle }) => {
  return (
    <div>
      <Button className='btn-brand-primary mx-3'>{buttonTitle}</Button>
    </div>
  );
};

export default CustomButton;
