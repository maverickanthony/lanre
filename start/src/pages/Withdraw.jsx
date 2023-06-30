import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose, AiOutlineLoading } from 'react-icons/ai'
import { useStateContext } from '../contexts/ContextProvider'
import { withdrawalCoins } from '../data/dummy'
import axios from 'axios'

const Withdraw = () => {
    const navigate = useNavigate()
    const {userData, depositData, withdrawalData, coinState, setCoinState} = useStateContext()

    const [values, setValues] = useState({
        method: 'Bitcoin',
        amount: '',
        address: '',
        network: '',
        uuid: userData.uuid,
        type: 'withdrawal'
    })
    const [withdrawalAmount, setWithdrawalAmount] = useState('')
    const [shouldWithdraw, setShouldWithdraw] = useState(false)
    const [withdrawalMessage, setWithdrawalMessage] = useState(false)


    const [networkFee, setNetworkFee] = useState('')

    useEffect(() => {
      let gait = withdrawalCoins.filter(e => e.name === values.method).map(coin => coin.network)
      let regait = gait[0].find(network => network.net === values.network)
      setNetworkFee(regait && regait.fee)

    }, [values.network])


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

    const [available, setAvailable] = useState( getBtcBalance() || '0')

    const canSubmit = [...Object.values(values)].every(Boolean)
    console.log(canSubmit)

    useEffect(() => {
      setTimeout(() => {
        getBtcBalance()
      }, 2000); 
    }, [coinState.id])

    useEffect(() => { 
        let theAmount = Number(values.amount) + Number(networkFee)
        const amount = available - theAmount
        const withdrawal = Number(values.amount) - Number(networkFee)
        setWithdrawalAmount(withdrawal)
      if (canSubmit && amount > 0 ) {
        setShouldWithdraw(true)
      } else {
          setShouldWithdraw(false)
      }
    }, [values])
    
    

  
    const handleMethodChange = (e) => {
        setCoinState({
            ...coinState,
            id: e.target.value
        })
        setValues({
            ...values,
            method: e.target.value
        })
    }
    console.log(coinState)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const withdrawValues = {
            uuid: values.uuid,
            method: values.method,
            amount: values.amount,
            network: values.network,
            type: values.type,
            address: values.address,
            txid: ''
        }
        if (withdrawValues.address !== '' && withdrawValues.amount !== '') {
            axios.post('http://localhost:8080/withdraw', withdrawValues)
            .then(res => {
                setWithdrawalMessage(true)
                setTimeout(()=> navigate(-1) , 2000)
            })
            .catch(err => console.log(err))
        }
    }
    
  return (
    <div className='p-6'>
        <div className='flex items-center'>
            <AiOutlineClose size={30} className='cursor-pointer' onClick={()=> navigate(-1)} />
            <h3 className='uppercase font-bold mx-auto'>Withdraw</h3>
        </div>
        <form action="" onSubmit={handleSubmit}>
            {!withdrawalMessage && <div>
                <div className='mt-10'>
                    <label htmlFor="method"> <span className='font-bold'>Choose Method</span>
                        <select name="method" id="method" value={values.method} onChange={handleMethodChange} className='block outline rounded-md mt-2 w-2/5'>
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
                    <label htmlFor="network"> <span className='font-bold'>Network</span>
                        <select name="network" id="network" value={values.network} onChange={handleChange} className='block w-1/2 outline mt-2 p-1 rounded-lg'>
                            <option className='text-gray-400'>Select... </option>
                            {withdrawalCoins.filter(e => e.name === values.method).map((coin, index)=> {
                                return coin.network.map(network => (
                                    <option key={network.net} id={network.fee} value={network.net}  className='flex items-center justify-between'>
                                        <div>
                                            <p>{network.net}</p>
                                        </div>
                                        <div>
                                            <p>Fee</p>
                                            <p>{network.fee}</p>
                                        </div>
                                    </option>
                                ))
                            })}
                        </select>
                    </label>
                </div>
                <div className='mt-5'>
                    <label htmlFor="amount"> <span className='font-bold'>Amount</span>
                        <input type="number" name="amount" id="amount" step='any' value={values.amount} onChange={handleChange} min='0' step='any' placeholder='0.00' className='pl-2 block h-8 rounded-lg outline mt-2' />
                    </label>
                    <p className='text-blue-500 text-sm mt-1'><span className='text-gray-400'>Available</span> {depositData.length > 0 ? getBtcBalance(): '0.0'} {values.method}</p>
                </div>
                <div className='mt-5'>
                    <label htmlFor="address"> <span className='font-bold'>Wallet Address</span>
                        <input type="text" name="address" id="address" value={values.address} onChange={handleChange} placeholder='3bgHUUy78hjGS8JMghhF66vbbV' className='pl-2 block h-8 rounded-lg outline mt-2 w-[80%]' />
                    </label>
                </div>
                <div className='mt-5 text-gray-400 flex flex-col gap-2'>
                    <p className='font-semibold'>Note</p>
                    <div className='flex justify-between'>
                        <p>24h withdrawal limit</p>
                        <p className='font-semibold text-gray-800'>1,000,000 USDT</p>
                    </div>
                    <p>Do not withdraw directly to a crowdfund or ICO. We will not credit your account with tokens from that sale.</p>
                </div>
                <div className='flex justify-between items-center mt-6 border-t-1 pt-2'>
                    <div>
                        <p className='text-gray-400'>Receive amount</p>
                        <p className='uppercase'><span className='font-bold text-xl'> {Number(withdrawalAmount).toFixed(4)}</span> {values.method}</p>
                        <p className='text-gray-400'>Network fee { networkFee}</p>
                    </div>
                    <div>
                        <button disabled={shouldWithdraw ? false : true} className='bg-blue-500 py-1.5 px-3 cursor-pointer disabled:bg-blue-200 disabled:cursor-not-allowed rounded-md text-white font-semibold'>Withdraw</button>
                    </div>
                </div>
            </div>}
            {withdrawalMessage && <div className='mt-4 flex flex-col gap-5 justify-center items-center h-full'>
                <p>Your withdrawal is been processed.</p>
                <AiOutlineLoading />
            </div>}
        </form>


    </div>
  )
}

export default Withdraw