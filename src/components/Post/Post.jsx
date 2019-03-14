import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';
import Footer from '../Footer/Footer';
import PostBody from './PostBody';
import SEO from '../SEO/SEO';

const Post = ({ pageContext }) => {
  const { node } = pageContext;
  return (
    <Layout>
      <SEO title={ node.title } />
      <section>
        <PostBody node={ node } />
      </section>
      <Footer
        readNext={ [node] }
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
