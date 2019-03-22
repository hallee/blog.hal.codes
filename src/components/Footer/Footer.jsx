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
      <li><a href="https://github.com/hallee">GitHub</a></li>
      <li><a href="https://github.com/hallee/blog.hal.codes">Source code</a></li>
    </ul>
    <ul>
      <li>
        <span
          className="emoji"
          role="img"
          aria-label="feeds"
        >
          📡
        </span>
      </li>
      <li><a href="/rss.xml">RSS</a></li>
      <li><a href="https://api.hal.codes/graphql?query=%7B%0A%20%20blogPosts%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20kicker%0A%20%20%20%20%20%20meta%20%7B%0A%20%20%20%20%20%20%20%20published%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20body%20%7B%0A%20%20%20%20%20%20%20%20markdown%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20slug%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D">GraphQL</a></li>
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
