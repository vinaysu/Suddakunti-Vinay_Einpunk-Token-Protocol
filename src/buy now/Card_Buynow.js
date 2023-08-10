import React from 'react'
import styles from './Card_Buynow.module.css'
import { Button } from '@mui/material'

function Card_Buynow({image,title}) {
  return (
    <div className={styles.main}>
        <img width='100px' src={image}></img>
        <Button sx={{ backgroundColor: 'blue', color: 'white', borderRadius: '10px', margin: ' 20px 0' }} variant='filled'>{title}</Button>
    </div>
  )
}

export default Card_Buynow