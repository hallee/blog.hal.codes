module.exports = {
  siteMetadata: {
    title: 'blog.hal.codes',
    description: 'A blog, mostly about software development, usually iOS and Swift related',
    author: 'Hal Lee',
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
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
  ],
};
