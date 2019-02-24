import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';


const PostList = ({ nodes }) => (
  <section>
    { nodes.map(node => (
      <div>
        <h2>
          <Link to={ node.slug }>{ node.title }</Link>
        </h2>
        { node.body }
      </div>
    ))}
  </section>
);

PostList.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  pageInfo: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostList;
