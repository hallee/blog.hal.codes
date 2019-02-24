const path = require('path');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      blog {
        blogPosts(per: 1) {
          pageInfo {
            size
            total
          }
        }
      }
    }
  `);

  const { size, total } = result.data.blog.blogPosts.pageInfo;

  for (let i = 0; i < total; i += 1) {
    createPage({
      path: i === 0 ? '/' : `/page/${i}`,
      component: path.resolve('./src/templates/index-template.js'),
      context: {
        currentPage: i,
        perPage: size,
        prevPagePath: i <= 1 ? '/' : `/page/${i - 1}`,
        nextPagePath: `/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== total - 1,
      },
    });
  }
};


module.exports = createPages;
