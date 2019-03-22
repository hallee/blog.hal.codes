import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../../assets/logo.svg';
import './Header.scss';

const Header = ({ siteTitle }) => (
  <header>
    <h1 style={ { margin: 0 } }>
      <Link to="/">
        <Logo alt={ siteTitle } />
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
