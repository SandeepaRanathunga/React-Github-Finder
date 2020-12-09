import React, { Component } from 'react'
import UserItem from './UserItem';

class Users extends Component {
    state={
        users:[
            {
                id:1,
                name:'Mojombo',
                avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url:'https://github.com/mojombo'
            },
            {
                id:2,
                name:'Defunct',
                avatar_url:'https://avatars0.githubusercontent.com/u/2?v=4',
                html_url:'https://github.com/defunkt'
            },
            {
                id:3,
                name:'Pjhyett',
                avatar_url:'https://avatars0.githubusercontent.com/u/3?v=4',
                html_url:'https://github.com/pjhyett'
            },
           
        ]
    }
    render() {
        const {users}=this.state;
        return (
            <div style={userStyle}>
               {users.map((user)=>(
                   <UserItem user={user} key={user.id} />
                   
               ))}
            </div>
        )
    }
    
}
const userStyle={
     display:'flex',
     flexWrap:'wrap',
     justifyContent:'center'
}
export default Users
