import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../../assets/logo.svg';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1 style={ { margin: 0 } }>
        <Link to="/">
          <Logo alt={ siteTitle } />
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
