import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { CgArrowsExchangeAltV } from 'react-icons/cg'
import { SingleCoin } from '../config/api'
import axios from 'axios'


const Convert = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        from: '',
        fromcurrency: 'Bitcoin',
        to: '',
        tocurrency: 'USD',
        fee: 0.5,
        rate: 0
    })
    const [coinData, setCoinData] = useState([])
    const [secondCoin, setSecondCoin] = useState([])

    const fetchCoinData = async () => {
        const {data} = await axios.get(SingleCoin(values.fromcurrency.toLowerCase()))
        setCoinData(data)
        console.log(coinData)
    }
    console.log(values.rate) 

    const fetchSecondCoin = async () => {
        const {data} = await axios.get(SingleCoin(values.tocurrency.toLowerCase()))
        setSecondCoin(data)
        
        console.log(secondCoin)
    }



    const makeRate = () => {
        if (values.from !== '') {
            const rateSl = [coinData.market_data.current_price.usd, secondCoin.market_data.current_price.usd]
            const rate = rateSl.reduce((acc, curr)=> {
                return acc / curr
            })
            return rate
        }
    }


    const makeFee = () => {
        const feeSl = 0.5/100 * values.from
        return feeSl
    }


    useEffect(() => {
      fetchCoinData()
      fetchSecondCoin()
        setValues(prev => ({
            ...prev,
            to: (values.from - values.fee) * values.rate,
            rate: makeRate(),
            fee: makeFee()
        }))
    }, [values.fromcurrency, values.tocurrency])
    

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
  return (
    <div className='p-6 mb-6'>
        <div className='flex items-center'>
            <AiOutlineClose size={30} className='cursor-pointer' onClick={()=> navigate(-1)} />
            <h3 className='uppercase font-bold mx-auto'>Convert</h3>
        </div>
        <form action="">
            <div className='mt-10'>
                <label htmlFor="fromcurrency"> <span className='font-bold'>From</span>
                    <div className='border-1 rounded-md flex p-2 mt-2'>
                        <select name="fromcurrency" id="fromcurrency" value={values.fromcurrency} onChange={handleChange} className='block outline rounded-md mt-2 w-1/5'>
                            <option value="Bitcoin">BTC</option>
                            <option value="Ethereum">ETH</option>
                            <option value="USD">USD</option>
                            <option value="USDT">USDT</option>
                            <option value="EUR">EUR</option>
                            <option value="Tron">TRX</option>
                            <option value="Binancecoin">BNB</option>
                            <option value="Solana">SOL</option>
                            <option value="Polkadot">DOT</option>
                            <option value="Dogecoin">DOGE</option>
                            <option value="Matic">MATIC</option>
                            <option value="USDC">USDC</option>
                            <option value="Ripple">XRP</option>
                        </select>
                        <input type="number" min='0' name="from" min='50' step='any' id="from" placeholder='0.00' className='w-4/5 text-right bg-inherit' value={values.from} onChange={handleChange} />
                    </div>
                </label>
                <div className='flex justify-center mt-6'>
                    <div className='p-1.5 bg-blue-100 rounded-[50%]'>
                        <CgArrowsExchangeAltV size={30} color='#3b82f6' />
                    </div>
                </div>
                <label htmlFor="tocurrency"> <span className='font-bold'>To (approx)</span>
                    <div className='border-1 rounded-md flex p-2 mt-2'>
                        <select name="tocurrency" id="tocurrency" value={values.tocurrency} onChange={handleChange} className='block outline rounded-md mt-2 w-1/5'>
                            <option value="Bitcoin">BTC</option>
                            <option value="Ethereum">ETH</option>
                            <option value="USD">USD</option>
                            <option value="USDT">USDT</option>
                            <option value="EUR">EUR</option>
                            <option value="Tron">TRX</option>
                            <option value="Binancecoin">BNB</option>
                            <option value="Solana">SOL</option>
                            <option value="Polkadot">DOT</option>
                            <option value="Dogecoin">DOGE</option>
                            <option value="Matic">MATIC</option>
                            <option value="USDC">USDC</option>
                            <option value="Ripple">XRP</option>
                        </select>
                        <input type="number" min='0' name="to" min='0' step='any' id="to" placeholder='0.00' className='w-4/5 text-right bg-inherit' value={Number(values.to).toFixed(3)} readOnly />
                    </div>
                </label>
                <div className='mt-6'>
                    <div className='flex items-baseline justify-between'>
                        <p>Initial</p>
                        <hr className='w-[75%] mx-1 border-dashed' />
                        <p><span className='font-bold'>{values.from}</span> <span className='text-gray-500'>{values.fromcurrency}</span></p>
                    </div>
                    <div className='flex items-baseline justify-between'>
                        <p>Fee</p>
                        <hr className='w-[80%] mx-1 border-dashed' />
                        <p><span className='font-bold'>{(values.fee).toFixed(3)}</span> <span className='text-gray-500'>{values.fromcurrency}</span></p>
                    </div>
                    <div className='flex items-baseline justify-between'>
                        <p>Amount to Convert</p>
                        <hr className='w-[60%] mx-1 border-dashed' />
                        <p><span className='font-bold'>{(values.from - values.fee).toFixed(3)}</span> <span className='text-gray-500'>{values.fromcurrency}</span></p>
                    </div>
                    <div className='flex items-baseline justify-between'>
                        <p>Rate</p>
                        <hr className='w-[60%] mx-1 border-dashed' />
                        <p><span>1 </span>{values.fromcurrency} = <span className='font-bold'>{values.from === '' ? 0 : Number(values.rate).toFixed(3) }</span> <span className='text-gray-500'>{values.tocurrency}</span></p>
                    </div>
                </div>
                <div className='text-gray-500 mt-6 text-[14px]'>
                    <p>By clicking Convert to USD, I expressly agree to the <span className='text-blue-500'>Terms of Service,</span><span className='text-blue-500'>Execution-only Mandate</span> and <span className='text-blue-500'>How Conversion Works</span>. Deposit the conversion amount into my WeHodler account domiciled with PAUMARK LTD.</p>
                    <button className='block w-full mt-6 bg-blue-500 hover:bg-blue-200 text-white font-bold rounded-md py-3 cursor-pointer'>Convert to USD</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Convert