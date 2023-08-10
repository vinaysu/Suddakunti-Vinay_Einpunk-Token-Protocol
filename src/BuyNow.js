import React from 'react'
import Card_Buynow from './Card_Buynow'
import styles from './BuyNow.module.css'


function BuyNow() {
  return (
    <div className={styles.main} >
      <h3>ETH/EinpunkUSD</h3>
      <div className={styles.top}>
        <Card_Buynow image='https://www.einpunk.finance/static/media/uniswap.6afdda179c5890221056.png' title='Buy EinPunk Now' />
        <Card_Buynow image='https://www.einpunk.finance/static/media/pancakeswaplogo.3ab0ebeeb53899bd0476.png'
          title='Buy EinPunk Now' />
      </div>


      <div className={styles.bottom}>
        <div className={styles.box}>
          <h3>BUSD/EinpunkUSD</h3>
          <Card_Buynow image='https://www.einpunk.finance/static/media/pancakeswaplogo.3ab0ebeeb53899bd0476.png'
            title='Buy EinPunk Now' />

        </div>
        <div className={styles.box}>
          <h3>Cake/EinpunkUSD</h3>
          <Card_Buynow image='https://www.einpunk.finance/static/media/pancakeswaplogo.3ab0ebeeb53899bd0476.png'
            title='Buy EinPunk Now' />

        </div>
        <div className={styles.box}>
          <h3>Cake/EinpunkUSD</h3>
          <Card_Buynow image='https://www.einpunk.finance/static/media/pancakeswaplogo.3ab0ebeeb53899bd0476.png'
            title='Buy EinPunk Now' />

        </div>
        <div className={styles.box}>
          <h3>BNB/EinpunkUSD</h3>
          <Card_Buynow image='https://www.einpunk.finance/static/media/pancakeswaplogo.3ab0ebeeb53899bd0476.png'
            title='Buy EinPunk Now' />

        </div>


      </div>

    </div>
  )
}

export default BuyNow