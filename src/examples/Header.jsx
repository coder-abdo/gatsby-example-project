import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
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
const Header = () => {
  const {
    site: {
      siteMetadata: { title, describition, author },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>author: {author}</h1>
      <h2>title: {title}</h2>
      <p>description: {describition}</p>
    </div>
  )
}

export default Header
