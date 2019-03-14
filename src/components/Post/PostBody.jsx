import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Fragment from 'react-dom-fragment';
import './PostBody.scss';
import './code.css';

const PostBody = ({ node, titleLink, preview }) => {
  const title = titleLink ? <Link to={ `/${titleLink}` }>{ node.title }</Link> : node.title;
  const continueReading = preview ? <Link className="continue" to={ `/${node.slug}` }><span>Continue reading →</span></Link> : null;

  const published = new Date(node.meta.published);
  const dateString = published.toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric' });

  const html = { __html: node.body.html };
  const previewHTML = { __html: node.preview.html };
  return (
    <article>
      <span className="kicker">{ node.kicker }</span>
      <h2>
        { title }
      </h2>
      <span className="post-date">{ dateString }</span>
      { !preview ? (
        <Fragment dangerouslySetInnerHTML={ html } />
      ) : (
        <Fragment dangerouslySetInnerHTML={ previewHTML } />
      )}
      { continueReading }
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
