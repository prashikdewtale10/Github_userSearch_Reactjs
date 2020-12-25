import React, { Fragment } from "react";
import ReactLogo from "../../asset/octocat.svg";



// Styling


const Banner = () => {
  return (
    <Fragment>
      <header>
      <img className='logo' src={ReactLogo} alt="GitHub Logo" />
        <h3>Github User Info</h3>
      </header>
    </Fragment>
  );
};

export default Banner;
