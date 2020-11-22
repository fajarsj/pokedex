import React, { Fragment } from "react";
import Backdrop from "../Backdrop/";

const Modal = (props) => {
  const { show, modalClosed, children } = props;

  return (
    <Fragment>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className="modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        <div className="modal__dialog">{children}</div>
      </div>
    </Fragment>
  );
};

export default Modal;
