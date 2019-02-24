import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../Layout/Layout';
import SEO from '../SEO/SEO';
import PostList from '../PostList/PostList';
import Pagination from '../Pagination/Pagination';

const IndexTemplate = ({ data, pageContext }) => {
  const {
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;

  const { nodes } = data.blog.blogPosts;
  // const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <Layout>
      <SEO keywords={ ['gatsby', 'application', 'react'] } />
      <PostList nodes={ nodes } />
      <Pagination
        currentPage={ currentPage }
        prevPagePath={ prevPagePath }
        nextPagePath={ nextPagePath }
        hasPrevPage={ hasPrevPage }
        hasNextPage={ hasNextPage }
      />
    </Layout>
  );
};

export const query = graphql`
 query BlogPostQuery($perPage: Int!, $currentPage: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    blog {
      blogPosts(per: $perPage, page: $currentPage) {
        nodes {
          title
          body
          slug
        }
      }
    }
  }
`;

IndexTemplate.propTypes = {
  data: PropTypes.shape(PropTypes.object).isRequired,
  pageContext: PropTypes.shape(PropTypes.object).isRequired,
};

export default IndexTemplate;
