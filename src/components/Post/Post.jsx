import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout/Layout';
import SEO from '../SEO/SEO';

const Post = ({ pageContext }) => {
  const { node } = pageContext;

  return (
    <Layout>
      <SEO keywords={ ['gatsby', 'application', 'react'] } />
      <h2>{ node.title }</h2>
      { node.body }
    </Layout>
  );
};

Post.propTypes = {
  pageContext: PropTypes.shape({
    node: PropTypes.object.isRequired,
  }).isRequired,
};


export default Post;
