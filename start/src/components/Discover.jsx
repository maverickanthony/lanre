import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import loanpic from '../data/loanpic.png';
import hodlerpic from '../data/hodlerpic.png';
import exchangehome from '../data/exchangehome.png';
import { GiOpenPalm } from 'react-icons/gi'
import { GrMoney } from 'react-icons/gr';
import { BsFillSave2Fill } from 'react-icons/bs';
import { FaExchangeAlt } from 'react-icons/fa';
import { Hodler, Exchange, Savings, Loans } from '.';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

// const useStyles = makeStyles(() => ({
//     head: {
//         display: 'flex',
//         justifyContent: 'center',
//         marginTop: 25
//     }
// }));

const Discover = () => {

    
   
    const [value, setValue] = useState(0);
    const [mobile, setMobile] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
    


  return (
    <div>
        <div className='mt-4'>
            <h3 className='text-center font-bold text-3xl' >Discover WeHodler</h3>
        </div>

        <div>
            <div className='rounded-sm border-solid border-indigo-400'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab icon={<BsFillSave2Fill />} iconPosition="start" label="Hodler" {...a11yProps(0)} />
                    <Tab icon={<GrMoney />} iconPosition="start" label="Savings" {...a11yProps(1)} />
                    <Tab icon={<GiOpenPalm />} iconPosition="start" label="Crypto Loans" {...a11yProps(2)} />
                    <Tab icon={<FaExchangeAlt />} iconPosition="start" label="Exchange" {...a11yProps(3)} />

                </Tabs>
                <TabPanel value={value} index={0}>
                    <div className='sm:h-96 lg:h-fit overflow-hidden'>
                        <div className='lg:flex gap-2 lg:gap-4'>
                            <div className='p-4'>
                                <p className='text-2xl text-center font-bold mb-3 uppercase'>Hodler</p>
                                {
                                    mobile ? 
                                    <div>
                                        <h4 className='text-center'>An effective and innovative tool powered by crypto-backed loans to help you capitalize on the market volatility.</h4>
                                    </div>:
                                    <div className='p-3'>
                                        <h4 className='text-lg my-2'>An effective and innovative tool powered by crypto-backed loans to help you capitalize on the market volatility.</h4>
                                        <p>Boost your savings while keeping your interest. Earn steadily by stimulating your crypto.</p>
                                        <div className='mt-6'>
                                            <h1 className='text-lg mb-3'>The Chrome Strategy</h1>
                                            <div className='flex'>
                                                <div className='font-bold rounded-md text-blue-500 bg-blue-200 w-3/5 p-2 shadow-md'>80%</div>
                                                <div className='font-bold rounded-md text-white bg-blue-500 w-2/5 p-2 shadow-md'>20%</div>
                                            </div>
                                            <div className='flex gap-2'>
                                                <div className='w-3/5 ml-2 lg:ml-3'>
                                                    <h3 className='font-bold my-2'>Savings Account</h3>
                                                    <p className='text-sm mb-2'>A conservative part of your portfolio and an extremely safe investment. It is advisable to put 80 to 90 percent of your money in cryptocurrency and stablecoin savings.</p>
                                                    <p className='font-bold text-green-400'>9% a year</p>
                                                    <p className='text-sm text-gray-600 mb-2'>Guaranteed profit</p>
                                                    <p className='font-bold text-red-800'>0%</p>
                                                    <p className='text-sm text-gray-600 mb-2'>No risk</p>
                                                </div>
                                                <div className='w-2/5 ml-2 lg:ml-3'>
                                                    <h3 className='font-bold my-2'>Hodler</h3>
                                                    <p className='text-sm mb-2'>Small, speculative bets, this is a high risk high reward investment.</p>
                                                    <p className='font-bold text-green-400'>+300%</p>
                                                    <p className='text-sm text-gray-600 mb-2'>Potential profit</p>
                                                    <p className='font-bold text-red-800'>-45%</p>
                                                    <p className='text-sm text-gray-600 mb-2'>Potential risk</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <Box display='flex' m={2} justifyContent='center' alignItems='center'>
                                    <Button href='./Hodler' variant='contained' color='primary'>Learn More</Button>
                                </Box>
                            </div>
                            <div>
                                <img src={hodlerpic} alt="hodl" loading='lazy' />
                            </div>
                        </div>
                        
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className='sm:h-96 overflow-hidden'>
                        <div className='lg:flex gap-2 lg:gap-3'>
                            <div className='p-4 lg:w-3/5'>
                                <p className='text-2xl text-center font-bold mb-3 uppercase'>Savings</p>
                                {
                                    mobile ? 
                                    <div>
                                        <h4 className='text-center'>Stack your favorite crypto assets and earn a competitive interest on your savings per annum.</h4>
                                    </div>:
                                    <div className='p-3'>
                                        <h4 className='text-lg my-2'>Stack your favorite crypto assets and earn a competitive interest on your savings per annum.</h4>
                                        <p>WeHodler offers a high-return savings platform to earn on the go. The interface is user-friendly and interactive for both seasoned traders and newbies. Save different stablecoins or cryptocurrency and earn up to 9% APR.</p>
                                        <p className='mt-2'>Low conversion fees and daily interests payments.</p>
                                    </div>
                                }
                                <Box display='flex' m={2} justifyContent='center' alignItems='center'>
                                    <Button href='./Savings' variant='contained' color='primary'>Start Saving</Button>
                                </Box>
                            </div>
                            <div className='lg:w-2/5'>
                                <img src={hodlerpic} alt="hodl" loading='lazy' />
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className='sm:h-96 overflow-hidden'>
                        <div className='lg:flex gap-2'>
                            <div className='p-4 lg:w-3/5'>
                                <p className='text-2xl text-center font-bold mb-3 uppercase'>Crypto Loans</p>
                                {
                                    mobile ? 
                                    <div>
                                        <h4 className='text-center'>You can choose to keep HODLing to receive instant cash anytime. You don't need to sell your favorite assets to get cash.</h4>
                                    </div>:
                                    <div className='p-3'>
                                        <h4 className='my-2 text-lg'>You can choose to keep HODLing to receive instant cash anytime. You don't need to sell your favorite assets to get cash.</h4>
                                        <p>Use your crypto or stablecoins as collateral to get instant cash loans and cryptocurrency loans in fiat EUR, USD, GBP, CHF or or crypto Tether (USDT), Bitcoin (BTC), Ethereum (ETH), Chainlink (LINK) and other popular currencies. WeHodler has the highest loan-to-value ratio (90%) with minimum loan amounts starting at just $100. YouHodler accepts more than 50 top coins as collateral. Instant credit card and bank withdrawals are included.</p>
                                    </div>
                                }
                                <Box display='flex' m={2} justifyContent='center' alignItems='center'>
                                    <Button href='./Loans' variant='contained' color='primary'>Get Crypto loan</Button>
                                </Box>
                            </div>
                            <div className='lg:w-2/5'>
                                <img src={loanpic} sizes='100vw' loading='lazy' alt='weHodler crypto app'/>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className='sm:h-96 lg:h-96 overflow-hidden'>
                        <div className='lg:flex gap-2'>
                            <div className='p-4 lg:w-3/5'>
                                <p className='text-2xl text-center font-bold mb-3 uppercase'>Exchange</p>
                                {
                                    mobile ? 
                                    <div>
                                        <h4 className='text-center'>Swift conversion between all crypto, fiat and stablecoins.</h4>
                                    </div>:
                                    <div className='p-3'>
                                        <h4 className='text-lg  my-2'>Swift conversion between all crypto, fiat and stablecoins.</h4>
                                        <p>A cryptocurrency exchange can be confusing especially for newbies. WeHodler walks you through the seamless process to convert fiat and crypto so you can exchange fast. Our growing resource dashboard tells you everything from the basics of crypto exchange to the advanced tools of WeHodler's multi-faceted financial platform.</p>
                                        <h4 className='text-lg my-2'>A cryptocurrency exchange you can trust</h4>
                                        <p>WeHodler's cryptocurrency exchange and platform is designed for users of all experience levels.</p>
                                    </div>
                                }
                                <Box display='flex' m={2} justifyContent='center' alignItems='center'>
                                    <Button href='./Exchange' variant='contained' color='primary'>Exchange</Button>
                                </Box>
                            </div>
                            <div className='lg:w-2/5'>
                                <img src={exchangehome} sizes='100vw' loading='lazy' alt='weHodler crypto app'/>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </div>
        </div>
    </div>
  )
}

export default Discover


