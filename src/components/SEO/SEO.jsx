import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;

function SEO({
  description, lang, meta, keywords, title, slug, type, date,
}) {
  return (
    <StaticQuery
      query={ detailsQuery }
      render={ (data) => {
        const metaDescription = description || data.site.siteMetadata.description;
        const canonical = slug ? `${data.site.siteMetadata.siteUrl}/${slug}` : data.site.siteMetadata.siteUrl;
        const dateMeta = date ? {
          property: 'article:published_time',
          content: date,
        } : {};
        return (
          <Helmet
            htmlAttributes={ {
              lang,
            } }
            title={ title }
            titleTemplate={ `%s · ${data.site.siteMetadata.title}` }
            defaultTitle={ `${data.site.siteMetadata.title}: ${data.site.siteMetadata.description}` }
            meta={ [
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: title || data.site.siteMetadata.title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: type,
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: title || data.site.siteMetadata.title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
              {
                name: 'twitter:url',
                content: canonical,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', '),
                  }
                  : [],
              )
              .concat(meta)
              .concat(dateMeta) }
          >
            <link rel="icon" sizes="152x152" href="/favicon.png" />
            <link rel="canonical" href={ canonical } />
          </Helmet>
        );
      } }
    />
  );
}

SEO.defaultProps = {
  title: '',
  lang: 'en',
  description: '',
  meta: [],
  keywords: [],
  type: 'website',
  slug: null,
  date: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  type: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.string,
};

export default SEO;
