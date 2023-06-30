import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { BsArrowUpRight } from 'react-icons/bs'
import btcqrcode from '../data/btcqrcode.jpg'
import { depositCoins } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import axios from 'axios'

const Deposit = () => {
    const navigate = useNavigate()
    const {userData} = useStateContext()

    const [values, setValues] = useState({
        method: 'Bitcoin',
        amount: '',
        uuid: userData.uuid,
        type: 'deposit'
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.method !== '' && values.amount !== '') {
            axios.post('http://localhost:8080/deposit', values)
            .then(res => {
                navigate(-1)
            })
            .catch(err => console.log(err))
        }
    }

  return (
    <div className='p-6 mb-6'>
        <div className='flex items-center'>
            <AiOutlineClose size={30} className='cursor-pointer' onClick={()=> navigate(-1)} />
            <h3 className='uppercase font-bold mx-auto'>Deposit</h3>
        </div>
        <form action="" onSubmit={handleSubmit}>
            <div className='mt-10'>
                <label htmlFor="method"> <span className='font-bold'>Choose Method</span>
                    <select name="method" id="method" value={values.method} onChange={handleChange} className='block outline rounded-md mt-2 w-2/5'>
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
                </label>
            </div>

            <div className='mt-5'>
                <label htmlFor="amount"> <span className='font-bold'>Amount</span>
                    <input type="number" name="amount" id="amount" value={values.amount} onChange={handleChange} min='0' step='any' placeholder='0.00' className='pl-2 block h-8 rounded-lg outline mt-2' />
                </label>
            </div>

            <div>
                {depositCoins.filter(e => e.name === values.method).map((coin, index)=> (
                    <div className='mt-6' key={index}>
                        <h3 className='text-center'>{coin.name}</h3>
                        <div>
                            <img src={coin.qrcode} alt={coin.name} className='h-40 w-40 block mx-auto' />
                        </div>
                        <p className='text-gray-400'>Deposit Address</p>
                        <p className='mb-4'>{coin.address}</p>
                        <p className='text-sm text-gray-500'>Please deposit only {coin.name} on the {coin.network} Network. Your deposit will be reflected after 10 block confirmations.</p>
                    </div>
                ))}
            </div>

            <div className='mt-4'>
                <button type='submit' className='font-bold uppercase w-full bg-green-500 hover:bg-green-200 hover:outline cursor-pointer flex items-center rounded-md py-3 justify-center gap-2 text-white'><BsArrowUpRight /> <p>I've sent it</p> </button>
            </div>
        </form>
    </div>
  )
}

export default Deposit