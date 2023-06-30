import React, { useState, useEffect, useRef} from 'react'
import { AiFillProfile, AiOutlineLeft, AiOutlineRight, AiOutlinePlus } from 'react-icons/ai'
import { Dashbar } from '../components'
import { useStateContext } from '../contexts/ContextProvider'
import { SingleCoin } from '../config/api'
import axios from 'axios'
import moment from 'moment'


const Loanspage = () => {

    const [isChecked, setIsChecked] = useState('90')
    const [newLoan, setNewLoan] = useState(false)
    const [btcprice, setBtcprice] = useState('')
    const [colatamount, setColatamount] = useState('')
    const [loanAmount, setLoanAmount] = useState('')
    const [accepted, setAccepted] = useState(false)
    const [acknowledged, setAcknowledged] = useState(false)
    const refOne = useRef(null)
    
    const [percentpd, setPercentpd] = useState('5')
    const { coinState, setCoinState, coinData, setCoinData, userData, loanData } = useStateContext()
   
    const [ppd, setPpd] = useState(0)
    const [ippd, setIppd] = useState(0)
    const [toggleChecked, setToggleChecked] = useState(false)


    useEffect(() => {

        setBtcprice(coinData.market_data.current_price.usd)   
      
    }, [coinState])
    
    
    useEffect(() => {

        document.addEventListener('click', handleClickOutside, true)


        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }

    }, [accepted])
    

    useEffect(() => {
      if (isChecked === '70') {
          setPpd(0.0321)
          setIppd(0.049)
          setPercentpd('25')
      } else if (isChecked === '50') {
        setPpd(0.0549)
        setIppd(0.084)
        setPercentpd('45')
      } else {
          setPpd(0.0099)
          setIppd(0.0149)
          setPercentpd('5')
      }
      setLoanAmount((isChecked/100) * colatamount * btcprice)
      
      
    }, [isChecked, colatamount])
    
    
    const handleClickOutside = (e) => {
        if(refOne.current && !refOne.current.contains(e.target)) {
            setAccepted(false)
        } else if (accepted) {
            setAccepted(true)
        } else {
            setAccepted(false)
        }
    }

    const handleChange = (e) => {
        setIsChecked(e.target.value)
    }

    const handleAcknowledge = () => {
        setAcknowledged(true)
        setAccepted(false)
    }

    const handleNewLoan = () => {
        setNewLoan(true)
    }

    const handleInput = (e) => {
        setColatamount(e.target.value)
    }

    const handleDisclosure = () => {
        setAccepted(true)
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        const values = {
            uuid: userData.uuid,
            method: coinState.id,
            amount: colatamount,
            loan: loanAmount,
            ltv: isChecked
        }
        if(colatamount !== '' && loanAmount !== '') {
            axios.post('http://localhost:8080/loan', values)
            .then(res => {
                window.location.reload()
            })
            .catch(err => console.log(err))
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
    
  return (
    <div className='p-6 h-[93vh] overflow-scroll'>
        <div>
            {!newLoan && <div className='text-center mb-4'>
                <p className='font-bold text-xl'>Loans</p>
            </div>}

            {!newLoan && <div className='p-4'> 
                {!acknowledged && <div onClick={handleDisclosure} className='cursor-pointer'>
                    <p className='p-3 bg-blue-100 text-blue-400 flex items-center gap-3 justify-center'><AiFillProfile /><p>Disclosure for Loans. Please read and accept the terms before proceeding.</p><AiOutlineRight /></p>
                </div>}
                <div onClick={handleNewLoan} className='text-center rounded-md p-3 bg-blue-100 text-blue-400 w-2/3 mx-auto my-6 cursor-pointer'>
                    <button className='flex gap-2 items-center justify-center mx-auto font-semibold'>
                        <AiOutlinePlus />
                        <p> Create New Loan</p>
                    </button>
                </div>
                <div className='mt-2'>
                    <h3 className='font-bold text-2xl'>Don't sell crypto, use cash!</h3>
                    <p>Crypto-backed loans allow you to keep HODLing your coins and get cash for day to day needs at the same time.</p>
                </div>

                {loanData.length > 0 && <div className='mt-6'>
                    <h3 className='font-bold'>History</h3>
                    <div className='w-full'>
                        <table className='w-full mt-4 table-auto border-1 rounded-lg'>
                            <tr className='border-b-1 bg-blue-200'>
                                <th className='p-2'>Date</th>
                                <th className='p-2'>Collateral</th>
                                <th className='p-2'>Loan Amount</th>
                                <th className='p-2'>Validity</th>
                            </tr>
                            {loanData.map(each => (
                                <tr key={each.id} className='border-b-1 text-center hover:bg-blue-100'>
                                    <td className='p-2'>{moment(each.date).format('YYYY-MM-DD')}</td>
                                    <td className='p-2'>{each.method}</td>
                                    <td className='p-2'>{Number(each.loan).toFixed(2)}<span className='text-gray-500'> USD</span></td>
                                    <td className='p-2'>{moment(each.date).add(364, 'days').calendar()}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>}
            </div>}

            {newLoan &&  <div className='lg:p-6'>
                <div className='mb-6 flex items-center justify-between border-b-1 p-2'>
                    <div onClick={()=> {setNewLoan(false)}} className='cursor-pointer'>
                        <AiOutlineLeft size='35' color='#60A5FA' />
                    </div>
                    <h3 className='font-bold text-2xl mx-auto'>Get Loan</h3>
                </div>
                <div>
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-4'>
                            <div className='p-4'>
                                <span className='font-bold block mb-4'>Crypto Collateral</span>
                                <label htmlFor="" className='p-3 border rounded-md'>  
                                    <select name="" id="" value={coinState.id} onChange={(e)=> setCoinState({id: e.target.value, symbol: e.target.id})}>
                                        <option id='btc' value="bitcoin">Bitcoin</option>
                                        <option id='eth' value="ethereum">Ethereum</option>
                                        <option id='xrp' value="ripple">XRP</option>
                                        <option id='avax' value="avalance-2">Avalanche</option>
                                        <option id='bnb' value="binancecoin">Binance Coin</option>
                                        <option id='dot' value="polkadot">Polkadot</option>
                                        <option id='sol' value="solana">Solana</option>
                                        <option id='matic' value="matic-network">Matic</option>
                                        <option id='doge' value="dogecoin">Dogecoin</option>
                                    </select>
                                    <input type="number" min='0' step='any' name="colatamount" id="colatamount" value={colatamount} onChange={handleInput} placeholder='0.00000000' required className='text-right text-blue-400' />
                                </label>
                            </div>
                            <div className='p-4 pb-8 border-b-1'>
                                <span className='font-bold block mb-4'>Loan Amount</span> 
                                <label htmlFor="" className='p-3 border rounded-md'> 
                                    <select name="" id="" defaultValue='usdt'>
                                        <option value="usdt">USDT</option>
                                    </select>
                                    <input type="number" name="" id="" placeholder='0.00' value={Number(loanAmount).toFixed(2)} readOnly className='text-right text-blue-400' />
                                </label>
                            </div>
                            
                            <div className='p-4 border-b-1'>
                                <p className='font-bold'>Loan-to-Value (LTV)</p>
                                <div className='flex gap-4'>
                                    <div className='m-2 bg-blue-100  text-blue-500 active:bg-blue-600 px-4 py-2 text-center rounded-lg relative'>
                                        <label htmlFor="ninety" className='cursor-pointer'>
                                            <input type="radio" name="ltv" id="ninety" value='90' className='absolute hidden' checked={isChecked === '90'} onChange={handleChange} /><span className='block font-bold'>90%</span>
                                        </label>
                                    </div>
                                    <div className='m-2 bg-blue-100 text-blue-500 active:bg-blue-600 px-4 py-2  text-center rounded-lg'>
                                        <label htmlFor="seventy" className='cursor-pointer'>
                                            <input type="radio" name="ltv" id="seventy" value='70' className='absolute hidden' checked={isChecked === '70'} onChange={handleChange} /><span className='block font-bold'>70%</span>
                                        </label>
                                    </div>
                                    <div className='m-2 bg-blue-100 text-blue-500 active:bg-blue-600 px-4 py-2 text-center rounded-lg relative'>
                                        <label htmlFor="fifty" className='cursor-pointer'>
                                            <input type="radio" name="ltv" id="fifty" value='50' className='absolute hidden' checked={isChecked === '50'} onChange={handleChange} /><span className='block font-bold'>50%</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='p-4'>
                                <div className='pb-6 border-b-1'>
                                    <p className='font-bold'>Daily fee</p>
                                    <p className='my-1'><strong className='text-xl'>{((ppd/100) * loanAmount).toFixed(2)}</strong> USDT</p>
                                    <p><strong>{ppd}%</strong> per day. The fee will be deducted from your wallet until you have the funds. In case of insufficient funds, the daily fee will be increased to {ippd}% <span className='text-blue-500'>Learn more</span></p>
                                </div>
                                <div className='mt-2 pb-6 border-b-1'>
                                    <p className='font-bold'>Maximum loan duration</p>
                                    <p className='my-1'><strong>364</strong> DAYS</p>
                                    <p>You can close the loan any day until the due date.</p>
                                </div>
                                <div className='mt-2 pb-6 border-b-1'>
                                    <p className='font-bold'>Price down limit</p>
                                    <p className='my-1'><strong>{(btcprice - (percentpd/100 * btcprice)).toFixed(2)}</strong> USDT</p>
                                    <p><strong>-{percentpd}</strong>% off the current price. It can be extended anytime by adding additional collateral. <a href="http://" target="_blank" className='text-blue-500' rel="noopener noreferrer">Learn more</a></p>
                                </div>
                            </div>
                            <div className='p-4'>
                                <div className='mb-4 text-gray-500 text-sm'>
                                    <p><strong className='text-black text-xl'>{Number(loanAmount).toFixed(2)}</strong> USDT loan</p>
                                    <p className='my-2'>Borrowed amount must be repaid by {moment().add(364, 'days').calendar()}</p>
                                    <p className='mb-2'>By clicking Get Loan, I expressly agree to the <a href="http://" target="_blank" className='text-blue-500' rel="noopener noreferrer">Terms of Service</a></p>
                                </div>
                                <button type='submit' className='sm:w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md'>Get Loan</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>}
        </div>

        {accepted && <div className='p-6 fixed bottom-0 z-20 rounded-lg bg-gray-100 text-gray-500 -mx-6' ref={refOne}>
            <h3 className='text-center font-bold text-xl text-black'>Disclosure</h3>
            <p className='font-semibold uppercase my-3 text-black'>Loans</p>
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

export default Loanspage