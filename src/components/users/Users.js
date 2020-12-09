import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';

const Users = ({users,loading})=> {
    if(loading){
        return <Spinner />
    }
    else{
        return (
            <div style={userStyle}>
               {users.map(user=>(
                   <UserItem user={user} key={user.id} />
                   
               ))}
            </div>
        )

    }
    
}

Users.propTypes={
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}
const userStyle={
     display:'flex',
     flexWrap:'wrap',
     justifyContent:'center' 
}

export default Users
