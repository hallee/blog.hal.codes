import React from 'react';
import PropTypes from 'prop-types';
import ReadNext from '../ReadNext/ReadNext';
import './Footer.scss';

const Footer = ({ readNext }) => (
  <footer>
    <ReadNext nodes={ readNext } />
    <ul>
      <li>
        <span
          className="emoji"
          role="img"
          aria-label="wave"
        >
          👋
        </span>
      </li>
      <li><a href="https://twitter.com/hal_lee">Twitter</a></li>
      <li><a href="https://github.com/hallee">Github</a></li>
    </ul>
  </footer>
);

Footer.defaultProps = {
  readNext: null,
};

Footer.propTypes = {
  readNext: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default Footer;
