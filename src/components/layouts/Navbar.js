import React, { Component } from 'react'
import PropTypes from 'prop-types';
class Navbar extends Component {
    static defaultProps={
        title:'GitHub Finder'
    }
    static propTypes={
        title:PropTypes.string.isRequired
    }
    render() {
        return (
            <div className='navbar bg-dark'>
                <h2>
                    <i className='fab fa-github' /> {this.props.title}
                </h2>
            </div>
        )
    }
}

export default Navbar
