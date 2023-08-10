import React from 'react'
import styles from './HowToBuy.module.css'

function HowToBuy() {
  return (
    <div className={styles.main}>
      
        <h1>How to Buy</h1>
        <ol className={styles.list}>
          <li>Go to the Apple or Play store and download Trust Wallet or MetaMask.</li>
          <li>Purchase ETH via the app, or deposit to your address.</li>
          <li>Go to the DApps tab at the bottom and find PancakeSwap. iPhone<br/>
            users will have to enable the browser within TrustWallet<br/>
            by typing trust://browser_enable within Safari.</li>
          <li>On Pancake Swap, in the "From" slot select ETH depending on<br/>
            which one you bought. In the bottom slot tap "Select currency"<br/>
            to search, and then paste in the contact address on this page</li>
          <li>Click the icon with the dials at the top left, then set the<br/>
            slippage tolerance to 11-12%, and close that interface once
            done.</li>
          <li>Put the amount of ETH you wish to spend in the "From" box, and<br/>
            press the "Swap" button.</li>
          <li>Click the swap button & confirm the transaction …<br/>
            Congratulations you now own Einpunk Token!</li>

        </ol>
     
    </div>
  )
}

export default HowToBuy