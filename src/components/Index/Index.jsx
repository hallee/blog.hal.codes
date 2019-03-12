import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout/Layout';
import SEO from '../SEO/SEO';
import PostList from '../PostList/PostList';
import Pagination from '../Pagination/Pagination';

const IndexTemplate = ({ pageContext }) => {
  const {
    data,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;

  const nodes = data.blog.blogPosts ? data.blog.blogPosts.nodes : null;
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

IndexTemplate.propTypes = {
  pageContext: PropTypes.shape(PropTypes.object).isRequired,
};

export default IndexTemplate;
