import React from 'react';
import './Button.scss';

type ButtonProps = {
  text: string;
  changePage: () => void;
};

const Button = ({ text, changePage }: ButtonProps): JSX.Element => (
  <button type="button" className="button-container" onClick={changePage}>
    {text}
  </button>
);

export default Button;
