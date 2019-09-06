import React from "react"
import { FaMap } from "react-icons/fa"
import { Link } from "gatsby"
import styles from "../../css/tour.module.css"
import Image from "gatsby-image"
import propTypes from "prop-types"
const Tour = ({ tour: { name, id, country, price, days, images, slug } }) => {
  return (
    <article>
      <div className={styles.imgContainer}>
        <Image fluid={images[0].fluid} alt={name} />
        <Link className={styles.link} to={`/tours/${slug}`}>
          details
        </Link>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}
Tour.propTypes = {
  tour: propTypes.shape({
    name: propTypes.string.isRequired,
    country: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    days: propTypes.number.isRequired,
    images: propTypes.arrayOf(propTypes.object),
  }),
}
export default Tour
