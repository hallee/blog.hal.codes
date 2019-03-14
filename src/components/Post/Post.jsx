import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';
import PostBody from './PostBody';
import SEO from '../SEO/SEO';

const Post = ({ pageContext }) => {
  const { node, next } = pageContext;
  return (
    <Layout readNext={ next ? [next] : null }>
      <SEO title={ node.title } />
      <section>
        <PostBody node={ node } />
      </section>
    </Layout>
  );
};

Post.propTypes = {
  pageContext: PropTypes.shape({
    node: PropTypes.object.isRequired,
  }).isRequired,
};


export default Post;
