import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCurrencyExchange, BsThreeDots, BsFillSave2Fill } from 'react-icons/bs'
import { GiOpenPalm } from 'react-icons/gi'
import { GrMoney } from 'react-icons/gr';
import { FaExchangeAlt } from 'react-icons/fa';

const Dashbar = () => {
  return (
    <div>
        <div className='flex gap-4 p-3 border-t-1 justify-center fixed bottom-0 items-center w-full'>
            <NavLink 
            to='/dashboard' style={({isActive}) => {
                return {
                color: isActive ? 'blue' : 'black'
                }
            }} 
            ><BsCurrencyExchange className='m-auto' /> <p>Wallets</p> 
            </NavLink>
            <NavLink
            to='/dashboard/loanspage' style={({isActive}) => {
                return {
                color: isActive ? 'blue' : 'black'
                }
            }} 
            ><GiOpenPalm className='m-auto' /> <p>Loans</p></NavLink>
            <NavLink
            to='/dashboard/hodlerpage' style={({isActive}) => {
                return {
                color: isActive ? 'blue' : 'black'
                }
            }} 
            ><BsFillSave2Fill className='m-auto' /> <p>Hodler</p></NavLink>
            <NavLink
            to='/dashboard/savingspage' style={({isActive}) => {
                return {
                color: isActive ? 'blue' : 'black'
                }
            }} 
            ><GrMoney className='m-auto' /> <p>Savings</p></NavLink>
            <NavLink
            to='/dashboard/accountsettings' style={({isActive}) => {
                return {
                color: isActive ? 'blue' : 'black'
                }
            }} 
            ><BsThreeDots className='m-auto' /> <p>More</p></NavLink>
        </div>
    </div>
  )
}

export default Dashbar