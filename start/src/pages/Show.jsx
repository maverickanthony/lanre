import axios from 'axios'
import React from 'react';
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { HistoricalChart, SingleCoin } from '../config/api'
import { useStateContext } from '../contexts/ContextProvider'


import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BsArrowDownLeft, BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';





const Show = () => {

    const [coin, setCoin] = useState([])
    const [graphData, setGraphData] = useState([])
    const [coinData, setCoinData] = useState([])
    const [loading, setLoading] = useState(true)
    const [days, setDays] = useState('365')
    const [style, setStyle] = useState({})
    const {setNewHodler, setDirection, setCoinState} = useStateContext()
    
    
    const params = useParams()
    const navigate = useNavigate()

    const navigateToNewHodler = (direction)=> {
        navigate('/dashboard/hodlerpage/newhodler')
        setNewHodler(true)
        setDirection(direction)
        setCoinState({id:coinData.id, symbol:coinData.symbol})
    }

    const fetchCoin = async () => {
        const {data} = await axios.get(HistoricalChart(params.id, days, 'USD'))

        setCoin(data)
        
        const graphData = data.prices.map(price => {
            const [timestamp, p] = price
            const date = new Date(timestamp).toLocaleDateString('en-us')
            return {
                date: date,
                price: p,
              }
        })
        setGraphData(graphData)
    }

    const fetchCoinData = async () => {
        const { data } = await axios.get(SingleCoin(params.id))

        setCoinData(data)
        console.log(data)
    }

    useEffect(() => {
      fetchCoin()
      fetchCoinData()
      setTimeout(()=> setLoading(false), 4000)
    }, [days])

    const sliceMarketCap = (x) => {
        let digitStr = x.toString()

        if(digitStr.length <= 9) {
            return `0.${x.toString().slice(0, -8)}`
        }
        return x.toString().slice(0, -9)
    }

    const sliceSupply = (x) => {
        if (Number.isInteger(x)) {
            return x.toString().slice(0, -6)
        }
        const decimalStr = x.toString().split('.')[0].slice(0, -6)
        return decimalStr
        
    }


    const handleClick = (x, event) => {
        setDays(x)
        setStyle({
            backgroundColor: '#1E90FF',
            color: '#fff'
        })
        setTimeout(() => console.log(event.target.id), 3000)
    }

   
    if (loading) return <div className='mt-20 flex items-center justify-center text-center h-screen mx-auto gap-2'><span><AiOutlineLoading3Quarters /></span>Loading...</div>; 
    
  return (
    <div className='p-6'>
        <div>
            <div className='flex items-center justify-between'>
                <div>
                    <img src={coinData.image.thumb} />
                </div>
                <div className='mr-auto ml-3'>
                    <p className='font-bold text-lg'>{coinData.name}</p>
                    <p className='uppercase text-sm text-gray-400'>{coinData.symbol}/USDT</p>
                </div>
                <div className='flex flex-col items-end'>
                    <p>{coinData.market_data.current_price.usd} <span className='text-gray-500'>USDT</span></p>
                    <p className='text-sm text-gray-400'>{coinData.market_data.price_change_24h > 0 ? '+' : ''}<span>{(coinData.market_data.price_change_24h).toFixed(2)} USDT</span> <span className={`${coinData.market_data.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>{(coinData.market_data.price_change_percentage_24h).toFixed(2)}%</span></p>
                </div>
            </div>
            <div className='my-4 flex gap-3 justify-center'>
                <div onClick={()=> navigateToNewHodler('short')} className='py-3 px-5 rounded-lg bg-red-400 text-white w-2/6'>
                    <button className='font-semibold uppercase flex items-center gap-2 mx-auto'><BsArrowDownRight />Down</button>
                </div>
                <div onClick={()=> navigateToNewHodler('long')} className='py-3 px-5 rounded-lg bg-green-400 text-white w-2/6'>
                    <button className='font-semibold uppercase flex items-center gap-2 mx-auto'><BsArrowUpRight />Up</button>
                </div>
            </div>

            <div className='border-b-1 py-4'>
                <AreaChart
                    width={500}
                    height={400}
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
                    <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                <div className='flex gap-3 ml-4 text-blue-500'>
                    <p className='p-2 cursor-pointer' id='one' onClick={() => handleClick('1')}>1D</p>
                    <p className='p-2 cursor-pointer' id='7' onClick={()=> handleClick('7')}>7D</p>
                    <p className='p-2 cursor-pointer' id='30' onClick={()=> handleClick('30')}>30D</p>
                    <p className='p-2 cursor-pointer' id='60' onClick={()=> handleClick('60')}>60D</p>
                    <p className='p-2 cursor-pointer' id='365' onClick={()=> handleClick('365')}>1Y</p>
                    <p className='p-2 cursor-pointer' id='max' onClick={()=> handleClick('max')}>ALL</p>
                </div>
            </div>

            <div className='mt-6'>
                <p className='font-bold my-3'>Market Stats</p>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='border rounded-lg p-4'>
                        <p className='text-gray-500'>Market cap</p>
                        <p className='font-bold my-1'>{`$${sliceMarketCap(coinData.market_data.market_cap.usd)}`}Bn</p>
                        <p className='text-gray-400 text-sm flex items-center gap-1'>{coinData.market_data.market_cap_change_percentage_24h > 0 ? <span className='text-green-400'><BsArrowUpRight /></span> : <span className='text-red-400'><BsArrowDownLeft /></span>}{(coinData.market_data.market_cap_change_percentage_24h).toFixed(2)}% in past 24h</p>
                    </div>
                    <div className='border rounded-lg p-4'>
                        <p className='text-gray-500'>24h volume</p>
                        <p className='font-bold my-1'>{`$${sliceMarketCap(coinData.market_data.total_volume.usd)}`}Bn</p>
                        <p className='text-gray-400 text-sm'>Total 24h volume</p>
                    </div>
                    <div className='border rounded-lg p-4'>
                        <p className='text-gray-500'>Circulating supply</p>
                        <p className='font-bold my-1'>{`${sliceSupply(coinData.market_data.circulating_supply)}`}M</p>
                        <p className='text-gray-400 text-sm'>{(coinData.market_data.circulating_supply / coinData.market_data.total_supply * 100).toFixed(2)}% of total supply</p>
                    </div>
                    <div className='border rounded-lg p-4'>
                        <p className='text-gray-500'>Rank</p>
                        <p className='font-bold my-1'># {coinData.market_cap_rank}</p>
                        <p className='text-gray-400 text-sm'>By market cap</p>
                    </div>
                </div>
            </div>

            <div className='border-y-1 mt-8 py-4'>
                <p className='font-bold mb-4'>Perfomance</p>
                <div className='grid grid-cols-3 gap-2'>
                    <div style={{backgroundColor: coinData.market_data.price_change_percentage_24h > 0 ? '#90EE90' : '#FFC0CB ', color: coinData.market_data.price_change_percentage_24h > 0 ? 'green' : 'red'}} className='p-3 rounded-lg border text-center'>
                        <p className='text-gray-600'>24H</p>
                        <div className='font-semibold flex items-center gap-2 justify-center'>
                            {coinData.market_data.price_change_percentage_24h > 0 ? <BsArrowUpRight /> : <BsArrowDownLeft />}
                            {coinData.market_data.price_change_percentage_24h.toFixed(2)}%
                        </div>
                    </div>
                    <div style={{backgroundColor: coinData.market_data.price_change_percentage_7d > 0 ? '#90EE90' : '#FFC0CB ', color: coinData.market_data.price_change_percentage_7d > 0 ? 'green' : 'red'}} className='p-3 rounded-lg border text-center'>
                        <p className='text-gray-600'>7D</p>
                        <div className='font-semibold flex items-center gap-2 justify-center'>
                            {coinData.market_data.price_change_percentage_7d > 0 ? <BsArrowUpRight /> : <BsArrowDownLeft />}
                            {coinData.market_data.price_change_percentage_7d.toFixed(2)}%
                        </div>
                    </div>
                    <div style={{backgroundColor: coinData.market_data.price_change_percentage_14d > 0 ? '#90EE90' : '#FFC0CB ', color: coinData.market_data.price_change_percentage_14d > 0 ? 'green' : 'red'}} className='p-3 rounded-lg border text-center'>
                        <p className='text-gray-600'>14D</p>
                        <div className='font-semibold flex items-center gap-2 justify-center'>
                            {coinData.market_data.price_change_percentage_14d > 0 ? <BsArrowUpRight /> : <BsArrowDownLeft />}
                            {coinData.market_data.price_change_percentage_14d.toFixed(2)}%
                        </div>
                    </div>
                    <div style={{backgroundColor: coinData.market_data.price_change_percentage_30d > 0 ? '#90EE90' : '#FFC0CB ', color: coinData.market_data.price_change_percentage_30d > 0 ? 'green' : 'red'}} className='p-3 rounded-lg border text-center'>
                        <p className='text-gray-600'>30D</p>
                        <div className='font-semibold flex items-center gap-2 justify-center'>
                            {coinData.market_data.price_change_percentage_30d > 0 ? <BsArrowUpRight /> : <BsArrowDownLeft />}
                            {coinData.market_data.price_change_percentage_30d.toFixed(2)}%
                        </div>
                    </div>
                    <div style={{backgroundColor: coinData.market_data.price_change_percentage_60d > 0 ? '#90EE90' : '#FFC0CB ', color: coinData.market_data.price_change_percentage_60d > 0 ? 'green' : 'red'}} className='p-3 rounded-lg border text-center'>
                        <p className='text-gray-600'>60D</p>
                        <div className='font-semibold flex items-center gap-2 justify-center'>
                            {coinData.market_data.price_change_percentage_60d > 0 ? <BsArrowUpRight /> : <BsArrowDownLeft />}
                            {coinData.market_data.price_change_percentage_60d.toFixed(2)}%
                        </div>
                    </div>
                    <div style={{backgroundColor: coinData.market_data.price_change_percentage_1y > 0 ? '#90EE90' : '#FFC0CB ', color: coinData.market_data.price_change_percentage_1y > 0 ? 'green' : 'red'}} className='p-3 rounded-lg border text-center'>
                        <p className='text-gray-600'>1Y</p>
                        <div className='font-semibold flex items-center gap-2 justify-center'>
                            {coinData.market_data.price_change_percentage_1y > 0 ? <BsArrowUpRight /> : <BsArrowDownLeft />}
                            {coinData.market_data.price_change_percentage_1y.toFixed(2)}%
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-6'>
                <p className='font-bold'>About</p>
                <div className='mt-3 text-sm'>{coinData.description.en}</div>
            </div>
        </div>
    </div>
  )
}

export default Show