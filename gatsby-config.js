const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'blog.hal.codes',
    description: 'A blog, mostly about software development, usually iOS and Swift related',
    author: 'Hal Lee',
    siteUrl: 'https://blog.hal.codes',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'BlogPost',
        fieldName: 'blog',
        url: 'https://api.hal.codes/graphql',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets`,
        },
      },
    },
    // 'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['PlexSans:n4,i4', 'Iosevka:n4', 'BasierSquare:n7'],
          urls: ['fonts/fonts.css'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        trackingUrl: 'stats.hal.codes',
        siteId: 'WWOQF',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, blog } }) => (
              blog.blogPosts.nodes.map(node => (
                Object.assign({}, node.title, {
                  title: node.title,
                  date: new Date(),
                  url: path.join(site.siteMetadata.siteUrl, node.slug),
                  guid: path.join(site.siteMetadata.siteUrl, node.slug),
                  custom_elements: [{ 'content:encoded': node.body.html }],
                })
              ))
            ),
            query: `
              {
                blog {
                  blogPosts(per: 20) {
                    pageInfo {
                      size
                      total
                    }
                    nodes {
                      title
                      kicker
                      body {
                        html
                      }
                      slug
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'blog.hal.codes RSS feed',
          },
        ],
      },
    },
  ],
};
