import React from "react"
import Header from "../examples/Header"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const examples = ({
  data: {
    site: {
      siteMetadata: { title, author, description },
    },
  },
}) => {
  return (
    <Layout>
      <h1>examples page</h1>
      <Header />
    </Layout>
  )
}
export const getData = graphql`
  {
    site {
      siteMetadata {
        title
        describition
        author
      }
    }
  }
`
export default examples
