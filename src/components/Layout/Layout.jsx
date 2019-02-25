import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import 'normalize.css';
import './Layout.scss';
import Header from '../Header/Header';

const Layout = ({ children }) => (
  <StaticQuery
    query={ graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    ` }
    render={ data => (
      <>
        <div class="wrapper">
          <Header siteTitle={ data.site.siteMetadata.title } />
          <main>{children}</main>
          <footer />
        </div>
      </>
    ) }
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
