import React from "react"
import Navbar from "./Navbar"
import "../sass/layout.scss"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
