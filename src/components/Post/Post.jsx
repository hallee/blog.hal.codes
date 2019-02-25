import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';
import PostBody from './PostBody';

const Post = ({ pageContext }) => {
  const { node } = pageContext;
  return (
    <Layout>
      <PostBody node={ node } />
    </Layout>
  );
};

Post.propTypes = {
  pageContext: PropTypes.shape({
    node: PropTypes.object.isRequired,
  }).isRequired,
};


export default Post;
