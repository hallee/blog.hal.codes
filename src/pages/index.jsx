import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const { title } = data.site.siteMetadata;
  const { nodes } = data.blog.blogPosts;
  return (
    <Layout>
      <SEO title="Home" keywords={ ['gatsby', 'application', 'react'] } />
      <h1>{ title }</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {nodes.map(node => (
        <div>
          <h2>{ node.title }</h2>
          <p>{ node.body }</p>
        </div>
      ))}
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
