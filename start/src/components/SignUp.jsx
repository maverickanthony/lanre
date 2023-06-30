import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ledgerah from '../data/ledgerah.svg'
import { validation } from './SignupValidation'
import { nanoid } from 'nanoid'
import signupbig from '../data/signupbig.png'

const SignUp = () => {

    
    const navigate = useNavigate()
    const [windowSize, setWindowSize] = useState(getWindowSize());
    
    const [values, setValues] = useState({
        email: '',
        password: '',
        passwordconfirm: '',
        country: '',
        isChecked: false,
        uuid: nanoid(),
        authy: 'disabled'
    })

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
    

    const [errors, setErrors] = useState({})


    const handleSelect = event => {
        setValues(prevValues => ({
            ...prevValues,
            country: event.target.value
        }))
    }

    const checkHandler = () => {
        setValues(prevState => ({
            ...prevState,
            isChecked: !values.isChecked
        }))
    }

    const handleInput = (e) => {
        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    axios.defaults.withCredentials = true
    const handleSubmit = (event)=> {
        event.preventDefault()
        const err = validation(values)
        setErrors(err)
        if(err.email === "" && err.password === "" && err.isChecked === "" && err.passwordconfirm === "") {
            axios.post('http://localhost:8080/signup', values)
            .then(res => {
                navigate('/signin')
            })
            .catch(err => console.log(err))
        }
    }

    

  return (
    <div className={`h-screen overflow-scroll mt-20 p-6 bg-blue-200 ${windowSize.innerWidth > 700 && 'flex gap-2 bg-slate-100'}`}>
        {windowSize.innerWidth > 700 && <div className={`w-1/2`}>
            <img src={signupbig} alt="sign-up" className='block' />
        </div>}
        <div className={`${windowSize.innerWidth > 700 && 'w-1/2'}`}>
            <div className='text-3xl'>Sign Up</div>
            <div className='text-sm text-gray-500'>and start trading!</div>
            <form action="" className='mt-5 bg-slate-100 p-4 rounded-sm' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-4'>
                    <label>
                        <div className='mb-1 font-semibold'>Country of Residence</div>
                        <select className='w-1/2 border rounded-lg p-2' name='country' value={values.country} onChange={handleSelect}> 
                            <option>------</option>
                            <option value="usa">United States</option>
                            <option value="spain">Spain</option>
                            <option value="costa-rica">Costa Rica</option>
                            <option value="belgium">Belgium</option>
                            <option value="croatia">Croatia</option>
                            <option value="netherlands">Netherlands</option>
                        </select>
                    </label>
                    <label>
                        <div className='mb-1 font-semibold'>Email Address</div>
                        <input className='text-sm p-2 rounded-lg w-1/2 border' type='email' value={values.email} name='email' placeholder='myname@domain.eg' onChange={handleInput} />
                        {errors.email && <div className='text-red-500 text-sm'>{errors.email}</div>}
                    </label>
                    <label>
                        <div className='mb-1 font-semibold'>Password</div>
                        <input className='text-sm p-2 rounded-lg w-1/2 border' type='password' value={values.password} name='password' placeholder='8+ characters' onChange={handleInput} />
                        {errors.password && <div className='text-red-500 text-sm'>{errors.password}</div>}
                    </label>
                    <label>
                        <div className='mb-1 font-semibold'>Confirm Password</div>
                        <input className='text-sm p-2 rounded-lg w-1/2 border' type='password' value={values.passwordconfirm} name='passwordconfirm' placeholder='Confirm Password' onChange={handleInput} />
                        {errors.passwordconfirm && <div className='text-red-500 text-sm'>{errors.passwordconfirm}</div>}
                    </label>
                    <div className='my-2 flex gap-4'>
                        <input type="checkbox" name="checkbox" checked={values.isChecked} id="checkbox" onChange={checkHandler} />
                        <label htmlFor='checkbox' className='text-sm text-gray-500'>I have read and fully understand the contents of this document; <a href='./privacy-notice' className='text-blue-500 cursor-pointer'>Privacy Notice</a></label>
                        {!errors.isChecked && <div className='text-red-500 text-sm'>{errors.isChecked}</div>}
                    </div>
                    <input type='submit' className='bg-blue-500 text-white font-bold uppercase cursor-pointer p-2 rounded-md' />
                </div>
            </form>
            <div className='mt-6 flex flex-col gap-3'>
                <div>
                    <p className='text-sm text-gray-500'>I acknowledge and understand that the terms and conditions and AML policies shall be read and accepted prior to consumption of services. I acknowledge and understand that KYC procedures must be fulfilled in order to consume any services on the platform.</p>
                </div>
                <div>
                    <p className='text-sm text-gray-500'>You should not transact with cryptocurrencies if you are not familiar with cryptocurrencies. This includes how the cryptocurrency is developed, and how you intend to transact and transfer the cryptocurrency.</p>
                </div>
                <div>
                    <p className='text-sm text-gray-500'>You should be aware that the value of cryptocurrencies is subject to high market volatility and fluctuations.</p>
                </div>
                <div>
                    <p className='text-sm text-gray-500'>Cryptocurrency trading is subject to high market risk. Please make your trades cautiously. You accept that YouHodler is not responsible for your trading losses.</p>
                </div>
                <div>
                    <p className='text-sm text-gray-500'>You understand that by buying cryptocurrencies, you are prepared to accept the risk of losing all of the money you put in the purchase of cryptocurrencies.</p>
                </div>
                <div className='flex gap-4 mt-6'>
                    <img src={ledgerah} alt="" width='150' />
                    <p className='text-sm text-gray-600'>Ledger Vault provides digital asset management system and a total of $150M pooled crime insurance.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp