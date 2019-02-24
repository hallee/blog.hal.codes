import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Pagination = ({
  currentPage,
  prevPagePath,
  nextPagePath,
  hasPrevPage,
  hasNextPage,
}) => (
  <section>
    <div>
      { hasPrevPage && (
        <Link
          rel="prev"
          to={ prevPagePath }
        >
          Previous
        </Link>
      )}
    </div>
    <div>
      { hasNextPage && (
        <Link
          rel="next"
          to={ nextPagePath }
        >
          Next
        </Link>
      )}
    </div>
  </section>
);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  prevPagePath: PropTypes.string.isRequired,
  nextPagePath: PropTypes.string.isRequired,
  hasPrevPage: PropTypes.bool.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
};

export default Pagination;
