import React from "react";

const Button = props => {
  const {buttonClass, onButtonClick, name, type} = props;
  return (
    <button className={`ui button ${buttonClass}`} onClick={onButtonClick} type={type}>
      {name}
    </button>
  );
};

export default Button;
