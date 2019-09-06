const path = require("path")
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const {
    data: {
      tours: { edges },
    },
  } = await graphql(`
    {
      tours: allContentfulName {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `tours/${slug}`,
      component: path.resolve("./src/templates/tour-template.jsx"),
      context: {
        slug,
      },
    })
  })
}
