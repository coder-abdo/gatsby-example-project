/* eslint-diable */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import img from "../images/mountain01.jpeg"
import Image from "gatsby-image"
const Wrapper = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto;
  padding: 30px 0;
  article {
    padding: 10px 20px;
    border: 1px solid #333;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
`
const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "ocean01.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "desert1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} alt="ocean " className="basic" />
      </article>
      <article>
        <h3> fixed image / blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3> fluid image /svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

export default Images
