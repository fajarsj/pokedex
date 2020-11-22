import React, { Fragment } from "react";

const Spinner = (props) => {
  const { error } = props;
  const spinnerDesc = error
    ? "Something went wrong I can't catch the Pokemon for you"
    : "I still catching Pokemon for you, please be patient...";

  return (
    <div className="spinner">
      <div
        className={
          error ? "spinner__ball" : "spinner__ball spinner__ball--rotate"
        }
      >
        <div className="spinner__ball__top"></div>
        <div className="spinner__ball__middle">
          <div className="spinner__ball__button"></div>
        </div>
        <div className="spinner__ball__bottom"></div>
      </div>
      <span
        className={
          error
            ? "spinner__description spinner__description--error"
            : "spinner__description"
        }
      >
        {spinnerDesc}
      </span>
    </div>
  );
};

export default Spinner;
