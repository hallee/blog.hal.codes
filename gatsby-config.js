const url = require('url');

module.exports = {
  siteMetadata: {
    title: 'blog.hal.codes',
    description: 'A blog, mostly about software development, usually iOS and Swift related',
    author: 'Hal Lee',
    siteUrl: 'https://blog.hal.codes',
    imageUrl: 'https://blog.hal.codes/favicon.png',
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
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: '@import "resources.scss";',
        includePaths: [
          'src',
        ],
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
                imageUrl
                site_url: siteUrl
                image_url: imageUrl
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
                  date: node.meta.published,
                  url: url.resolve(site.siteMetadata.siteUrl, node.slug),
                  guid: url.resolve(site.siteMetadata.siteUrl, node.slug),
                  custom_elements: [{ 'content:encoded': node.body.html }],
                })
              ))
            ),
            query: `
              {
                blog {
                  blogPosts(per: 20) {
                    nodes {
                      title
                      kicker
                      body {
                        html
                      }
                      slug
                      meta {
                        published
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Hal Lee',
          },
        ],
      },
    },
  ],
};
