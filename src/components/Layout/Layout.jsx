import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import 'normalize.css';
import './Layout.scss';

const Layout = ({ children, readNext }) => (
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
        <Header siteTitle={ data.site.siteMetadata.title } />
        <main>{children}</main>
        <Footer readNext={ readNext } />
      </>
    ) }
  />
);

Layout.defaultProps = {
  readNext: null,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  readNext: PropTypes.arrayOf(PropTypes.object.isRequred),
};

export default Layout;
