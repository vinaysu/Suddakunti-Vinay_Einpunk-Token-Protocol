import React from 'react'
import styles from './Card_Top_About.module.css'

function Card_Top_About({image,title,description}) {
  return (
    <div className={styles.main}>
        <img width='200px' src={image}></img>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Card_Top_About