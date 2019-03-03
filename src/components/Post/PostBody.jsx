import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import SEO from '../SEO/SEO';

const PostBody = ({ node, titleLink, preview }) => {
  const title = titleLink ? <Link to={ titleLink }>{ node.title }</Link> : node.title;
  const html = { __html: node.body.html };
  return (
    <article>
      <SEO keywords={ ['gatsby', 'application', 'react'] } />
      <span className="kicker">A smarter way to storyboard</span>
      <h2>
        { title }
      </h2>
      <span className="post-date">January 31, 2019</span>
      <div dangerouslySetInnerHTML={ html } />
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
