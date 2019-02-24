import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout/Layout';
import Image from '../Image/Image';
import SEO from '../SEO/SEO';
import Pagination from '../Pagination/Pagination';

const Post = ({ pageContext }) => {
  const { node } = pageContext;

  return (
    <Layout>
      <SEO keywords={ ['gatsby', 'application', 'react'] } />
      {/* <h1>{ pageTitle }</h1> */}
      <h2>{ node.title }</h2>
      <p>{ node.body }</p>
    </Layout>
  );
};

Post.propTypes = {
  pageContext: PropTypes.shape({
    node: PropTypes.object.isRequired,
  }).isRequired,
};


export default Post;
