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

        const schemaOrg = [
          {
            '@context': 'http://schema.org',
            '@type': 'Blog',
            url: data.site.siteMetadata.siteUrl,
            name: data.site.siteMetadata.title,
          },
        ];
        if (slug) {
          schemaOrg.push(
            {
              '@context': 'http://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  item: {
                    '@id': canonical,
                    name: title,
                    // image,
                  },
                },
              ],
            },
            {
              '@context': 'http://schema.org',
              '@type': 'BlogPosting',
              url: canonical,
              name: title,
              headline: title || data.site.siteMetadata.title,
              author: {
                '@type': 'Person',
                name: data.site.siteMetadata.author,
              },
              publisher: {
                '@type': 'Organization',
                name: 'hal.codes',
                logo: {
                  '@type': 'ImageObject',
                  width: 152,
                  height: 152,
                  url: `${data.site.siteMetadata.siteUrl}/favicon.png`,
                },
              },
              datePublished: date,
              dateModified: date,
              image: {
                // '@type': 'ImageObject',
                // url: image,
              },
              description: metaDescription,
            },
          );
        }
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
            <script type="application/ld+json">
              { JSON.stringify(schemaOrg) }
            </script>
            <link rel="shortcut icon" type="image/png" sizes="152x152" href="/favicon.png" />
            <link rel="apple-touch-icon-precomposed" href="/favicon.png" />
            <link rel="mask-icon" href="/favicon.svg" color="#5664EC" />
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
