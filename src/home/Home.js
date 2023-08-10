import React,{useRef} from 'react'
import styles from './Home.module.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Button } from '@mui/material'

function Home() {

  function handleClick(){
    
    alert(`0x89a081999249407C1153e135A2Af7d323419A66A copied `)
  }

  const myref=useRef()

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1>
          The World's Fastest Growing <br />
          <span>Token</span> Protocol
        </h1>
        <p>
          <span> Einpunk Protocol </span>is a decentralized application platform designed to make apps usable on the web.
        </p>
        <p>
          The network runs on a Proof-of-Stake (POS) consensus mechanism called <br />
          Nightsade, which aims to offer scalability and stable fees.
        </p>
        <p>
          EinpunkUSD is the native utility token that is used for: <br />
          Fees for processing transaction and storing data <br />
          Running validator nodes on the network via staking EinpunkUSD token <br />
          Used for governance votes to determine how network resources are allocated

        </p>
        <p>
          Einpunk Token Contract Address
        </p>

        <div className={styles.copyIcon}>
          <p>0x89a081999249407C1153e135A2Af7d323419A66A</p>
          <ContentCopyIcon onClick={handleClick} className={styles.icon} ></ContentCopyIcon>

        </div>
        <Button sx={{ backgroundColor: 'blue', color: 'white', borderRadius: '10px', margin: ' 20px 0' }} variant='filled'>Join our Community</Button>


      </div>
      <div className={styles.right}>

        <img className={styles.image} src='https://www.einpunk.finance/static/media/einpunk%20illustration.c33bf5ae3022c0ace2f6.png'></img>

      </div>

    </div>

  )
}

export default Home