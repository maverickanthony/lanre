import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { validation } from './LoginValidation'
import { useStateContext } from '../contexts/ContextProvider'
import { AiTwotoneLock, AiOutlineClose } from 'react-icons/ai'
import signupbig from '../data/signupbig.png'


const ResetPassword = ({email, set, stat}) => {
    return (
        <div>
            <div className='flex items-center gap-2'>
                <AiOutlineClose onClick={()=> set(!stat)} className='mr-[30%] cursor-pointer' />
                <AiTwotoneLock />
                <h2>Reset Password</h2>
            </div>
            <p className='text-sm text-gray-600 mt-2'>Email with password reset instructions will be sent to {email}</p>
            <button className='block mt-4 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-300 text-white font-semibold cursor-pointer'>Reset Password</button>
        </div>
    )
}

const SignIn = () => {

    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [codecfm, setCodeCfm] = useState('')
    const [secondAuth, setSecondAuth] = useState(false)
    const [errors, setErrors] = useState({})
    const [resetPassword, setResetPassword] = useState(false)
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const { setLoggedIn, setUserData, userData} = useStateContext()
    


    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const handleInput = (e) => {
        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (event)=> {
        event.preventDefault()

        const err = validation(values)
        setErrors(err)
        if(err.email === "" && err.password === "") {
            axios.post('http://localhost:8080/signin', values, {withCredentials: true})
            .then(res => {
                if(res.data.Status === "Pending") {
                    setSecondAuth(true)
                }
                else if(res.data.Status === "Success") {
                    setLoggedIn(true)
                    setUserData({
                        ...userData,
                        uuid: res.data.data.uuid,
                        email: res.data.data.email,
                        authyQ: res.data.data.authy
                    })
                    navigate('/dashboard') 
                } else {
                    alert (res.data.Message) 
                }
            })
            .catch(err => console.log(err))
        }
    }

    const fetchAuthStatus = () => {
        const secondValues = {
            email: values.email,
            password: values.password,
            token: codecfm
        }
        axios.post('http://localhost:8080/fetchauthstatus', secondValues, {withCredentials: true})
        .then(res => {
            if(res.data.verified) {
                setLoggedIn(true)
                console.log(res.data)
                setUserData({
                    ...userData,
                    uuid: res.data.data.uuid,
                    email: res.data.data.email,
                    authyQ: res.data.data.authy
                })
                navigate('/dashboard')
            } else {
                alert('Authentication failed')
            }
        })
    }


  return (
    <div>
      <div className={`h-screen mt-20 p-6 bg-blue-200 ${windowSize.innerWidth > 700 && 'flex gap-2 bg-slate-100'}`}>
        {windowSize.innerWidth > 700 && <div className={`w-1/2`}>
            <img src={signupbig} alt="sign-up" className='block' />
        </div>}
        {!secondAuth && <div>
            {!resetPassword && <div className={`${windowSize.innerWidth > 700 && 'w-1/2'}`}>
                <h2 className='text-3xl'>Login</h2>
                <form action="" className='mt-3 bg-slate-100 p-4 rounded-sm' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-4'>
                        <label><div className='font-semibold mb-1'>Email Address:</div>
                            <input type='email' className='p-2 rounded-lg text-sm border w-1/2' value={values.email} name='email' placeholder='Email Address' onChange={handleInput} />
                            {errors.email && <div className='text-red-500 text-sm'>{errors.email}</div>}
                        </label>
                        <label><div className='font-semibold mb-1'>Password:</div>
                            <input type='password' className='p-2 rounded-lg text-sm border w-1/2' value={values.password} name='password' placeholder='Password' onChange={handleInput} />
                            {errors.password && <div className='text-red-500 text-sm'>{errors.password}</div>}
                        </label>
                        {values.email !== '' && <div>
                            <p onClick={()=> setResetPassword(true)} className={`font-semibold text-sm text-blue-400 cursor-pointer`}>Reset Password</p>
                        </div>}
                        <input type='submit' className='bg-blue-500 text-white font-bold uppercase cursor-pointer p-2 rounded-md' />
                        <div className='text-blue-400 flex gap-1 items-center'>
                            <p className='text-gray-400 text-sm'>Don't have an account?</p>
                            <p className='cursor-pointer underline'>Create account</p>
                        </div>
                    </div>
                </form>
            </div>}
        </div>}
        {secondAuth && <div className='bg-blue-200 p-4 flex flex-col gap-2 justify-center'>
            <h2 className='font-bold text-lg'>Two-Factor Authentication</h2>
            <p className='text-gray-400'>Please enter the 6 digit code from your Authenticator app</p>
            <label htmlFor="codecfm">
                <input type="number" name="codecfm" id="codecfm" maxLength='6' className='p-2 w-[60%] border rounded-md' value={codecfm} onChange={(e)=> setCodeCfm(e.target.value)} placeholder='6-digit code' />
            </label>
            <button onClick={fetchAuthStatus} className='w-[80%] py-2 bg-blue-500 text-white font-semibold rounded-lg'>Login</button>
        </div>}
        {resetPassword && <div>
                <ResetPassword email={values.email} stat={resetPassword} set={setResetPassword} />
            </div>}
      </div>
    </div>
  )
}

export default SignIn