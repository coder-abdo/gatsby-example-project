import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
const Title = styled.h1`
  font-size: 22px;
  font-family: "verdana", sans-serif;
  color: #4219f3;
`
const ErrorPage = () => {
  return (
    <Layout>
      <Title>oops! this is not what you looking for</Title>
    </Layout>
  )
}

export default ErrorPage
