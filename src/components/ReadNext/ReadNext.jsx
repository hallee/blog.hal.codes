import React from 'react';
import PropTypes from 'prop-types';
import PostBody from '../Post/PostBody';

import './ReadNext.scss';

const ReadNext = ({ nodes }) => (
  <>
    { nodes && (
      <section className="read-next">
        <h3>~</h3>
        { nodes.map(node => (
          <PostBody
            node={ node }
            titleLink={ node.slug }
            key={ node }
            preview
          />
        ))}
      </section>
    )}
  </>
);

ReadNext.defaultProps = {
  nodes: [],
};

ReadNext.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default ReadNext;
