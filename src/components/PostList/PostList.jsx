import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import PostBody from '../Post/PostBody';

const PostList = ({ nodes }) => (
  <section>
    { nodes && (
      nodes.map(node => (
        <PostBody
          node={ node }
          titleLink={ node.slug }
          key={ node }
          preview
        />
      ))
    )}
    <Footer />
  </section>
);

PostList.defaultProps = {
  nodes: [],
};

PostList.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default PostList;
