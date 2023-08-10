import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import { Button } from '@mui/material'

function navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img className={styles.image} width='60' src='https://www.yourlegalcareercoach.com/wp-content/uploads/2022/02/channels4_profile.jpg'></img>

      </div>
      <div className={styles.right}>
        <Link to='/' className={styles.link}  >Home</Link>
        <Link to='/about' className={styles.link}>About</Link>
        <Link to='/howtobuy' className={styles.link}>How to buy</Link>
        <Link to='/buynow' className={styles.link}>Buy Now</Link>
        <Button sx={{ color: 'aqua', fontWeight: 'bold', borderRadius: '20px', height: '40px' }} variant='outlined'> Connect Wallet</Button>



      </div>
    </div>
  )
}

export default navbar