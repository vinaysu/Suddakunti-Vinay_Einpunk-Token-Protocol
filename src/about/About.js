import React from 'react'
import Card_Top_About from './Card_Top_About'
import styles from './About.module.css'


function About() {

  const data = [
    {
      image: 'https://www.einpunk.finance/static/media/Dapps1-c-1.0562bc8a7796acbdc475.png',
      title: 'Dapps',
      description: 'The dev team will be looking into develop amazing use cases for Einpunk token and the Community e.g Einpunk Exchange'
    },
    {
      image: 'https://www.einpunk.finance/static/media/NFTs.c0f4047fd834392b9823.png',
      title: 'NFTs',
      description: 'We will be exploring the NTFs ecosystem, we will have a marketspace for Einpunk Community as well as the Einpunk Holders.'

    },
    {
      image: 'https://www.einpunk.finance/static/media/DeFI.5fd57e459d2643a3e70d.png',
      title: 'DeFi',
      description: 'Einpunk will be a token for our DeFi Protocol'
    },
    {
      image: 'https://www.einpunk.finance/static/media/Airdrops.045a2c2e6361a3b99984.png',
      title: 'Airdrop',
      description: 'We will be Airdropping some Einpunk token for the Community we will release some tasks needed to claim the Airdrop'

    }

  ]



  return (
    <div className={styles.main}>
      <h1>Einpunk Token Features</h1>
      <div className={styles.cards}>
        {
          data.map((ele) => <Card_Top_About image={ele.image} title={ele.title} description={ele.description} />)
        }


      </div>
      <div>
        <h1>Roadmap</h1>
        <p>Note: We are determined to follow through each project listed, within their given timeframes.</p>
      </div>

      <div>
        <div className={styles.left}>
          <div className={styles.card}>
            <h3>Phase 1</h3>
            <p>
              Einpunk Token Launch <span className={styles.done}>Done</span> <br/>

              500 holders <span className={styles.ongo}>Ongoing</span> <br/>

              2000 wallet Transactions <span className={styles.ongo}>Ongoing</span> <br/>

              Website Launch <span className={styles.done}>Done</span> <br/>

              Contract Auditing by solidity finance <br/>

              1000 organic telegram members <br/>

              Creation of Chinese community
            </p>


          </div>
          <div className={styles.card} style={{position:'relative', top:'80px'}}>
            <h3>Phase 2</h3>
            <p>
              CoinMarketCap & Coin gecko listing <br/>

              5000 telegram members<br/>

              2000 wallet Transactions<br/>

              2000 holders<br/>

              Listing on a centralised exchange
            </p>


          </div>

        </div>
        <div className={styles.right}>

        <div className={styles.card}>
          <h3>Phase 3</h3>
          <p>
            20,000 telegram members <br/>

            12,000 holders <br/>

            Large influencer marketing<br/>

            Project review<br/>

            Website redesign
          </p>

        </div>
        <div className={styles.card} style={{position:'relative', top:'80px'}}>
          <h3>Phase 4</h3>
          <p>
            70,000 holders<br/>

            100,000 telegram members<br/>

            Launch of Einpunk Market website<br/>

            Launch of Einpunk Dapp<br/>

            Increase marketing<br/>

            Partnership announcement<br/>

            Listing on more Major Top CEX
          </p>

        </div>
        </div>
      </div>
    </div>
  )
}

export default About