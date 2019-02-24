import React from 'react';
import PropTypes from 'prop-types';

const PostListPage = ({ nodes }) => (
  <section>
    { nodes.map(node => (
      <div>
        <h2>{ node.title }</h2>
        <p>{ node.body }</p>
      </div>
    ))}
  </section>
);

PostList.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default PostList;
