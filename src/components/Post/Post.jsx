import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';
import Footer from '../Footer/Footer';
import PostBody from './PostBody';
import SEO from '../SEO/SEO';

const Post = ({ pageContext }) => {
  const { node, next } = pageContext;
  return (
    <Layout>
      <SEO title={ node.title } />
      <section>
        <PostBody node={ node } />
      </section>
      <Footer
        readNext={ next ? [next] : null }
      />
    </Layout>
  );
};

Post.propTypes = {
  pageContext: PropTypes.shape({
    node: PropTypes.object.isRequired,
  }).isRequired,
};


export default Post;
