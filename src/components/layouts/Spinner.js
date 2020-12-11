import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt='Loading' style={spinerStyle} />
    </Fragment>
  );
};

const spinerStyle = {
  width: "100px",
  margin: "auto",
  display: "block",
};

export default Spinner;
