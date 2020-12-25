import React, { Fragment } from "react";

// Styling


const SearchBox = ({ onInputChange }) => {
  return (
    <Fragment>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className='DivStyle'>
          <div div className='LabelStyle' htmlFor="user"></div>
          <input className='InputStyle' id="user" type="search" placeholder="Enter username" name="user" onChange={onInputChange} />
        </div>
      </form>
    </Fragment>
  );
};

export default SearchBox;
