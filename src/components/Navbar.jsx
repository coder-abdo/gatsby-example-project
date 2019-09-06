import React from "react"
import { Link } from "gatsby"
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/examples">Examples</Link>
      <Link to="/images">Images</Link>
      <Link to="/tours">Tours</Link>
    </nav>
  )
}

export default Navbar
