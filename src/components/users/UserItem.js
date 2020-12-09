import React, { Component } from 'react'

class UserItem extends Component {
    render() {
        const {name,avatar_url,html_url} = this.props.user;
        return (
            <div className='card text-center' style={itemStyle}>
                <img src={avatar_url} alt="" className='round-img' style={{width:'60px'}}/>
                <h3>{name}</h3>
                <a href={html_url} className='btn btn-dark btn-sm my-1'>View Profile</a>
            </div>
        )
    }
}
const itemStyle={
    width:'300px',
    margin:'10px'
}

export default UserItem
