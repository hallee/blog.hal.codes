import React from 'react';
import PropTypes from 'prop-types';

import PostBody from '../Post/PostBody';

const PostList = ({ nodes }) => (
  <section>
    { nodes.map(node => (
      <PostBody
        node={ node }
        titleLink={ node.slug }
        key={ node }
      />
    ))}
  </section>
);

PostList.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default PostList;
