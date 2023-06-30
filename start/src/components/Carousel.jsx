import React, {useState, useEffect} from 'react'
// import { makeStyles } from '@mui/system/style';
import axios from 'axios'
import { TrendingCoins } from '../config/api'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'


export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const Carousel = () => {
  const {trending} = useStateContext()
  

  const items = trending.map((coin)=> {

    let profit = coin.price_change_percentage_24h >= 0;

    return (
      <Link
        className='flex flex-col cursor-pointer uppercase items-center ml-2'
        to={`/${coin.id}`}
      >
        <img 
          src={coin.image}
          alt={coin.name}
          height="80"
          style={{marginBottom: 10}}
        />
            <span>
              {coin.symbol}
              &nbsp;
              <span style={{color: profit > 0 ? "rgb(14,203,129)" : "red", fontWeight: 500}}>{profit && '+'} {coin.price_change_percentage_24h.toFixed(2)}%</span>
            </span>
            <span style={{fontSize: 22, fontWeight: 500}}>
              {`$ ${numberWithCommas(coin.current_price.toFixed(2))}`}
            </span>
      </Link>
    )
  })

  const responsive = {
    0: {
      items: 2
    },
    512: {
      items: 4
    }
  }
  
  return (
    <div>
      <AliceCarousel 
        mouseTracking
        infinite
        autoPlayInterval={1000} 
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls 
        responsive={responsive}
        autoPlay
        items={items}    

      />
    </div>
  )
}

export default Carousel