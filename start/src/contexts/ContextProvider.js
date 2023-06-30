import React, { createContext, useContext, useState, useEffect } from  'react'
import axios from 'axios'
import { HistoricalChart, CoinList, TrendingCoins, SingleCoin } from '../config/api'

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}


export const ContextProvider = ({children}) => {

    const [activeMenu, setActiveMenu] = useState(false)
    const [auth, setAuth] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [coin, setCoin] = useState([])
    const [graphData, setGraphData] = useState([])
    const [coinData, setCoinData] = useState([])
    const [direction, setDirection] = useState('long')

    const [newHodler, setNewHodler] = useState(false)
    const [newSavings, setNewSavings] = useState(false)
    const [verifyMessage, setVerifyMessage] = useState(false)
    const [verifyStatus, setVerifyStatus] = useState(false)
    const [userData, setUserData] = useState({
        uuid: '',
        email: '',
        balance: [],
        withdrawals: [],
        authyQ: false
    })

    const title = {
        0: 'Personal Information',
        1: 'Identity & Confirmation'
    }
    const [page, setPage] = useState(0)
    const [fullUserData, setFullUserData] = useState({
        bfirstName: '',
        blastName: '',
        bdob: '',
        baddress: '',
        bzipcode: '',
        bcountry: '',
        sbeneficial: false,
        optIn: false,
        smoi: '',
        phone: ''
    })

    const handleFormChange = e => {
        const type = e.target.type

        const name = e.target.name

        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value

        setFullUserData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const { phone, optIn, ...requiredInputs } = fullUserData
    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length -1 

    const canNextPage1 = Object.keys(fullUserData)
        .filter(key => key.startsWith('b'))
        .map(key => fullUserData[key])
        .every(Boolean)


    const disablePrev = page === 0

    const disableNext =
        (page === Object.keys(title).length - 1)
        || (page === 0 && !canNextPage1)

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

    const [loanData, setLoanData] = useState([])
    const [savingsData, setSavingsData] = useState([])
    const [hodlerData, setHodlerData] = useState([])

    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [coinsList, setCoinsList] = useState([])
    const [trending, setTrending] = useState([])
    const [coinState, setCoinState] = useState({
        id: 'ethereum',
        symbol: 'eth'
    })
    const [days, setDays] = useState('365')
    const [depositData, setDepositData] = useState([])
    const [withdrawalData, setWithdrawalData] = useState([])
    const [allBalance, setAllBalance] = useState([])
    const [allWithdrawal, setAllWithdrawal] = useState([])
    const [savingsInvest, setSavingsInvest] = useState([])
    const [makeSavings, setMakeSavings] = useState([])
    const [balanceArray, setBalanceArray] = useState([])

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    useEffect(() => {
        axios.get('http://localhost:8080/dashboard', {
            withCredentials: true,
          })
        .then(res => {
        if(res.data.Status === "Success") {
            setAuth(true)
            setLoggedIn(true)
        } else {
            setAuth(false)
        }
        })
    }, [])

    useEffect(()=> {
        axios.post('http://localhost:8080/depositdata', {uuid: userData.uuid, method: coinState.id})
        .then(res => {
          if(res.data.Status === "Success") {
            setDepositData(res.data.data)
            console.log(res.data)
          } else {
              setDepositData([])
          }
        })
        .catch(err => console.log(err))
    },[coinState])


    useEffect(()=> {
        axios.post('http://localhost:8080/withdrawaldata', {uuid: userData.uuid, method: coinState.id})
        .then(res => {
          if(res.data.Status === "Success") {
            setWithdrawalData(res.data.data)
            console.log(res.data)
          } else {
              setWithdrawalData([])
          }
        })
        .catch(err => console.log(err))
    },[coinState])

    useEffect(() => {
        axios.post('http://localhost:8080/alldeposits', {uuid: userData.uuid})
        .then(res => {
            setUserData({
                ...userData,
                balance: res.data
            })
            setAllBalance(res.data)
        })
        .catch(err => console.log(err))
    }, [userData.uuid])

    useEffect(() => {
        axios.post('http://localhost:8080/allwithdrawals', {uuid: userData.uuid})
        .then(res => {
            setUserData({
                ...userData,
                withdrawals: res.data
            })
            setAllWithdrawal(res.data)
        })
        .catch(err => console.log(err))
    }, [userData.uuid])


    useEffect(() => {
        axios.post('http://localhost:8080/loandata', {uuid: userData.uuid})
        .then(res => {
            setLoanData(res.data)
        })
        .catch(err => console.log(err))
    }, [userData.uuid])


    useEffect(() => {
        axios.post('http://localhost:8080/savingsdata', {uuid: userData.uuid})
        .then(res => {
            setSavingsData(res.data)
        })
        .catch(err => console.log(err))
    }, [userData.uuid])

    useEffect(() => {
        axios.post('http://localhost:8080/currentsavingsdata', {uuid: userData.uuid, status: 'open'})
        .then(res => {
            setSavingsInvest(res.data)
        })
        .catch(err => console.log(err))
    }, [userData.uuid])

    useEffect(() => {
        axios.post('http://localhost:8080/hodlerdata', {uuid: userData.uuid})
        .then(res => {
            setHodlerData(res.data)
        })
        .catch(err => console.log(err))
    }, [userData.uuid])

    
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

    useEffect(() => {
        setMakeSavings(getBeforeCurrentSavings())
    }, [])

    const makeFirstSavings = () => {
        if (makeSavings.length > 0) {
            return makeSavings.reduce((acc, curr)=> Number(acc) + Number(curr))
        } else {
            return 0.00
        }
    }

    useEffect(() => {
        makeFirstSavings()
    }, [])
    
    

    const fetchCoin = async () => {
        
        const {data} = await axios.get(HistoricalChart(coinState.id, days, 'USD'))

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


    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins('USD'))
    
        setTrending(data)
        
    }

    const fetchCoinData = async () => {
        const { data } = await axios.get(SingleCoin(coinState.id))

        setCoinData(data)
        console.log(data)
    }

    const fetchCoinsList = async () => {
        const { data } = await axios.get(CoinList('USD'))
    
        setCoinsList(data)
        
    }

    const getBalance = (id) => {
        let cid = id.charAt(0).toUpperCase() + id.slice(1)
    
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
          return (a - b).toFixed(3)
        } else if (arrayBalance.length > 0 && withdrawBalance.length == 0) {
          return arrayBalance.reduce((acc, curr)=> Number(acc) + Number(curr))
        } else {
          return 0.00
        }
    }




    useEffect(() => {
        fetchCoinsList()
        fetchTrendingCoins()
        fetchCoinData()
      
    }, [])

    useEffect(()=> {
        fetchCoinData() 
    }, [coinState]) 

    return (
        <StateContext.Provider
            value={{activeMenu, setActiveMenu, makeFirstSavings, getBalance, handleFormChange, isClicked, direction, setDirection, setIsClicked, handleClick, fetchCoinData, coinData, setCoinData, screenSize, setScreenSize, loggedIn, setLoggedIn, newHodler, setNewHodler, fetchCoin, fetchCoinsList, fetchTrendingCoins, coinState, setCoinState, coin, setCoin, graphData, setGraphData, coinsList, setCoinsList, trending, days, setDays, auth, setAuth, userData, setUserData, newSavings, setNewSavings, depositData, setDepositData, withdrawalData, setWithdrawalData, loanData, setLoanData, savingsData, setSavingsData, hodlerData, title, page, setPage, fullUserData, setFullUserData, canSubmit, disableNext, disablePrev, prevHide, nextHide, submitHide, verifyMessage, setVerifyMessage, verifyStatus, setVerifyStatus, allBalance, setAllBalance, allWithdrawal, setAllWithdrawal, savingsInvest, setSavingsInvest, balanceArray, setBalanceArray}}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
