import React from "react"
import Tour from "./Tour"
import Styles from "../../css/items.module.css"
const Tours = ({ tours }) => {
  return (
    <section className={Styles.tours}>
      <h2>our tours</h2>
      <div className={Styles.center}>
        {tours.map(({ node }) => (
          <Tour key={node.id} tour={node} />
        ))}
      </div>
    </section>
  )
}

export default Tours
