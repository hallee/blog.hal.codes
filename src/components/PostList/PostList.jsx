import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';


const PostList = ({ nodes }) => (
  <section>
    { nodes.map(node => (
      <div key={ node }>
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
};

export default PostList;
