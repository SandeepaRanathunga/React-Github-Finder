import React from 'react';
import RepoItems from './RepoItem';

const Repos = ({ repos }) => {
  const itemList = repos.map((repo) => <RepoItems repo={repo} key={repo.id} />);
  return (
    <div className='list'>
      <div className='banner'>Recent Repositories</div>
      <div>{itemList}</div>
    </div>
  );
};

export default Repos;
