const path = require('path');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      blog {
        blogPosts(per: 2) {
          pageInfo {
            size
            total
          }
        }
      }
    }
  `);

  const { size, total } = pages.data.blog.blogPosts.pageInfo;
  const pageCount = Math.max(total, 1);

  for (let i = 1; i <= pageCount; i += 1) {
    createPage({
      path: i === 1 ? '/' : `/page/${i}`,
      component: path.resolve('./src/components/Index/Index.jsx'),
      context: {
        currentPage: i,
        perPage: size,
        prevPagePath: i <= 2 ? '/' : `/page/${i - 1}`,
        nextPagePath: `/page/${i + 1}`,
        hasPrevPage: i !== 1,
        hasNextPage: i < total,
      },
    });
  }

  const postSlugs = await graphql(`
    {
      blog {
        blogPosts {
          nodes {
            title
            body {
              html
            }
            slug
          }
        }
      }
    }
  `);

  const { nodes } = postSlugs.data.blog.blogPosts;

  nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: path.resolve('./src/components/Post/Post.jsx'),
      context: {
        node,
      },
    });
  });
};


module.exports = createPages;
