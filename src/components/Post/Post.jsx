import React from 'react';
import PropTypes from 'prop-types';
import { parse } from 'node-html-parser';
import Layout from '../Layout/Layout';
import PostBody from './PostBody';
import SEO from '../SEO/SEO';

const Post = ({ pageContext }) => {
  const { node, next } = pageContext;
  return (
    <Layout readNext={ next ? [next] : null }>
      <SEO
        title={ node.title }
        description={ parse(node.preview.html).structuredText }
        slug={ node.slug }
        type="article"
        date={ node.meta.published }
      />
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
