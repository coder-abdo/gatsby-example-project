import React from "react"
import Layout from "../components/Layout"
import Tours from "../components/Tours/Tours"
import { graphql } from "gatsby"
const tours = ({ data }) => {
  return (
    <Layout>
      <Tours tours={data.tours.edges} />
    </Layout>
  )
}
export const getTours = graphql`
  query {
    tours: allContentfulName {
      edges {
        node {
          id: contentful_id
          name
          price
          slug
          country
          featured
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
export default tours
