import React from 'react';
import './Button.scss';

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps): JSX.Element => (
  <button type="button" className="button-container">
    {text}
  </button>
);

export default Button;
