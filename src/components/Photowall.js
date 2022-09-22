import React from 'react';
import Photo from './Photo';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function photowall(props) {
  return (
    <div>
      <Link to={'/AddPhoto'} className='addIcon'> </Link>
      <div className='photoGrid'>
        {props.posts.sort((x,y)=>y.id-x.id).map((post) => (
          <Photo key={post.id} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  );
}

photowall.propTypes = {
  posts: propTypes.array.isRequired,
  onRemovePhoto: propTypes.func.isRequired,
};
