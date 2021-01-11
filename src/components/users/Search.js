import React, { Component } from 'react';

class Search extends Component {
  state = {
    keyword: '',
  };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.keyword === '') {
      this.props.setAlert('Please enter the username', 'ligth');
    } else {
      this.props.searchUsers(this.state.keyword);
      this.setState({ keyword: '' });
    }
  };
  render() {
    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='keyword'
            placeholder='Enter the username'
            value={this.state.keyword}
            onChange={this.handleChange}
          />
          <input
            type='submit'
            value='Search'
            name='search'
            className='btn btn-dark btn-block'
          />
        </form>
        {this.props.showClear && (
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
