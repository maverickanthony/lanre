import React from 'react'
import { BsThreeDots, BsCurrencyExchange, BsStarHalf } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { SingleCoin } from '../config/api'
import moment from 'moment'



import { CgProfile } from 'react-icons/cg'

import { AiOutlinePlus, AiOutlineArrowDown, AiOutlineIdcard, AiOutlineRight, AiOutlineDownload, AiOutlineUpload, AiOutlineLoading3Quarters, AiOutlineWallet } from 'react-icons/ai';
import { Dashbar } from '../components';
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useStateContext } from '../contexts/ContextProvider'
import { useNavigate } from 'react-router-dom'
import { RiExchangeDollarLine } from 'react-icons/ri'


const Dashboard = () => {

  

  const { getBalance, balanceArray, setBalanceArray, loggedIn, auth, coinData, verifyStatus, coinState, setCoinState, userData, coinsList, depositData, withdrawalData, allBalance, allWithdrawal, makeFirstSavings} = useStateContext()
  const navigate = useNavigate()
  const [displayCoin, setDisplayCoin] = useState(false)
  const [loading, setLoading] = useState(true)
  const refOne = useRef(null)
  


  useEffect(() => {

    document.addEventListener('click', handleClickOutside, true)


    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    }

  }, [displayCoin])

  const handleClickOutside = (e) => {
    if(refOne.current && !refOne.current.contains(e.target)) {
        setDisplayCoin(false)
    } else if (displayCoin) {
        setDisplayCoin(true)
    } else {
        setDisplayCoin(false)
    }
  }

  const fetchCoinData = (id, symbol) => {
    
    setCoinState({
      id: id,
      symbol: symbol
    })
    setDisplayCoin(true)
    setTimeout(()=> setLoading(false), 2000)
  }

  
  const getBtcBalance = () => {


    let balance = depositData.filter(item => item.amount )
    let withBalance = withdrawalData.filter(item => item.amount)
    let arrayBalance = balance.map(each => {
      return each.amount
    })
    let withdrawBalance = withBalance.map(each => {
      return each.amount
    })


    if (arrayBalance.length && withdrawBalance.length > 0) {
      let a =  arrayBalance.reduce((acc, curr)=> Number(acc) + Number(curr))
      let b =  withdrawBalance.reduce((acc, curr)=> Number(acc) + Number(curr))
      return (a - b).toFixed(3)
    } else if (arrayBalance.length > 0 && withdrawBalance.length == 0) {
      return arrayBalance.reduce((acc, curr)=> Number(acc) + Number(curr))
    } else {
      return 0.00
    }

  }

  const calculateInDollars = (id) => {
    let cid = id.charAt(0).toUpperCase() + id.slice(1)

    let arrayFir = coinsList.map(coin => {
      if(coin.id === id) {
        return coin.current_price
      }
    })


    let multiplierQ = arrayFir.reduce((acc, curr)=> {
      if (acc === undefined) acc = 0
      if (curr === undefined) curr = 0
      return acc + curr
    })
    
    let balance = allBalance.filter(item => item.method === cid)
    let withBalance = allWithdrawal.filter(item => item.method === cid)
    

    let arrayBalance = balance.map(each => {
      return each.amount
    })
     

    let withdrawBalance = withBalance.map(each => {
      return each.amount
    })

    if (arrayBalance.length && withdrawBalance.length > 0) {
      let a =  arrayBalance.reduce((acc, curr)=> Number(acc) + Number(curr))
      let b =  withdrawBalance.reduce((acc, curr)=> Number(acc) + Number(curr))
      return ((a - b).toFixed(3) * multiplierQ) + Number(makeFirstSavings())
    } else if (arrayBalance.length > 0 && withdrawBalance.length == 0) {
      let me = arrayBalance.reduce((acc, curr)=> Number(acc) + Number(curr))
      return (me * multiplierQ) + Number(makeFirstSavings())
    } else {
      return 0.00 + Number(makeFirstSavings())
    }
  }

  console.log(makeFirstSavings())


  const makeTotalValue = () => {
    const arrayBl = coinsList.map(coin => coin.id)
    let arrayBll = arrayBl.map(coin => {
      
      return calculateInDollars(coin)
    })
    if (arrayBll.length > 0) {
      return arrayBll.reduce((acc, curr)=> Number(acc) + Number(curr))
    } else {
      return 0.00
    }

  }



  console.log(auth)
  console.log(userData)
  

  return (
    <div className={`p-6 h-[93vh] overflow-scroll`}>
      
      <div className=' md:static'>
        {!displayCoin && <div className='flex justify-between'>
          <Link to={`/dashboard/accountsettings`}>
            <div className='p-2 flex gap-2 items-center'>
              <CgProfile size='30' />
              <p className='text-sm text-gray-500'>Profile</p>
            </div>
          </Link>
          <div>
            <p className='py-2 px-4 rounded-lg bg-gray-300 flex gap-2 items-center'><BsStarHalf /> <p>Newbie</p></p>
          </div>
        </div>}
        <div className={`border-b-1 mb-4 p-2 ${displayCoin && 'mt-11'}`}>
          <div className='flex gap-1'>
            <p className='text-sm text-gray-500'>Total value</p>
            <p className='text-blue-500 flex gap-1 items-center'><p>USD</p> <AiOutlineArrowDown /></p>
          </div>
          <p className='font-bold text-xl'>${makeTotalValue().toFixed(2)}</p>
          <p className='text-green-400 text-sm'>+0.2%</p>
        </div>
      </div>

      {!verifyStatus && <Link to={`/dashboard/verify`}>
        <div className='p-4 bg-blue-200 text-blue-500 flex justify-around items-center'>
          <AiOutlineIdcard />
          <p>Verify your identity to unlock platform basic functions</p>
          <AiOutlineRight />
        </div>
      </Link>}

      <div className='p-2 mt-4'>
        <div className='flex justify-between'>
          <p className='font-bold text-2xl'>Wallets</p>
          <button className='py-2 px-4 rounded-md bg-blue-200 text-blue-500 flex gap-2 items-center interact-button'><AiOutlinePlus /> <p>Add wallet</p></button>
        </div>
        <div>
          {coinsList.map(coin => (
            <div key={coin.id} onClick={() => fetchCoinData(coin.id, coin.symbol)} className='flex cursor-pointer justify-between my-3 items-center border-t-1 pt-2'>
              <div>
                  <img src={coin.image} alt="" className='w-7 h-7' />
              </div>
              <div className='mr-auto ml-4'>
                  <p className='font-bold uppercase'>{getBalance(coin.id)}<span className='text-gray-500'>&nbsp;{coin.symbol}</span></p>
                  <p className='text-gray-500 text-xs'>{allBalance ? (getBalance(coin.id) * coin.current_price).toFixed(3) : '0.00'} USD</p>
              </div>
              <div className='flex flex-col items-end'>
                  <p className='text-sm'>{coin.current_price.toFixed(4)}</p>
                  <p className='text-xs' style={{color: coin.price_change_percentage_24h > 0 ? "rgb(14,203,129)" : "red"}}>{coin.price_change_percentage_24h > 0 && '+'}{coin.price_change_percentage_24h.toFixed(2)}%</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={refOne} className={`h-[80vh] ${displayCoin ? 'fixed' : 'hidden'}  top-20 left-0 z-20 w-full p-6 bg-gray-100 shadow-lg`}>
            {displayCoin  && <div>
              <div className='flex justify-between my-3 items-center border-t-1 pt-2'>
                <div>
                    <img src={coinData.image.thumb} alt="" className='w-7 h-7' />
                </div>
                <div className='mr-auto ml-4'>
                    <p className='font-bold uppercase'>{depositData.length > 0 ? getBtcBalance(): '0.0'}<span className='text-gray-500'>&nbsp;{coinData.symbol}</span></p>
                    <p className='text-gray-500 text-xs'>{depositData.length > 0 ? (getBtcBalance() * coinData.market_data.current_price.usd).toFixed(4) : '0.00'} USD</p>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='text-sm'>{coinData.market_data.current_price.usd.toFixed(4)}</p>
                    <p className='text-xs' style={{color: coinData.market_data.price_change_percentage_24h > 0 ? "rgb(14,203,129)" : "red"}}>{coinData.market_data.price_change_percentage_24h > 0 && '+'}{coinData.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4 border-b-1 pb-4'>
                <Link to={`/dashboard/deposit`}>
                  <div className='flex items-center gap-2 px-4 py-1.5 rounded-md bg-blue-100 text-blue-500 justify-center'>
                    <AiOutlineDownload />
                    <p>Deposit</p>
                  </div>
                </Link>
                <Link to={`/dashboard/withdraw`} >
                  <div className='flex items-center gap-2 px-4 py-1.5 rounded-md bg-blue-100 text-blue-500 justify-center'>
                    <AiOutlineUpload />
                    <p>Withdraw</p>
                  </div>
                </Link>
                <Link to={`/dashboard/convert`}>
                  <div className='flex items-center gap-2 px-4 py-1.5 rounded-md bg-blue-100 text-blue-500 justify-center'>
                    <RiExchangeDollarLine />
                    <p>Convert</p>
                  </div>
                </Link>
                <button className='flex items-center gap-2 px-4 py-1.5 cursor-pointer rounded-md bg-blue-100 text-blue-500 justify-center interact-button'>
                  <AiOutlineWallet />
                  <p>Connect wallet</p>
                </button>
              </div>

              <div className='py-4 border-b-1 pb-4'>
                <p className='font-bold'>History</p>
              </div>

              {depositData.length > 0 ? 
                <div>
                  <table className='border w-4/5'>
                    <thead>
                      <tr className='border-b-1 bg-blue-200'>
                        <td className='text-gray-600 font-semibold p-2'>Currency</td>
                        <td className='text-gray-600 font-semibold p-2'>Amount</td>
                        <td className='text-gray-600 font-semibold p-2'>Date</td>
                        <td className='text-gray-600 font-semibold p-2'>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      {depositData.map((data, index)=> (
                          <tr key={index}>
                            <td className='p-2'>{data.method}</td>
                            <td className='p-2'>{data.amount}</td>
                            <td className='p-2'>{moment(data.date).format('YYYY-MM-DD')}</td>
                            <td className='p-2 text-gray-400 text-sm'>{data.type}</td>
                          </tr>
                      ))}
                    </tbody>
                  </table>
                </div> : 
                <div className='text-gray-500 h-48 flex items-center justify-center'>
                  <p>No deposits </p>
              </div>}

              {withdrawalData.length > 0 ? 
                <div className='mt-4'>
                  <table className='border w-4/5'>
                    <thead>
                      <tr className='border-b-1 bg-blue-200'>
                        <td className='text-gray-600 font-semibold p-2'>Currency</td>
                        <td className='text-gray-600 font-semibold p-2'>Amount</td>
                        <td className='text-gray-600 font-semibold p-2'>Date</td>
                        <td className='text-gray-600 font-semibold p-2'>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      {withdrawalData.map((data, index)=> (
                          <tr key={index}>
                            <td className='p-2'>{data.method}</td>
                            <td className='p-2'>{data.amount}</td>
                            <td className='p-2'>{moment(data.date).format('YYYY-MM-DD')}</td>
                            <td className='p-2 text-gray-400 text-sm'>{data.type}</td>
                          </tr>
                      ))}
                    </tbody>
                  </table>
                </div> : 
                <div className='text-gray-500 h-48 flex items-center justify-center'>
                  <p>No withdrawals to see</p>
              </div>}
            </div>}
        </div>
        
      </div>

      <Dashbar />

    </div>
  )
}

export default Dashboard