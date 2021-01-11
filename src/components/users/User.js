import React, { Component, Fragment } from 'react';
import Spinner from '../layouts/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.props.getUser(params.login);
    this.props.getRepos(params.login);
  }
  render() {
    const { loading, repos } = this.props;
    const {
      name,
      avatar_url,
      location,
      bio,
      followers,
      following,
      twitter_username,
      html_url,
    } = this.props.user;

    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back
        </Link>
        <div style={profile}>
          <img
            src={avatar_url}
            alt='User'
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              margin: '10px',
            }}
          />
          <h2>{name}</h2>
          <h3>{bio}</h3>
          <h3>
            <i className='fas fa-map-marker-alt' style={{ color: 'red' }} />{' '}
            {location == null ? 'none' : location}
          </h3>
          <h3>
            <span>Followers : </span>
            {followers}
          </h3>
          <h3>
            <span>Following : </span>
            {following}
          </h3>
          <h3>
            <span>
              <i className='fab fa-twitter' style={{ color: '#00acee' }} />{' '}
            </span>
            {twitter_username}
          </h3>
          <a href={html_url} className='btn btn-dark my-1'>
            View GitHub Profile
          </a>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}
const profile = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

export default User;
