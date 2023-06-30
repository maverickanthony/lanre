import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import {  SingleCoin } from '../config/api'
import { AiFillProfile, AiOutlinePlus, AiOutlineRight, AiOutlineClose, AiOutlineSetting, AiOutlineArrowDown, AiFillQuestionCircle } from 'react-icons/ai'
import { BsArrowDownRight, BsArrowUpRight, BsFillArrowDownLeftCircleFill, BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import { IoIosArrowDown } from 'react-icons/io'
import './Switch.css'
import { useStateContext } from '../contexts/ContextProvider'
import { Dashbar } from '../components'
import moment from 'moment'




const TopCap = ({price, market, id, image, symbol}) => {

    const sliceMarketCap = (x) => {
        return x.toString().slice(0, -9)
    }

    return (
        <Link to={`/dashboard/${id}`}>
            <div className='border rounded-md p-3 pr-6'>
                <div className='flex items-center gap-2'>
                    <img src={image} alt={id} className='w-7 h-7 inline-block' />
                    <div>
                        <p className='uppercase text-xs'><strong>{symbol}</strong>/ USDT</p>
                        <p className='text-xs'>{price.toFixed(2)}</p>
                    </div>
                </div>
                <p className='font-bold text-lg'>{`$${sliceMarketCap(market)}`}Bn</p>
            </div>
        </Link>
    )
}

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
    )
}

const AllCoin = ({price, id, image, symbol, change}) => {

    const {coinState, setCoinState, fetchCoin} = useStateContext()

    const handleClickCoin = (id, symbol) => {
        setCoinState({id, symbol})
        
        fetchCoin()
    }

    let profit = change >= 0

    return (
        <div>
            <div onClick={() => handleClickCoin(id, symbol)} className='flex items-center justify-between gap-1 cursor-pointer' >
                <div>
                    <img src={image} alt="" className='w-4 h-4' />
                </div>
                <p className='font-bold uppercase'>{symbol}/USDT</p>
                <p>{price.toFixed(3)}</p>
                <p className={`${profit ? 'text-green-400' : 'text-red-600'}`}>{profit && '+'}{change.toFixed(2)}</p>
            </div>
        </div>
    )
}

