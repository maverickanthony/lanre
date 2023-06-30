import React, { useState } from 'react'
import cyprus from '../data/cyprus.jpeg'
import walletbr from '../data/walletbr.svg'
import euroun from '../data/euroun.svg'

import Chart from 'react-apexcharts'
import { Ctaapp } from '.'

const Stats = () => {
        const [state, setState] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ['4Q 2020','1Q 2021','2Q 2021','3Q 2021', '4Q 2021', '1Q 2022', '2Q 2022', '3Q 2022', '4Q 2022', '1Q 2023']
          }
        },
        series: [
          {
            name: "Volume",
            data: [100, 200, 400, 350, 650, 550, 800, 920, 1200, 1480]
          }
        ]
      })
    
      const [revenue, setRevenue] = useState({
        options: {
          chart: {
            id: "revenue-bar"
          },
          xaxis: {
            categories: ['3Q 2021', '4Q 2021', '1Q 2022', '2Q 2022', '3Q 2022', '4Q 2022', '1Q 2023']
          }
        },
        series: [
          {
            name: "Revenue",
            data: [45, 80, 95, 62, 45, 35, 40]
          },
          {
            name: "Interest payouts",
            data: [31, 62, 60, 55, 35, 20, 15]
          }
        ]
      })

      const [users, setUsers] = useState({
        options: {
          chart: {
            id: "user-bar"
          },
          xaxis: {
            categories: ['3Q 2021', '4Q 2021', '1Q 2022', '2Q 2022', '3Q 2022', '4Q 2022', '1Q 2023']
          }
        },
        series: [
          {
            name: "Registrations",
            data: [15, 25, 35, 59, 70, 80, 90]
          },
          {
            name: "Active users",
            data: [10, 20, 24, 27, 30, 32, 40]
          }
        ]
      })

      const [savings, setSavings] = useState({
        options: {
          chart: {
            id: "savings-bar"
          },
          xaxis: {
            categories: ['3Q 2021', '4Q 2021', '1Q 2022', '2Q 2022', '3Q 2022', '4Q 2022', '1Q 2023']
          }
        },
        series: [
          {
            name: "Aave",
            data: [95, 95, 95, 97, 96, 98, 100]
          },
          {
            name: "Ada",
            data: [15, 20, 24, 27, 30, 32, 40]
          },
          {
            name: "Ape",
            data: [90, 90, 90, 90, 90, 89,88]
          },
          {
            name: "Eth",
            data: [50, 50, 50, 50, 46, 48, 44]
          },
          {
            name: "Ltc",
            data: [70, 71, 70, 74, 72, 73, 70]
          },
          {
            name: "Xrp",
            data: [120, 120, 120, 120, 120, 120, 120]
          },
          {
            name: "Btc",
            data: [30, 30, 30, 30, 30, 29, 29]
          },
          {
            name: "usdt",
            data: [110, 110, 110, 111, 112, 112, 112]
          },
          {
            name: "usdc",
            data: [15, 25, 25, 20, 20, 20, 20]
          },
          {
            name: "Dot",
            data: [10, 10, 14, 17, 10, 12, 5]
          },
        ]
      })


  return (
    <div className='mt-20 p-6 lg:p-8'>
        <div>
            <h2 className='text-3xl font-bold mb-4'>WeHodler Stats</h2>
            <p className='mb-2'>If you're interested in additional WeHodler data or statistics? We can help! Contact us today at <a href='' target='_blank'>support@wehodler.com</a></p>
            <p>The stats below are updated every month. Last Update: 24 Apr 2023, 09:00 UTC</p>
        </div>

        <div className='my-12 lg:flex lg:text-center'>
            <div className='text-center'>
                <h4 className='font-bold text-xl'>Avg. user balance</h4>
                <p className='mt-2 mb-2'>All coins and tokens valued in US Dollars</p>
                <h3 className='text-blue-400 font-bold text-2xl'>$4,436</h3>
            </div>
            <div className='text-center'>
                <h4 className='font-bold text-xl mt-3 lg:mt-0'>BTC dominance</h4>
                <p className='mt-2 mb-2'>Percentage of BTC holdings among all WeHodler wallets</p>
                <h3 className='text-blue-400 font-bold text-2xl'>9.26%</h3>
            </div>
        </div>

        <div className='my-10'>
            <h3 className='font-bold text-xl'>Community Growth</h3>
            <p>Users and Accounts growth over time</p>
            <div className='flex justify-center'>
                <Chart
                options={users.options}
                series={users.series}
                type="line"
                width="500"
                />
            </div>
        </div>

        <div className='my-14'>
            <h3 className='font-bold text-xl mb-2'>Balance Sheet Structure</h3>
            <p>Structure of Assets vs Liabilities (% of total assets)</p>
            <div className='flex gap-8 border-b-1 h-72 justify-center'>
                <div className='flex flex-col-reverse w-36'>
                    <div className='bg-green-200 h-1/2 text-center p-3 text-xs'>Assets</div>
                    <div className='bg-red-400 h-5'></div>
                    <div className='bg-yellow-400 h-4'></div>
                    <div className='bg-blue-400 h-2'></div>
                    <div className='bg-purple-600 h-1'></div>
                    <div className='bg-purple-400 h-4'></div>
                </div>
                <div className='flex flex-col-reverse w-36'>
                    <div className='bg-green-200 h-2/5 text-center p-3 text-xs'>Liabilities</div>
                    <div className='bg-red-400 h-5'></div>
                    <div className='bg-yellow-400 h-4'></div>
                    <div className='bg-blue-400 h-2'></div>
                    <div className='bg-purple-600 h-1'></div>
                    <div className='bg-purple-400 h-4'></div>
                </div>
            </div>
            <div className='flex justify-center mt-6 gap-2'>
                <div className='flex gap-2'>
                    <div className='p-2 rounded-full bg-green-200'></div>
                    <p className='text-xs'>Fiat & Stablecoins</p>
                </div>
                <div className='flex gap-2'>
                    <div className='p-2 rounded-full bg-red-400'></div>
                    <p className='text-xs'>BTC</p>
                </div>
                <div className='flex gap-2'>
                    <div className='p-2 rounded-full bg-yellow-400'></div>
                    <p className='text-xs'>ETH</p>
                </div>
                <div className='flex gap-2'>
                    <div className='p-2 rounded-full bg-blue-400'></div>
                    <p className='text-xs'>XRP</p>
                </div>
                <div className='flex gap-2'>
                    <div className='p-2 rounded-full bg-purple-600'></div>
                    <p className='text-xs'>PAXG</p>
                </div>
                <div className='flex gap-2'>
                    <div className='p-2 rounded-full bg-purple-400'></div>
                    <p className='text-xs'>Other crypto</p>
                </div>
            </div>
        </div>

        <div>
            <h3 className='font-bold text-xl mb-2'>Savings Accounts</h3>
            <p className='mb-2'>Distribution of users holding savings in different coins/tokens (% of total users)</p>
            <div>
                <div className='flex justify-center'>
                    <Chart
                    options={savings.options}
                    series={savings.series}
                    type="area"
                    width="500"
                    />
                </div>
            </div>
        </div>

        <div className='my-8 lg:flex lg:align-middle lg:gap-3'>
            <div className='text-center'>
                <h4 className='font-bold text-xl'>Avg. Hodler input</h4>
                <p className='mt-2 mb-2'>The average input amount of Hodler deal in USD</p>
                <h3 className='text-blue-400 font-bold text-2xl'>$560</h3>
            </div>
            <div className='text-center'>
                <h4 className='font-bold text-xl mt-3 lg:mt-0'>Avg. number of Hodler deals</h4>
                <p className='mt-2 mb-2'>Per-user per month for any coin</p>
                <h3 className='text-blue-400 font-bold text-2xl'>50</h3>
            </div>
        </div>

        <div className='mt-14'>
            <h2 className='font-bold text-xl mb-2'>Total platform volume, $M</h2>
            <p className='mb-2'>All services</p>
            <div className='flex justify-center'>
                <Chart
                options={state.options}
                series={state.series}
                type="area"
                width="500"
                />
            </div>
        </div>

        <div className='my-12'>
            <h2 className='font-bold text-xl mb-2'>Revenue vs Interest payouts</h2>
            <p>Distribution by months</p>
            <div className='flex justify-center'>
                <Chart
                options={revenue.options}
                series={revenue.series}
                type="bar"
                width="500"
                />
            </div>
        </div>

        <div className='my-14'>
            <div className='my-6'>
                <h3 className='font-bold text-2xl'>Coin popularity Map on Hodler</h3>
                <p>Percentage of hodler deals of coins over the last month</p>
            </div>
            <div className='grid grid-cols-5'>
                <div className='p-2 bg-red-400 border border-white text-sm text-white col-span-2 row-start-1 row-end-7'>eth<br />51%</div>
                <div className='p-2 bg-green-400 border border-white text-sm text-white'>btc<br />8%</div>
                <div className='p-2 bg-neutral-400 border border-white text-sm text-white'>eth<br />7.56%</div>
                <div className='p-2 bg-blue-400 border border-white text-sm text-white'>sol<br />3.12%</div>
                <div className='p-2 bg-red-300 border border-white text-sm text-white'>xrp<br />2.55%</div>
                <div className='p-2 bg-red-600 border border-white text-sm text-white'>tcad<br />2%</div>
                <div className='p-2 bg-orange-200 border border-white text-sm text-white'>ltc<br />1.87%</div>
                <div className='p-2 bg-cyan-400 border border-white text-sm text-white'>doge<br />1.82%</div>
                <div className='p-2 bg-red-400 border border-white text-sm text-white'>ada<br />1.42%</div>
                <div className='p-2 bg-cyan-200 border border-white text-sm text-white'>gala<br />1.07%</div>
                <div className='p-2 bg-red-400 border border-white text-sm text-white'></div>
                <div className='p-2 bg-blue-400 border border-white text-sm text-white'></div>
                <div className='p-2 bg-neutral-300 border border-white text-sm text-white'></div>
                <div className='p-2 bg-yellow-400 border border-white text-sm text-white'></div>
                <div className='p-2 bg-pink-600 border border-white text-sm text-white'></div>
                <div className='p-2 bg-red-400 border border-white text-sm text-white'></div>
                <div className='p-2 bg-indigo-400 border border-white text-sm text-white'></div>
                <div className='p-2 bg-green-200 border border-white text-sm text-white'></div>
                <div className='p-2 bg-red-400 border border-white text-sm text-white'></div>
            </div>
        </div>
  

        <div className='my-10 lg:flex lg:align-middle lg:gap-3'>
            <div className='text-center'>
                <h4 className='font-bold text-xl'>Avg. ID verification time</h4>
                <p className='mt-2 mb-2'>The average time of complete ID verification over the last month</p>
                <h3 className='text-blue-400 font-bold text-2xl'>2m 03s</h3>
            </div>
            <div className='text-center'>
                <h4 className='font-bold text-xl mt-3 lg:mt-0'>Avg. response time</h4>
                <p className='mt-2 mb-2'>The median response time on the live chat via website</p>
                <h3 className='text-blue-400 font-bold text-2xl'>4m 10s</h3>
            </div>
        </div>
        <div className='my-14 lg:flex lg:align-middle lg:gap-3'>
            <div className='text-center'>
                <h4 className='font-bold text-xl'>Avg. handling time</h4>
                <p className='mt-2 mb-2'>The average time resolution requests on the Live Chat</p>
                <h3 className='text-blue-400 font-bold text-2xl'>5m 30s</h3>
            </div>
            <div className='text-center'>
                <h4 className='font-bold text-xl mt-3 lg:mt-0'>Avg. number of cases</h4>
                <p className='mt-2 mb-2'>Successfully resolved by the support team per day</p>
                <h3 className='text-blue-400 font-bold text-2xl'>100</h3>
            </div>
        </div>

        <Ctaapp />

        <div className='p-4 flex flex-col gap-2 lg:flex-row lg:mt-2'>
            <div className='lg:border-r-1'>
                <h3 className='uppercase font-semibold'>WeHodler is regulated in cyprus and eu</h3>
            </div>
            <div className='flex flex-col gap-2 lg:flex-row lg:gap-1'>
                <div className='flex gap-2 items-center lg:w-60'>
                    <img src={cyprus} alt="cyprus flag" width='40' height='40' className='rounded-bg border-black' />
                    <div className='lg:text-xs text-sm'>WeHodler S.A<span className='font-semibold'>&nbsp;Regulated Financial Intermediary</span> and <span className='font-semibold'>&nbsp;Pawn Broker</span></div>
                </div>
                <div className='flex gap-2 items-center lg:w-60'>
                    <img src={euroun} alt="euro union" width='40' height='40' />
                    <div className='lg:text-xs text-sm'>WeHodler<span className='font-semibold'>&nbsp;Registration</span></div>
                </div>
                <div className='flex gap-2 items-center lg:w-60'>
                    <img src={walletbr} alt="wallet" width='40' height='40' />
                    <div className='lg:text-xs text-sm'>Partnership with regulated EU/Cyprus payment providers</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats