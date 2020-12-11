import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <div className='navbar bg-dark'>
      <h2>
        <i className='fab fa-github' /> {title}
      </h2>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
