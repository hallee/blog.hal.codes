import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import PostList from '../components/PostList/PostList';

const IndexPage = ({ data }) => {
  const { title } = data.site.siteMetadata;
  const {
    nodes = null,
    pageInfo = null,
  } = data.blog.blogPosts;
  return (
    <Layout>
      <SEO keywords={ ['gatsby', 'application', 'react'] } />
      <h1>{ title }</h1>
      <PostList nodes={ nodes } pageInfo={ pageInfo } />
      <div style={ { maxWidth: '300px', marginBottom: '1.45rem' } }>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export const pageQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  blog {
    blogPosts(page: 1) {
      pageInfo {
        current
        total
      }
      nodes {
        title
        body
      }
    }
  }
}
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object.isRequired,
    blog: PropTypes.object.isRequired,
  }).isRequired,
};

export default IndexPage;
