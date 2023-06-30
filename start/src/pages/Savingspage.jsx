import React, { useState, useRef, useEffect} from 'react'
import { AiFillProfile, AiOutlineRight, AiOutlinePlus, AiOutlineClose, AiFillQuestionCircle } from 'react-icons/ai'
import { Dashbar } from '../components'
import {  BsArrowUpRight, BsFillArrowDownLeftCircleFill, BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import axios from 'axios'
import moment from 'moment'
import { SingleCoin } from '../config/api'

const AllTrending = ({price, id, image, change, symbol}) => {

  let percentchange = change >= 0

  return (
      <Link to={`/dashboard/${id}`}>
          <div className='border rounded-md p-3'>
              <div className='flex items-center gap-2'>
                  <img src={image} alt={id} className='w-7 h-7 inline-block' />
                  <div>
                      <p className='uppercase text-xs'><strong>{symbol}</strong>/ USDT</p>
                      <p className='text-xs'>{price.toFixed(2)}</p>
                  </div>
              </div>
              <p className='font-bold text-lg flex items-center gap-1' style={{color: percentchange > 0 ? 'rgb(14,203,129)' : 'red'}}>{percentchange ? <BsFillArrowUpRightCircleFill/> : <BsFillArrowDownLeftCircleFill />}{percentchange > 0 ? '+' : ''}{change.toFixed(2)}%</p>
          </div>
      </Link>
  )
}

const AllInstruments = ({price, name, id, image, symbol, change}) => {

  let profit = change >= 0

  return (
      <Link target='_blank' to={`/dashboard/${id}`}>
        <div className='flex justify-between my-3 items-center'>
          <div>
              <img src={image} alt="" className='w-7 h-7' />
          </div>
          <div className='mr-auto ml-4'>
              <p className='font-bold uppercase'>{symbol}/USDT</p>
              <p className='text-gray-500 text-sm'>{name}</p>
          </div>
          <div className='flex flex-col items-end'>
              <p className='text-sm'>{price.toFixed(4)}</p>
              <p className='text-xs' style={{color: profit > 0 ? "rgb(14,203,129)" : "red"}}>{profit && '+'}{change}</p>
          </div>
        </div>
      </Link>
  )
}

const NewSavings = () => {

  const [howItWorks, setHowItWorks] = useState(false)
  const { setNewSavings, userData} = useStateContext()
  const [formData, setFormData] = useState({
    currency: 'usd',
    duration: '365',
    amount: ''

  })
  const [coinData, setCoinData] = useState([])
  const [totalReturn, setTotalReturn] = useState('0.00')
  const [percentageReturn, setPercentageReturn] = useState('0.09')

  const handleAmount = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleCurrency = (e) => {
    setFormData({
      ...formData,
      currency: e.target.value 
    })
  }
  
  const getPercentage = () => {
    if ( formData.currency === 'USD') {
      setPercentageReturn('0.07')
    }else if (formData.currency === 'USDT') {
      setPercentageReturn('0.07')
    } else {
      setPercentageReturn('0.09')
    }

    return percentageReturn
  }

  const fetchCoinData = async () => {
    const { data } = await axios.get(SingleCoin(formData.currency))

    setCoinData(data)
    console.log(data)
  }

  useEffect(()=> {
    fetchCoinData()
  }, [formData.currency])

  useEffect(() => {
    
    getPercentage()
    let digit 
    if (formData.duration === '365') {
      digit = percentageReturn * formData.amount
    } else if (formData.duration === '180') {
      digit = percentageReturn/2 * formData.amount
    } else if (formData.duration === '90') {
      digit = percentageReturn/4 * formData.amount
    } else if (formData.duration === '30') {
      digit = percentageReturn/12 * formData.amount
    }
    
    setTotalReturn(Number(formData.amount) + Number(digit))
    
  }, [formData.amount, formData.currency, formData.duration])
  console.log(percentageReturn)
  

  const handleClose = () => {
    setNewSavings(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const getAmountUsd = (amount) => {
      if(formData.currency !== 'USD' && formData.currency !== 'USDT') {
        let multiplier = coinData.market_data.current_price.usd
        return amount * multiplier
      }
    }

    const values = {
      uuid: userData.uuid,
      method: formData.currency,
      amount: formData.amount,
      amountusd: getAmountUsd(formData.amount),
      duration: formData.duration,
      totalreturn: totalReturn,
      status: 'open'
    }

    if(values.amount !== '' && values.amountusd !== '') {
      axios.post('http://localhost:8080/savings', values)
      .then(res => {
          window.location.reload()
          setNewSavings(false)
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <div className='mt-10 rounded-sm border-1 p-4'>
      <div className='flex items-center'>
        <div onClick={handleClose} className='text-blue-500 cursor-pointer'><AiOutlineClose /></div>
        <h2 className='font-bold uppercase mx-auto'>Create new</h2>
      </div>
      <div className='mt-4'>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="currency"> <span className='font-bold'>Amount</span>
            <div className='border-1 rounded-md flex p-2 mt-2'>
              <select name="currency" id="currency" value={formData.currency} onChange={handleCurrency} >
                <option value='usd'>USD</option>
                <option value='usdt'>USDT</option>
                <option value='ethereum'>ETH</option>
                <option value='bitcoin'>BTC</option>
                <option value='dogecoin'>DOGE</option>
                <option value='ripple'>XRP</option>
                <option value='binancecoin'>BNB</option>
                <option value='polkadot'>DOT</option>
                <option value='link' >LINK</option>
                <option value='solana'>SOL</option>
                <option value='matic'>MATIC</option>
                <option value='tron'>TRON</option>
                <option value='cardano'>ADA</option>
                <option value='uniswap'>DOT</option>
              </select>
              <input type="number" name="amount" id="amount" value={formData.amount} onChange={handleAmount} placeholder='0.00' className='w-4/5 text-right' min="0" step='any' />
            </div>
          </label>

          <div className='mt-4'>
            <label htmlFor="duration" className='font-bold'>Duration <span className='text-sm text-gray-400'>(days)</span></label>
            <div className='flex justify-around mt-3'>
              <label htmlFor="30" className='bg-blue-100 text-blue-500 rounded-md py-2 px-4 cursor-pointer font-semibold active:bg-blue-600 active:text-white' checked={formData.duration === '30'} onChange={handleAmount}><span>30</span>
                <input type="radio" name="duration" id="30" value='30' className='invisible' />
              </label>
              <label htmlFor="90" className='bg-blue-100 text-blue-500 rounded-md py-2 px-4 cursor-pointer font-semibold active:bg-blue-600 active:text-white' checked={formData.duration === '90'} onChange={handleAmount}><span>90</span>
                <input type="radio" name="duration" id="90" value='90' className='invisible' />
              </label>
              <label htmlFor="180" className='bg-blue-100 text-blue-500 rounded-md py-2 px-4 cursor-pointer font-semibold active:bg-blue-600 active:text-white' checked={formData.duration === '180'} onChange={handleAmount}><span>180</span>
                <input type="radio" name="duration" id="180" value='180' className='invisible' />
              </label>
              <label htmlFor="365" className='bg-blue-100 text-blue-500 rounded-md py-2 px-4 cursor-pointer font-semibold active:bg-blue-600 active:text-white' checked={formData.duration === '365'} onChange={handleAmount}><span>365</span>
                <input type="radio" name="duration" id="365" value='365' className='invisible' />
              </label>
            </div>
          </div>

          <div className='flex items-end flex-col mt-4 border-t-1 py-4'>
            <p className='text-gray-400'>Amount: <span className='text-black font-bold'>{formData.currency} {formData.amount ? formData.amount : '0.00'}</span></p>
            <p className='text-gray-400'>Duration: <span className='text-black font-bold'>{formData.duration}</span> days</p>
            <p className='text-gray-400'>Total Estimated Return: <span className='text-black font-bold'>{formData.currency} {Number(totalReturn).toFixed(3)}</span></p>
          </div>

          <div className='flex flex-col gap-4 border-t-1'>
            <div onClick={()=> setHowItWorks(!howItWorks)} className='text-blue-500 text-sm p-1 mt-2 flex items-center gap-2 font-semibold cursor-pointer'><div><AiFillQuestionCircle /></div> <p>How it works</p></div><span className={`text-sm p-2 bg-blue-100 rounded-md ${howItWorks ? 'block' : 'hidden'} text-gray-600`}>Savings lets you lock a certain amount for a fixed duration of time and earn accrued interest.</span>
            <p className='text-sm text-gray-500'>By clicking Start, you expressly agree to the terms for <a href="http://" target="_blank" className='text-blue-500' rel="noopener noreferrer">Savings Services</a> and <a href="http://" target="_blank" className='text-blue-500' rel="noopener noreferrer">Risk Disclosure</a></p>
            <div className={`mx-auto w-4/5 bg-green-600 text-white font-bold rounded-lg text-center py-2`}>
                <button className='flex items-center justify-center mx-auto gap-2'><BsArrowUpRight /> Start</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


const Savingspage = () => {

  const [allCoins, setAllCoins] = useState(true)
  const [portfolio, setPortfolio] = useState(false)
  const { newSavings, setNewSavings, trending, coinsList, setCoinsList, fetchCoinsList, savingsData, savingsInvest} = useStateContext()
  const refOne = useRef(null)
  const [accepted, setAccepted] = useState(false)
  const [acknowledged, setAcknowledged] = useState(false)
  const [toggleChecked, setToggleChecked] = useState(false)
  const [savingsBalance, setSavingsBalance] = useState(['0.00'])
  const [currentSavingsBalance, setCurrentSavingsBalance] = useState(['0.00'])

  const handlePortfolioToggle = () => {
    setAllCoins(false)
    setPortfolio(true)
  }

  const handleToggleCoins = () => {
    setAllCoins(true)
    setPortfolio(false)
  }

  const handleNewSavings = () => {
    setNewSavings(true)
  }

  const getCurrentSavings = () => {
    if(savingsData.length > 0) {
      const currentSavings = savingsData.map(item => {
        return item.amountusd
      })
      return currentSavings
    } else {
      return ['0.00']
    }
  }

  const getBeforeCurrentSavings = () => {
    if(savingsInvest.length > 0) {
      const currentSavings = savingsInvest.map(item => {
        return item.amountusd
      })
      return currentSavings
    } else {
      return ['0.00']
    }
  }

  useEffect(()=> {
    setSavingsBalance(getCurrentSavings())
    setCurrentSavingsBalance(getBeforeCurrentSavings())
  }, [])


  const makeSavings = () => {

    return savingsBalance.reduce((acc, curr)=> Number(acc) + Number(curr))
  }

  const makeCurrentSavings = () => {

    return currentSavingsBalance.reduce((acc, curr)=> Number(acc) + Number(curr))
  }


  useEffect(() => {

    document.addEventListener('click', handleClickOutside, true)


    return () => {
        document.removeEventListener('click', handleClickOutside, true);
    }

  }, [accepted])

  const handleClickOutside = (e) => {
    if(refOne.current && !refOne.current.contains(e.target)) {
        setAccepted(false)
    } else if (accepted) {
        setAccepted(true)
    } else {
        setAccepted(false)
    }
  }

  const handleAcknowledge = () => {
    setAcknowledged(true)
    setAccepted(false)
  }

  const handleDisclosure = () => {
    setAccepted(true)
  }


  const checkHandler = () => {
      setToggleChecked(!toggleChecked)
  }


  const ToggleSwitch = () => {

      return (
          <div>
              <label htmlFor="checkbox" className='switch'>
                  <input type="checkbox" name="" id="checkbox" checked={toggleChecked} onChange={checkHandler} />
                  <span className='slider round' />
              </label>
          </div>
      )
  }

  const trendingList = trending.map(coin => {
    return <AllTrending 
        key={coin.id}
        id={coin.id}
        price={coin.current_price}
        image={coin.image}
        symbol={coin.symbol}
        change={coin.price_change_percentage_24h}
    />
  })

  const allInstruments = coinsList.map(coin => {
    return <AllInstruments 
        key={coin.id}
        id={coin.id}
        market={coin.market_cap}
        price={coin.current_price}
        image={coin.image}
        symbol={coin.symbol}
        change={coin.price_change_percentage_24h}
        name={coin.name}
    />
  })



  return (
    <div className='p-6 h-[93vh] overflow-scroll'>
      <div className='flex justify-between'>
          <div>
              <div className='flex gap-2 items-center'>
                  <p className='text-gray-400'>Total Saved</p>
                  <div className='text-blue-500'>
                      <select name="" id="">
                          <option value="" selected>USD</option> 
                      </select>
                  </div>
              </div>
              <p className='font-bold text-2xl'>${makeSavings()}</p>
          </div>
          <div>
              <p className='text-gray-400'>Currently Saving</p>
              <p className='text-xl'>${makeCurrentSavings()}</p>
          </div>
      </div>

      {!acknowledged && <div onClick={handleDisclosure} className='mt-4 text-center cursor-pointer'>
        <p className='p-3 bg-blue-100 text-blue-400 flex items-center gap-3 justify-center'><AiFillProfile /><p>Disclosure for Savings. Please read and accept the terms before proceeding.</p> <AiOutlineRight /></p>
      </div>}

      {!newSavings && <Link to={`/dashboard/savingspage/newsavings`} onClick={handleNewSavings}>
            <div className='flex gap-3 cursor-pointer w-3/4 rounded-md bg-blue-100 text-blue-400 font-bold my-4 items-center justify-center mx-auto py-3 px-5'>
                <AiOutlinePlus />
                <p>Start new Savings</p>
            </div>
        </Link>
      }

      {newSavings && <div>
          <NewSavings />
        </div>
      }

      <div className='flex'>
        <div onClick={handleToggleCoins} style={{color: allCoins ? 'white' : '#60A5FA', backgroundColor: allCoins ? '#0000FF' : '#BBDEFB'}} className='py-2 px-4 font-bold text-center mx-auto bg-blue-100 text-blue-400 w-1/2 my-4 text-sm rounded-md cursor-pointer'>All Coins</div>
        <div onClick={handlePortfolioToggle} style={{color: portfolio ? 'white' : '#60A5FA', backgroundColor: portfolio ? '#0000FF' : '#BBDEFB'}} className='py-2 px-4 font-bold text-center mx-auto bg-blue-100 text-blue-400 w-1/2 my-4 text-sm rounded-md cursor-pointer'>Portfolio</div>
      </div>

      {allCoins && <div>
          <div className='mt-4'>
              <p className='font-bold my-3 text-lg'>Trending coins</p>
              <div className='flex w-full overflow-scroll gap-3'>{trendingList}</div>
          </div>

          <div className='mt-4'>
              <p className='font-bold my-3 text-lg'>All Savings Instruments</p>
              <div>{allInstruments}</div>
          </div>
        </div>
        }

      {!allCoins && <div className='mt-6'>
        <h2 className='font-bold text-lg'>Porfolio</h2>
        {savingsData ?
          <div className='w-full'>
            <table className='w-full mt-4 table-auto border-1 rounded-lg'>
                <tr className='border-b-1 bg-blue-200'>
                    <th className='p-2'>Date</th>
                    <th className='p-2'>Currency</th>
                    <th className='p-2'> Amount</th>
                    <th className='p-2'>Duration<span className='text-sm text-gray-500'>(d)</span></th>
                    <th className='p-2'>Return</th>
                </tr>
                {savingsData.map(each => (
                    <tr key={each.id} className='border-b-1 text-center hover:bg-blue-100'>
                        <td className='p-2'>{moment(each.date).format('YYYY-MM-DD')}</td>
                        <td className='p-2'>{each.method}</td>
                        <td className='p-2'>{Number(each.amount).toFixed(2)}<span className='text-gray-500 text-sm'> {each.method}</span></td>
                        <td className='p-2'>{each.duration}</td>
                        <td className='p-2'>{each.totalreturn}<span className='text-gray-500 text-sm'> {each.method}</span></td>
                    </tr>
                ))}
            </table>
            <div className='mt-4 text-gray-500'>
              <p>The total return is automatically deposited to the currency wallet after savings duration is complete.</p>
            </div>
          </div> :
        <p>You currently have no savings.</p>}
      </div>}

      {accepted && <div className='p-6 fixed bottom-0 z-20 rounded-lg bg-gray-100 text-gray-500 -mx-6' ref={refOne}>
          <h3 className='text-center font-bold text-xl text-black'>Disclosure</h3>
          <p className='font-semibold uppercase my-3 text-black'>Savings</p>
          <p className='text-sm mb-3'>You must read and accept the following terms before making use of these services.</p>
          <div className='flex items-center gap-3 pt-4 border-t-1'>
              <p className='text-sm'>I have read and fully understand the contents of these documents: <a className='text-blue-500'>Specific Terms for Lending Services</a>, <a className='text-blue-500'>Specific Terms for Conversion Services</a> and <a className='text-blue-500'>Complaints process</a></p>
              <ToggleSwitch />
          </div>
          <button onClick={handleAcknowledge} disabled={toggleChecked ? false : true} className={`my-4 block px-6 py-2 mx-auto bg-blue-500 hover:bg-blue-400 cursor-pointer text-white rounded-lg text-center ${toggleChecked ? 'block' : 'opacity-50 cursor-not-allowed'}`}>I have read and accept</button>
      </div>}


      <Dashbar />
    </div>
  )
}

export default Savingspage