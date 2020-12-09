import React, { Component } from 'react'
class Navbar extends Component {
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
