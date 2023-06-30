import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import { SignIn, SignUp } from '.'
import { navItems } from '../data/dummy'
import { NavLink } from 'react-router-dom'



const Navbarr = () => {

    const [mobile, setMobile] = useState(false)
    const [sideBar, setSideBar] = useState(false)
    const [productBar, setProductBar] = useState(false)
    const [productSubMenu, setProductSubMenu ] = useState(false)
    


    useEffect(() => {
      if(window.innerWidth < 900) {
          setMobile(true)
      }
    
    }, [])
    


    useEffect(() => {
      
        const handleResize = () => {
            if(window.innerWidth < 900) {
                setMobile(true)
            } else {
                setMobile(false)
            }
        }

        window.addEventListener('resize', handleResize)
    
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    const toggleSubMenu = ()=> {
        setProductBar(prevState => !productBar)
    }

    let hover = 'transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-sm hover:bg-blue-500 hover:p-1 hover:px-3 duration-150'
    
  return (
    <div>
        <div className='flex justify-between items-center h-20'>
            <NavLink to='/' activeClassName='is-active' className='flex justify-between items-center gap-3 ml-3  text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
                <SiShopware /> <span>WeHodler</span>
            </NavLink>
            {!mobile && <ul className='flex justify-items-end w-2/3'>
                <li><NavLink activeClassName='is-active' to={`/blog`} className='uppercase'>Blog</NavLink></li>
                <li onClick={toggleSubMenu}><Link className={`flex items-center ml-5 uppercase ${hover}'`} to='#'> Company <span><FiChevronDown /></span> </Link>
                    <ul className={`${productBar ? 'block' : 'hidden'} mt-2 ml-4 absolute`}>
                        <li><NavLink activeClassName='is-active' to={`/company`}>About WeHodler</NavLink></li>
                        <li><NavLink activeClassName='is-active' to={`/company/stats`}>Stats</NavLink></li>
                        <li><NavLink activeClassName='is-active' to={`/company/affiliates`}>Affiliate Program</NavLink></li>
                    </ul>
                </li>
                <li onClick={()=> setProductSubMenu(!productSubMenu)}><Link className={`flex items-center ml-5 uppercase ${hover}`} to='#'> Products <span><FiChevronDown /></span> </Link>
                    <ul className={`${productSubMenu ? 'block' : 'hidden'} mt-2 ml-4 absolute`}>
                        <li><NavLink activeClassName='is-active' to={`/hodler`}>Hodler</NavLink></li>
                        <li><NavLink activeClassName='is-active' to={`/savings`}>Savings</NavLink></li>
                        <li><NavLink activeClassName='is-active' to={`/exchange`}>Exchange</NavLink></li>
                        <li><NavLink activeClassName='is-active' to={`/loans`}>Crypto loans</NavLink></li>
                    </ul>
                </li>
                <li className='ml-5'><NavLink activeClassName='is-active' to={`/help`} className={`uppercase ${hover}`}>Help</NavLink></li>
                <li className='ml-auto mr-4'><NavLink activeClassName='is-active' to={`/signin`} className={`uppercase ${hover}`}>Sign In</NavLink></li>
                <li className=' mr-3'><NavLink activeClassName='is-active' to={`/signup`} className='uppercase bg-blue-600 text-white font-semibold px-2 py-1 rounded-md'>Sign Up</NavLink></li>    
            </ul>}
            {mobile && (
                <div>
                    {sideBar ? <FaTimes onClick={()=> setSideBar(!sideBar)} className='font-bold mr-4 h-5 cursor-pointer' /> : <FaBars className='font-bold mr-4 h-5 cursor-pointer' onClick={()=> setSideBar(!sideBar)} />}
                </div>
            )}
        </div>
        {sideBar && <div>
            <ul className='flex justify-items-end w-full h-screen flex-col'>
                <li className={`${hover}`}><NavLink activeClassName='is-active' to={`/blog`} className='uppercase ml-5' onClick={()=> setSideBar(!sideBar)}>Blog</NavLink></li>
                <li onClick={toggleSubMenu}><Link className={`flex items-center ml-5 uppercase mt-3 ${hover}'`} to='#'> Company <span><FiChevronDown /></span> </Link>
                    <ul className={`${productBar ? 'block' : 'hidden'} mt-2 ml-4 bg-indigo-200 rounded-sm p-1`}>
                        <li><NavLink activeClassName='is-active' to={`/company`} onClick={()=> setSideBar(!sideBar)}>About WeHodler</NavLink></li>
                        <li><NavLink activeClassName='is-active' to={`/company/stats`} onClick={()=> setSideBar(!sideBar)}>Stats</NavLink></li>
                        <li><NavLink activeClassName='is-active' to={`/company/affiliates`} onClick={()=> setSideBar(!sideBar)}>Affiliate Program</NavLink></li>
                    </ul>
                </li>
                <li onClick={()=> setProductSubMenu(!productSubMenu)}><Link className={`flex items-center ml-5 uppercase mt-3 ${hover}`} to='#'> Products <span><FiChevronDown /></span> </Link>
                    <ul className={`${productSubMenu ? 'block' : 'hidden'} mt-2 ml-4 bg-indigo-200 rounded-sm p-1`}>
                        <li><NavLink activeClassName='is-active' to={`/hodler`} onClick={()=> setSideBar(!sideBar)}>Hodler</NavLink></li>
                        <li><NavLink activeClassName='is-active' to={`/savings`} onClick={()=> setSideBar(!sideBar)}>Savings</NavLink></li>
                        <li><NavLink activeClassName='is-active' to={`/exchange`} onClick={()=> setSideBar(!sideBar)}>Exchange</NavLink></li>
                        <li><NavLink activeClassName='is-active' to={`/loans`} onClick={()=> setSideBar(!sideBar)}>Crypto loans</NavLink></li>
                    </ul>
                </li>
                <li className={`ml-5 mt-3 ${hover}`}><NavLink activeClassName='is-active' to={`/help`} onClick={()=> setSideBar(!sideBar)} className={`uppercase`}>Help</NavLink></li>
                <li className={`ml-5 mt-3 ${hover}`}><NavLink activeClassName='is-active' to={`/signin`} onClick={()=> setSideBar(!sideBar)} className={`uppercase`}>Sign In</NavLink></li>
                <li className={`ml-4 mt-3`}><NavLink activeClassName='is-active' to={`/signup`} onClick={()=> setSideBar(!sideBar)} className='uppercase bg-blue-500 px-2 py-1 rounded-md'>Sign Up</NavLink></li>    
            </ul>   
        </div>}
    </div>
  )
}

export default Navbarr



