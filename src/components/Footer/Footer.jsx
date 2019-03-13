import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer>
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

export default Footer;
