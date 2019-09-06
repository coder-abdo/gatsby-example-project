import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/template.module.css"
import Image from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import { Link } from "gatsby"
const tourTemplate = ({
  data: {
    tour: {
      name,
      price,
      country,
      days,
      description: { description },
      journey,
      slug,
      start,
      images,
    },
  },
}) => {
  // console.log(props)
  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {images.map((image, idx) => (
              <Image
                key={idx}
                fluid={image.fluid}
                alt={name}
                className={styles.image}
              />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from: ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starting on: {start}</h4>
          <h4>duration: {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <ul className={styles.journey}>
            {journey.map((item, idx) => (
              <li key={idx}>{item.day}</li>
            ))}
          </ul>
          <Link to="/tours">back to tours</Link>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String) {
    tour: contentfulName(slug: { eq: $slug }) {
      name
      price
      country
      days
      description {
        description
      }
      journey {
        day
        info
      }
      slug
      start(formatString: "dddd MMMM Do, YYYY")
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default tourTemplate