const NewHodler = () => {
    
    const [coinToggle, setCoinToggle] = useState(false)

    
    const [isChecked, setIsChecked] = useState(false)

    const [howItWorks, setHowItWorks] = useState(false)
    
    
    const {newHodler, userData, setNewHodler, coinData, setCoinData, direction, setDirection} = useStateContext()
    const [newHodlerForm, setNewHodlerForm] = useState({
        name: '',
        amount: 0,
        range: 20,
        tp: '',
        sl: '',
    })
    const [futuresCalc, setFuturesCalc] = useState({
        amount: '',
        leverage: newHodlerForm.range,
        direction: direction,
        tpProfit: 0.0,
        slprofit: 0.0,
        priceLevelTp: 0.03 * coinData.market_data.current_price.usd + coinData.market_data.current_price.usd,
        priceLevelSl: coinData.market_data.current_price.usd - (0.03 * coinData.market_data.current_price.usd)
    })
    
    console.log(futuresCalc.priceLevelTp)
    const {fetchCoin, fetchCoinsList, graphData, setGraphData, days, setDays, coinState, setCoinState, coinsList, setCoinsList} = useStateContext()


    const handleClick = (x) => {
        setDays(x)
    }

    const handleClose = () => {
        setNewHodler(false)
    }

    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    
    const handleDirection = (e) => {
        
        setDirection(e.target.value)
    }

    const handleAmount = (e) => {
        
        setNewHodlerForm({
            ...newHodlerForm,
            amount: e.target.value
        })
        setFuturesCalc({
            ...futuresCalc,
            amount: e.target.value
        })
        
    }

    const changeRange = (e) => {
        setNewHodlerForm({
            ...newHodlerForm,
            range: e.target.value
        })
        setFuturesCalc({
            ...futuresCalc,
            leverage: e.target.value
        })
    }


    const handleCalc = () => {
        let initialMargin = futuresCalc.amount

        let quantity = initialMargin * futuresCalc.leverage/ coinData.market_data.current_price.usd
        let pnl = (futuresCalc.priceLevelTp * quantity) - (quantity * coinData.market_data.current_price.usd) 
        let pnloss = (futuresCalc.priceLevelSl * quantity) - (quantity * coinData.market_data.current_price.usd) 
        
        if (futuresCalc.amount && futuresCalc.leverage) {
            setFuturesCalc({
                ...futuresCalc,
                tpProfit: pnl.toFixed(2),
                slprofit: pnloss.toFixed(2)
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const values = {
            uuid: userData.uuid,
            currency: coinState.symbol,
            mainid: coinState.id,
            amount: newHodlerForm.amount,
            price: coinData.market_data.current_price.usd,
            multiplier: newHodlerForm.range,
            takeprofit: futuresCalc.priceLevelTp,
            stoploss: futuresCalc.priceLevelSl,
            direction: direction,
            status: 'open',
            exitprice: '',
        }

        if(values.amount !== '') {
            axios.post('http://localhost:8080/hodler', values)
            .then(res => {
                window.location.reload()
                setNewHodler(false)
            })
            .catch(err => console.log(err))
        }
    }


    useEffect(()=> {
        fetchCoin()
        fetchCoinsList()
    },[coinState])

    useEffect(()=> {
        handleCalc()
    }, [newHodlerForm.amount, futuresCalc.priceLevelTp, futuresCalc.leverage, futuresCalc.priceLevelSl])

    const ToggleSwitch = () => {

        return (
            <div>
                <label htmlFor="checkbox" className='switch'>
                    <input type="checkbox" name="" id="checkbox" checked={isChecked} onChange={checkHandler} />
                    <span className='slider round' />
                </label>
            </div>
        )
    }

    const allCoins = coinsList.map(coin => {
        return <AllCoin 
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
        <div className='mt-20 rounded-sm border-1 p-4'>
            <form action="" onSubmit={handleSubmit} noValidate>
                <div className='flex justify-between items-center p-2'>
                    <div onClick={handleClose} className='text-blue-500 cursor-pointer'><AiOutlineClose /></div>
                    <div>
                        <div className='flex items-center gap-1'>
                            <p className='font-bold uppercase'>{coinState.symbol}/usdt</p>
                            <div><IoIosArrowDown onClick={()=> setCoinToggle(!coinToggle)} /></div>
                        </div>
                        {coinToggle && <div>{allCoins}</div>}
                    </div>
                    <div className='flex'>
                        <label htmlFor='short' className={`relative p-3 cursor-pointer ${direction === 'long' ? 'bg-red-100 text-red-600' : 'bg-red-600 text-white'} rounded-md`}>
                            <input className='w-full invisible' type="radio" name="direction" value='short' id="short" checked={direction === 'short'} onChange={handleDirection} /><span className='absolute left-3 top-4'><BsArrowDownRight /></span>
                        </label>
                        <label htmlFor='long' className={`relative p-3 cursor-pointer ${direction === 'long' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-600'} rounded-md`}>
                            <input className='w-full invisible' type="radio" name="direction" value='long' id="long" checked={direction === 'long'} onChange={handleDirection} /><span className='absolute left-2 top-4'><BsArrowUpRight /></span>
                        </label>
                    </div>
                </div>
                
                <div className='border-b-1 py-4'>
                    <ResponsiveContainer width='100%' height={350}>
                        <LineChart
                            width={500}
                            height={300}
                            data={graphData}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="price" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>

                    <div className='flex gap-3 ml-4 text-blue-500'>
                        <p className='p-2 cursor-pointer' id='one' onClick={() => handleClick('1')}>1D</p>
                        <p className='p-2 cursor-pointer' id='7' onClick={()=> handleClick('7')}>7D</p>
                        <p className='p-2 cursor-pointer' id='30' onClick={()=> handleClick('30')}>30D</p>
                        <p className='p-2 cursor-pointer' id='60' onClick={()=> handleClick('60')}>60D</p>
                        <p className='p-2 cursor-pointer' id='365' onClick={()=> handleClick('365')}>1Y</p>
                        <p className='p-2 cursor-pointer' id='max' onClick={()=> handleClick('max')}>ALL</p>
                    </div>
                </div>

                <div className='mt-4'>
                    <label htmlFor="amount"> <span className='font-bold'>Amount</span>
                        <div className='border-1 rounded-md flex p-2 mt-2'>
                            <p className='font-semi-bold ml-2 uppercase'>usd</p>
                            <input type="number" min='50' name="amount" min='50' step='any' id="amount" placeholder='0.00' className='w-4/5 text-right' value={newHodlerForm.amount} onChange={handleAmount} />
                        </div>
                    </label>
                    <div className='flex justify-around mt-3'>
                        <label htmlFor='100' className='bg-blue-100 text-blue-500 rounded-md py-2 px-4 cursor-pointer font-semibold active:bg-blue-600 active:text-white' checked={newHodlerForm.amount === '100'} onChange={handleAmount}><span>100</span>
                            <input type="radio" name="amount" value='100' id="100" className='invisible' />
                        </label>
                        <label htmlFor='200' className='bg-blue-100 text-blue-500 rounded-md py-2 px-4 cursor-pointer font-semibold active:bg-blue-600 active:text-white' checked={newHodlerForm.amount === '200'} onChange={handleAmount}><span>200</span>
                            <input type="radio" name="amount" value='200' id="200" className='invisible' />
                        </label>
                        <label htmlFor='500' className='bg-blue-100 text-blue-500 rounded-md py-2 px-4 cursor-pointer font-semibold active:bg-blue-600 active:text-white' checked={newHodlerForm.amount === '500'} onChange={handleAmount}><span>500</span>
                            <input type="radio" name="amount" value='500' id="500" className='invisible' />
                        </label>
                        <label htmlFor='1000' className='bg-blue-100 text-blue-500 rounded-md py-2 px-4 cursor-pointer font-semibold active:bg-blue-600 active:text-white' checked={newHodlerForm.amount === '1000'} onChange={handleAmount}><span>1000</span>
                            <input type="radio" name="amount" value='1000' id="1000" className='invisible' />
                        </label>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>Multiply</p>
                        <p className='bg-blue-100 text-blue-500 p-2 rounded-md text-sm font-bold'>x{newHodlerForm.range}</p>
                    </div>
                    <div className='w-full my-3'>
                        <input type="range" name="" id="multiply" min='1' max='50' value={newHodlerForm.range} className='w-full h-2 bg-blue-100 outline-none opacity-70 hover:opacity-100 transition-opacity delay-200' onChange={changeRange} />
                    </div>
                    <div className='flex justify-around'>
                        <label htmlFor="2" className='bg-blue-100 text-blue-500 rounded-md py-2 px-4 cursor-pointer active:bg-blue-600 active:text-white' checked={newHodlerForm.range === '2'} onChange={changeRange}>
                            <input type="radio" name="range" id="2" value='2' className='invisible' /><span className='font-semibold'>x2</span>
                        </label>
                        <label htmlFor="5" className='bg-blue-100 text-blue-500 rounded-md py-2 px-4 cursor-pointer active:bg-blue-600 active:text-white' checked={newHodlerForm.range === '5'} onChange={changeRange}>
                            <input type="radio" name="range" id="5" value='5' className='invisible' /><span className='font-semibold'>x5</span>
                        </label>
                        <label htmlFor="10" className='bg-blue-100 text-blue-500 rounded-md py-2 px-4 cursor-pointer active:bg-blue-600 active:text-white' checked={newHodlerForm.range === '10'} onChange={changeRange}>
                            <input type="radio" name="range" id="10" value='10' className='invisible' /><span className='font-semibold'>x10</span>
                        </label>
                        <label htmlFor="20" className='bg-blue-100 text-blue-500 rounded-md py-2 px-4 cursor-pointer active:bg-blue-600 active:text-white' checked={newHodlerForm.range === '20'} onChange={changeRange}>
                            <input type="radio" name="range" id="20" value='20' className='invisible' /><span className='font-semibold'>x20</span>
                        </label>
                        <label htmlFor="50" className='bg-blue-100 text-blue-500 rounded-md py-2 px-4 cursor-pointer active:bg-blue-600 active:text-white' checked={newHodlerForm.range === '50'} onChange={changeRange}>
                            <input type="radio" name="range" id="50" value='50' className='invisible' /><span className='font-semibold'>x50</span>
                        </label>
                    </div>
                </div>

                <div className='mt-8 border-t-1 pb-2'>
                    <div className='my-4'>
                        <div className='flex items-center justify-between gap-1'>
                            <AiOutlineSetting />
                            <p className='font-bold mr-auto'>Adjust TP & SL</p>
                            <ToggleSwitch />
                        </div>
                    </div>
                    {isChecked && <div>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold mb-2'>Take Profit</p>
                            <p className='p-1 rounded-md bg-green-100 text-green-600 font-bold'>+ {futuresCalc.tpProfit} <span className='font-normal'>USD</span></p>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-gray-400 text-sm mb-1'>Price level</p>
                                <input type="number" min={direction === 'long' ? 0.03 * Number(coinData.market_data.current_price.usd) + Number(coinData.market_data.current_price.usd) : 0.03 * Number(coinData.market_data.current_price.usd) - Number(coinData.market_data.current_price.usd)} max={direction === 'short' && 0.03 * Number(coinData.market_data.current_price.usd) - Number(coinData.market_data.current_price.usd)} placeholder='0.00' className='p-1 text-black ml-2' onChange={(e)=> setFuturesCalc({...futuresCalc, priceLevelTp: e.target.value})} />
                            </div>
                            <div>
                                <p className='text-gray-400 text-sm mb-1'>Distance</p>
                                <input type="number" placeholder={`${((futuresCalc.priceLevelTp - coinData.market_data.current_price.usd)/ coinData.market_data.current_price.usd * 100).toFixed(2)}%`} className='p-1 text-black ml-2' readOnly/>
                            </div>
                        </div>
                        
                        <div className='flex justify-between items-center'>
                            <p className='font-bold mb-2 mt-2'>Stop Loss</p>
                            <p className='p-1 rounded-md bg-red-100 text-red-700 font-bold'> {futuresCalc.slprofit} <span className='font-normal'>USD</span></p>
                        </div>
                        <div className='flex justify-between'> 
                            <div>
                                <p className='text-gray-400 text-sm mb-1'>Price level</p>
                                <input type="number" min={direction === 'long' ? 0.03 * Number(coinData.market_data.current_price.usd) - Number(coinData.market_data.current_price.usd) : 0.03 * Number(coinData.market_data.current_price.usd) + Number(coinData.market_data.current_price.usd)}  placeholder='0.00' className='p-1 text-black ml-2' onChange={(e)=> setFuturesCalc({...futuresCalc, priceLevelSl: e.target.value})} />
                            </div>
                            <div>
                                <p className='text-gray-400 text-sm mb-1'>Distance</p>
                                <input type="number" placeholder={`${((futuresCalc.priceLevelSl - coinData.market_data.current_price.usd)/ coinData.market_data.current_price.usd * 100).toFixed(2)}%`} className='p-1 text-black ml-2' readOnly/>
                            </div>
                        </div>
                        
                    </div>}
                </div>
                <div className='flex flex-col gap-4 border-t-1'>
                    <div onClick={()=> setHowItWorks(!howItWorks)} className='text-blue-500 text-sm p-1 mt-2 flex items-center gap-2 font-semibold cursor-pointer'><div><AiFillQuestionCircle /></div> <p>How it works</p></div><span className={`text-sm p-2 bg-blue-100 rounded-md ${howItWorks ? 'block' : 'hidden'} text-gray-600`}>Hodler lets you multiply your crypto by way of a leverage multiplier. You can benefit from the movement direction of crypto prices by increasing the multiplier.</span>
                    <p className='text-sm text-gray-500'>By clicking Start, you expressly agree to the terms for <a href="http://" target="_blank" className='text-blue-500' rel="noopener noreferrer">Hodling Services</a> and <a href="http://" target="_blank" className='text-blue-500' rel="noopener noreferrer">Risk Disclosure</a></p>
                    <div className={`mx-auto w-4/5 ${direction === 'long' ? 'bg-green-600' : 'bg-red-500'} text-white font-bold rounded-lg text-center py-2`}>
                        <button onSubmit={handleSubmit} className='flex items-center justify-center mx-auto gap-2'>{direction === 'long' ? <BsArrowUpRight /> : <BsArrowDownRight />} Start</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const Hodlerpage = () => {

    const [allCoins, setAllCoins] = useState(true)
    const [portfolio, setPortfolio] = useState(false)
    const [accepted, setAccepted] = useState(false)
    const [acknowledged, setAcknowledged] = useState(false)
    const [toggleChecked, setToggleChecked] = useState(false)
    const [extraRow, setExtraRow] = useState(false)
    const [uniqueHodlerData, setUniqueHodlerData] = useState([])
    const [coinPrice, setCoinPrice] = useState('')
    const [closeButton, setCloseButton] = useState(true)
    const [realizedPnl, setRealizedPnl] = useState('')
    const refOne = useRef(null)

    const { newHodler, setNewHodler, fetchTrendingCoins, trending, setTrending, coinsList, setCoinsList, fetchCoinsList, hodlerData, userData} = useStateContext()
    

    const handlePortfolioToggle = () => {
        setAllCoins(false)
        setPortfolio(true)
    }

    const handleToggleCoins = () => {
        setAllCoins(true)
        setPortfolio(false)
    }

    const handleAcknowledge = () => {
        setAcknowledged(true)
        setAccepted(false)
    }

    const handleDisclosure = () => {
        setAccepted(true)
    }

    const handleNewHodler = () => {
        setNewHodler(true)
    }
    

    const expandHodler = (id) => {
        axios.post('http://localhost:8080/uniquehodlerdata', {uuid: userData.uuid, id: id})
        .then(res => {
            setUniqueHodlerData(res.data)
        })
        .catch(err => console.log(err))
        setExtraRow(!extraRow)
    }

    const closeTrade = async (id, mainid) => {

        const { data } = await axios.get(SingleCoin(mainid))

        setCoinPrice(data.market_data.current_price.usd)
        
        
        await axios.put('http://localhost:8080/updatehodlerdata', {exitprice: coinPrice, status: 'close', id: id})
        .then(res => {
            if(res.data.updated) {
                setExtraRow(!extraRow)
                setCloseButton(false)
                window.location.reload()
            } else {
                alert("Please try again")
            }
            
        })
        .catch(err => console.log(err))
        
    }

    const handleClickOutside = (e) => {
        if(refOne.current && !refOne.current.contains(e.target)) {
            setAccepted(false)
        } else if (accepted) {
            setAccepted(true)
        } else {
            setAccepted(false)
        }
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

    useEffect(() => {

        document.addEventListener('click', handleClickOutside, true)


        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }

    }, [accepted])

    const list = coinsList.map(coin => {
        return <TopCap 
            key={coin.id}
            id={coin.id}
            market={coin.market_cap}
            price={coin.current_price}
            image={coin.image}
            symbol={coin.symbol}
        />
    })

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
                    <p className='text-gray-400'>Currently Hodling</p>
                    <div className='text-blue-500'>
                        <select name="" id="" defaultValue='usd'>
                            <option value="usd">USD</option>
                        </select>
                    </div>
                </div>
                <p className='font-bold text-2xl'>$0.0</p>
            </div>
            <div>
                <p className='text-gray-400'>Current profit</p>
                <p className='text-xl'>$0.0</p>
            </div>
        </div>

        {!acknowledged && <div onClick={handleDisclosure} className='mt-4 text-center cursor-pointer'>
            <p className='p-3 bg-blue-100 text-blue-400 flex items-center gap-3 justify-center'><AiFillProfile /><p>Disclosure for Hodler. Please read and accept the terms before proceeding.</p> <AiOutlineRight /></p>
        </div>}

        {!newHodler && <Link to={`/dashboard/hodlerpage/newhodler`} onClick={handleNewHodler}>
            <div className='flex gap-3 cursor-pointer w-3/4 rounded-md bg-blue-100 text-blue-400 font-bold my-4 items-center justify-center mx-auto py-3 px-5'>
                <AiOutlinePlus />
                <p>Start new Hodler</p>
            </div>
        </Link>
        }

        {newHodler && <div>
            <NewHodler />
        </div>
        }

        <div className='flex'>
            <div onClick={handleToggleCoins} style={{color: allCoins ? 'white' : '#60A5FA', backgroundColor: allCoins ? '#0000FF' : '#BBDEFB'}} className='py-2 px-4 font-bold text-center mx-auto bg-blue-100 text-blue-400 w-1/2 my-4 text-sm rounded-md cursor-pointer'>All Coins</div>
            <div onClick={handlePortfolioToggle} style={{color: portfolio ? 'white' : '#60A5FA', backgroundColor: portfolio ? '#0000FF' : '#BBDEFB'}} className='py-2 px-4 font-bold text-center mx-auto bg-blue-100 text-blue-400 w-1/2 my-4 text-sm rounded-md cursor-pointer'>Portfolio</div>
        </div>

        {allCoins && <div>
            <div className='mt-3'>
                <p className='font-bold my-3 text-lg'>Top capitalization</p>
                <div className='flex w-full overflow-scroll gap-3'>{list}</div>
            </div>

            <div className='mt-4'>
                <p className='font-bold my-3 text-lg'>Trending coins</p>
                <div className='flex w-full overflow-scroll gap-3'>{trendingList}</div>
            </div>

            <div className='mt-4'>
                <p className='font-bold my-3 text-lg'>All Hodler Instruments</p>
                <div>{allInstruments}</div>
            </div>
        </div>
        }

        {!allCoins && <div>
            <p className='font-bold text-lg my-3'>Portfolio</p>
            {hodlerData.length > 0 ? 
            <div className='w-full'>
                <table className='w-full mt-4 table-auto border-1 rounded-lg'>
                    <tr className='border-b-1 bg-blue-200'>
                        <th className='p-2'>Date</th>
                        <th className='p-2'>Leverage</th>
                        <th className='p-2'>Position</th>
                        <th className='p-2'>Direction</th>
                        <th className='p-2'>Status</th>
                    </tr>
                    {hodlerData.map(each => (
                        <tr key={each.id} onClick={() => expandHodler(each.id)} className='border-b-1 text-center hover:bg-blue-100 cursor-pointer'>
                            <td className='p-2'>{moment(each.date).format('YYYY-MM-DD')}</td>
                            <td className='p-2'><span className='text-gray-500'>x</span>{each.multiplier}</td>
                            <td className='p-2'>{(each.multiplier * each.amount / each.price).toFixed(3)}<span className='uppercase text-sm text-gray-500'>{each.currency}</span></td>
                            <td className='p-2'>{each.direction === 'long' ? <span className='block ml-[40%]'><BsArrowUpRight color='#22c55e' /></span> : <span className='block ml-[40%]'><BsArrowDownRight color='#ef4444' /></span>}</td>
                            <td className='p-2'>{each.status}</td>
                        </tr>
                    ))}
                </table>
                <div>
                    {extraRow && <div>
                        {uniqueHodlerData.map(data => (
                            <div key={data.id} className='bg-gray-200 mt-3 p-2 rounded-md'>
                                <div className='flex justify-between items-center'>
                                    <p className='uppercase font-bold text-lg'>{data.currency}usdt perp</p>
                                    <p className='text-gray-600'>{moment(data.date).format('YYYY-MM-DD')}</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className={`${data.direction === 'long' ? 'text-green-500' : 'text-red-600'}`}>{data.direction === 'long' ? 'Long/ Market' : 'Short/ Market'}</p>
                                    <p className='p-0.5 rounded-sm bg-green-800 text-green-400'>Filled</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-gray-400'>Amount(<span className='uppercase'>{data.currency}</span>)</p>
                                    <p>{(data.multiplier * data.amount / data.price).toFixed(3)}/{(data.multiplier * data.amount / data.price).toFixed(3)}</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-gray-400'>Price</p>
                                    <p>{data.price}</p>
                                </div>
                                {!closeButton && <div className='flex justify-between items-center'>
                                    <p className='text-gray-400'>Realized PNL</p>
                                    <p>{data.exitprice}</p>
                                </div>}

                                {closeButton && <div className='flex justify-between items-center'>
                                    <p className='text-gray-400'>Take profit</p>
                                    <p>{data.takeprofit}</p>
                                </div>}
                                {closeButton && <div className='flex justify-between items-center'>
                                    <p className='text-gray-400'>Stop loss</p>
                                    <p>{data.stoploss}</p>
                                </div>}
                                {closeButton && <div className='flex'>
                                    <button onClick={()=> closeTrade(data.id, data.mainid)} className='px-3 py-1.5 cursor-pointer bg-blue-500 hover:bg-blue-200 text-white font-bold rounded-lg ml-auto'>Close</button>
                                </div>}
                            </div>
                        ))}
                    </div>}
                </div>
            </div> :
            <div>
                <p>You currently have no Hodler</p>
            </div>}
        </div>
        }

        {accepted && <div className='p-6 fixed bottom-0 z-20 rounded-lg bg-gray-100 text-gray-500 -mx-6' ref={refOne}>
            <h3 className='text-center font-bold text-xl text-black'>Disclosure</h3>
            <p className='font-semibold uppercase my-3 text-black'>Hodler</p>
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

export default Hodlerpage