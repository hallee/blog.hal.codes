import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';

const NotFound = () => (
  <Layout>
    <section>
      <article>
        <h1 style={ { margin: 0, 'text-align': 'center' } }>404</h1>
        <p>
          Whatever you’re looking for doesn’t exist. Keep sniffing around! Or&nbsp;
          <Link to="/">
            go home →
          </Link>
        </p>
        <p><img src="https://s3.amazonaws.com/f.hal.codes/DSC04791-2.jpg" alt="" /></p>
      </article>
    </section>
  </Layout>
);

export default NotFound;
