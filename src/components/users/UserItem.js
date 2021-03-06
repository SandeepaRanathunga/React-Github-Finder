import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center' style={itemStyle}>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
        View Profile
      </Link>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
const itemStyle = {
  width: '300px',
  margin: '10px',
};

export default UserItem;
