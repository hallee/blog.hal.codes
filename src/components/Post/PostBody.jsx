import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import SEO from '../SEO/SEO';

const PostBody = ({ node, titleLink, preview }) => {
  const title = titleLink ? <Link to={ titleLink }>{ node.title }</Link> : node.title;

  return (
    <article>
      <SEO keywords={ ['gatsby', 'application', 'react'] } />
      <h2>
        { title } and more
      </h2>
      <p>{ node.body }</p>
      <img src="https://static1.squarespace.com/static/50271a61c4aab6c54f9af5ee/t/568e06910e4c1157fa0d1127/1452148376624/?format=2500w" />
      <p>{ node.body }</p>
    </article>
  );
};

PostBody.defaultProps = {
  titleLink: null,
  preview: false,
};

PostBody.propTypes = {
  node: PropTypes.shape(PropTypes.object.isRequred).isRequired,
  titleLink: PropTypes.string,
  preview: PropTypes.bool,
};


export default PostBody;
