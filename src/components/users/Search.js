import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <form className='form'>
          <input type='text' name='keyword' placeholder='Enter the username' />
          <input
            type='submit'
            value='Search'
            name='search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
