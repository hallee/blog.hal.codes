import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import SEO from '../SEO/SEO';

const PostBody = ({ node, titleLink }) => {
  const title = titleLink ? <Link to={ titleLink }>{ node.title }</Link> : node.title;

  return (
    <article>
      <SEO keywords={ ['gatsby', 'application', 'react'] } />
      <h2>
        { title }
      </h2>
      <p>{ node.body }</p>
    </article>
  );
};

PostBody.defaultProps = {
  titleLink: null,
};

PostBody.propTypes = {
  node: PropTypes.shape(PropTypes.object.isRequred).isRequired,
  titleLink: PropTypes.string,
};


export default PostBody;
