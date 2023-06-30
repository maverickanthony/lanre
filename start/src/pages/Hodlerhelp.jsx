import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { FiBarChart2 } from 'react-icons/fi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { SiShopware } from 'react-icons/si'
import { Link } from 'react-router-dom'
import hodlerone from '../data/hodlerone.png'
import tpone from '../data/tpone.png'
import tptwo from '../data/tptwo.png'
import hodlertwo from '../data/hodlertwo.mp4'

export const HodlerhelpOne = () => {
    const [name, setName] = useState('How Hodler works')
    const navigate = useNavigate()

    return (
        <div className='p-6'>
            <div className='bg-blue-500 p-6 -mx-6 -mt-6'>
                <div className='flex items-center gap-4 text-white'>
                    <SiShopware color='white' size={35} />
                    <p className='uppercase font-semibold'>WeHodler</p>
                </div>
                <div className='mt-4'>
                    <p>Hello there</p>
                    <p>Get help from support right away after looking at the various articles.</p>
                </div>
            </div>
            <div>
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Hodler</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>What is the Hodler product about</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='text-xl font-bold'>What is Hodler</h2>
                <p>Hodler is an advanced and simple tool to enlarge your crypto assets using a portion of your YouHodler wallet balance. You can keep most of the funds in a safe and stable wallet while earning interest and using some amount to engage in trading activities with high-profit potential.</p>
                <p>The Hodler is similar to a traditional futures trading where you can trade with a smaller amount by utilizing a multiplier. This multiplier works like a leverage and can multiply the profits that can be earned within the same period of time.</p>
                <h2 className='text-xl font-bold'>How to use Hodler</h2>
                <p>As with any other investments, with Hodler you can choose a convenient investment strategy based on personal needs and experience. Hodler offers a full set of tools to manage your potential profit and risks to satisfy any investor. To effectively use Hodler and understand how it works in detail, follow these steps:</p>
                <ol className='list-decimal px-6 py-2'>
                    <li>How to open Hodler - enjoy a simple and intuitive interface with nothing extra.</li>
                    <li>Price direction - get benefits both from a bear market or bull run.</li>
                    <li>Multiplier - manage your investment risk.</li>
                    <li>Take profit and Stop Loss levels - adjust how much you want to get or how little you want to lose.</li>
                    <li>Closing options - close your positions manually or leave it to us.</li>
                    <li>Fees - pay the only and the smallest fee for crypto trading.</li>
                    <li>Risk disclosure - you can lose more than you invest.</li>
                </ol>
                <h2 className='text-xl font-bold'>How to benefit more</h2>
                <p>Besides the profit, you can benefit even more from the Hodler combination with other products.</p>
                <ul className='list-disc px-6 py-2'>
                    <li>MultiHODL + Savings. Each open MultiHODL increases your default savings limit by the position volume. Therefore, you can earn more interest from your assets.</li>
                </ul>
                <p>For any questions, you can reach our support team.</p>
            </div>
        </div>
    )
}

export const HodlerhelpTwo = () => {
    const [name, setName] = useState('How to start a Hodler')
    const navigate = useNavigate()
    

    return (
        <div className='p-6'>
            <div className='bg-blue-500 p-6 -mx-6 -mt-6'>
                <div className='flex items-center gap-4 text-white'>
                    <SiShopware color='white' size={35} />
                    <p className='uppercase font-semibold'>WeHodler</p>
                </div>
                <div className='mt-4'>
                    <p>Hello there</p>
                    <p>Get help from support right away after looking at the various articles.</p>
                </div>
            </div>
            <div>
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Hodler</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>To start Hodler follow these simple steps:</p>
                <ol className='list-decimal px-6 py-2'>
                    <li>Go to the Hodler section in the dashboard</li>
                    <video width="100%" autoPlay muted>
                        <source src={hodlertwo} type="video/mp4" />
                        Sorry, your browser doesn't support videos.
                    </video>
                    <li className='mt-4'>Fill out the Hodler form</li>
                    <img src={hodlerone} alt="" className='block w-[90%] mx-auto my-4' />
                    <p>There you can set the desired Hodler parameters:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>The currency pair and price direction you'd like to invest - choose the crypto pair (BTC/USDT and many others) you want to use and price direction to gain profit from price growth or price drop.</li>
                        <li>Amount and source of funds - choose the input currency (from your wallet) and the initial amount of investments.</li>
                        <li>Multiplier - choose the desired Hodler leverage.</li>
                        <li>Take Profit and Stop Loss levels - set any Take Profit and Stop Loss level you want. You can change both levels anytime later after you open Hodler.</li>
                    </ul>
                    <li>Once you set all parameters, press the <strong>Start</strong> button.</li>
                    <li>You can watch your Hodler progress in the Hodler/Portfolio section. </li>
                </ol>
                <p className='font-semibold'>Important to know:</p>
                <ul className='font-semibold list-disc px-6 py-2'>
                    <li>We use market execution at a number of integrated exchanges. After you click/tap the "Start" button, the platform creates an order on the exchange in real-time. Therefore, the factual initial price of your Hodler may vary from the chart price;</li>
                    <li>The max total volume of the opened positions per account may vary.</li>
                </ul>
            </div>
        </div>
    )
}

export const HodlerhelpThree = () => {
    const [name, setName] = useState('How the multiplier works')
    const navigate = useNavigate()

    return (
        <div className='p-6'>
            <div className='bg-blue-500 p-6 -mx-6 -mt-6'>
                <div className='flex items-center gap-4 text-white'>
                    <SiShopware color='white' size={35} />
                    <p className='uppercase font-semibold'>WeHodler</p>
                </div>
                <div className='mt-4'>
                    <p>Hello there</p>
                    <p>Get help from support right away after looking at the various articles.</p>
                </div>
            </div>
            <div>
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Hodler</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Hodler multiplier leverage</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-3'>
                <h2 className='font-bold'>What is the Multiplier section?</h2>
                <p>The Multiplier section settings allow managing your investment risk by increasing or decreasing the amount of leverage. The more the multiplier value is, the more profitable the deal is. You can toggle the multiplier to choose from 0 to 50. Please note that the higher the multiply value is, the riskier the investment. </p>
                <h2 className='font-bold'>How to change the Multiply level?</h2>
                <p>You can change the Multiplier level by dragging the tumbler from left to right between 0 and x50. Once you set the Multiplier level for your Hodler deal, you can proceed to the Take Profit and Stop Loss settings.</p>
            </div>
        </div>
    )
}

export const HodlerhelpFour = () => {
    const [name, setName] = useState('Hodler Take profit & Stop Loss')
    const navigate = useNavigate()

    return (
        <div className='p-6'>
            <div className='bg-blue-500 p-6 -mx-6 -mt-6'>
                <div className='flex items-center gap-4 text-white'>
                    <SiShopware color='white' size={35} />
                    <p className='uppercase font-semibold'>WeHodler</p>
                </div>
                <div className='mt-4'>
                    <p>Hello there</p>
                    <p>Get help from support right away after looking at the various articles.</p>
                </div>
            </div>
            <div>
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Hodler</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How "Adjust TP &amp; SL" works</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='font-bold text-lg'>What is TP &amp; SL?</h2>
                <p>Take profit and Stop loss levels allow the Hodler user to choose and manage their investment risk according to their needs by setting preferred closing prices for your deal.</p>
                <h2 className='font-bold text-lg'>What does Stop Loss work?</h2>
                <p>If the coin price drops below the Stop Loss level (or rises above for the DOWN direction), WeHodler automatically closes the position. There's a minimum required Stop Loss price for each Multiplier level both for the UP and DOWN direction. You can set any Stop Loss price (or price change in percent) above this level. The Stop Loss ll is a required field, and it is always set to the maximum value by default.</p>
                <h2 className='font-bold text-lg'>What does Take Profit work?</h2>
                <p>Once the Take Profit price is reached, WeHodler closes your position. The default Take Profit level is set at the max. possible value based on the current market conditions. But you can adjust it according to your preferences and edit it as well after Hodler opening in the deal detailed view.</p>
                <div className='font-semibold'>
                    <h2>Please be advised:</h2>
                    <ul className='list-disc px-6 py-2'>
                        <li>The max level of Stop Loss and Take Profit may be limited. On the Take Profit/Stop Loss adjust page you may see all the parameters and max/min limits.</li>
                        <li>On the huge market movements, there could be some slippage and the actual close price may be slightly different from the level you set.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const HodlerhelpFive = () => {
    const [name, setName] = useState('How to close Hodler')
    const navigate = useNavigate()

    return (
        <div className='p-6'>
            <div className='bg-blue-500 p-6 -mx-6 -mt-6'>
                <div className='flex items-center gap-4 text-white'>
                    <SiShopware color='white' size={35} />
                    <p className='uppercase font-semibold'>WeHodler</p>
                </div>
                <div className='mt-4'>
                    <p>Hello there</p>
                    <p>Get help from support right away after looking at the various articles.</p>
                </div>
            </div>
            <div>
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Hodler</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Hodler closing conditions</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='font-bold text-lg'>How to manually close your Hodler?</h2>
                <p>To manually close your position, please go to the Hodler/Portfolio section in your account. Then select the Hodler deal you want to close and press <strong>Close now</strong> button.</p>
                <img src={tpone} alt="tp" className='block mx-auto w-[90%] my-4' />
                <p>You will see the popup with closing parameters</p>
                <p>After you press the Close now button, our platform automatically closes your Hodler. The invested funds will either yield a profit or loss which will appear in your Wallet balance.</p>
                <h2 className='font-bold text-lg'>Hodler auto-closing options</h2>
                <ul className='list-disc px-6 py-2'>
                    <li><strong>Take Profit</strong>. When the price of the invested crypto reaches the Take Profit level, you receive all invested funds and the profit gained during the Hodler. Hourly, and Profit share fees will be charged. Take Profit is a manual option and you should set it manually on your Hodler;</li>
                    <li><strong>Stop Loss</strong>. If the price of the crypto reaches the Stop Loss level, Hodler will be closed and the rest of the funds (if it's not a 100% loss) will be deposited back into the wallet. Stop Loss is a required field and is set by default, but you can change it manually to control your risks;</li>
                    <li><strong>Insufficient collateral</strong>. A very rare case is when the loss accrued eats all the liquidity (initial collateral) of your position. In this case, WeHodler is forced to close your Hodler. </li>
                </ul>
                <div className='font-semibold'>
                    <h3 className='text-lg'>Please be advised:</h3>
                    <ul className='list-disc px-6 py-2'>
                        <li>The financial result you see on the “Close and get” button is only an estimation based on the latest available market price.</li>
                        <li>After you press "Close now" the platform creates an order on the market exchange in real time, taking the next available market price. Therefore, the closing price of the transaction in the platform and the price of the real execution may vary.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const HodlerhelpSix = () => {
    const [name, setName] = useState('Hodler Price Direction')
    const navigate = useNavigate()

    return (
        <div className='p-6'>
            <div className='bg-blue-500 p-6 -mx-6 -mt-6'>
                <div className='flex items-center gap-4 text-white'>
                    <SiShopware color='white' size={35} />
                    <p className='uppercase font-semibold'>WeHodler</p>
                </div>
                <div className='mt-4'>
                    <p>Hello there</p>
                    <p>Get help from support right away after looking at the various articles.</p>
                </div>
            </div>
            <div>
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Hodler</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to benefit from market movements</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>With our unique Hodler instrument, there is an opportunity to profit not only from price growth but from price drops as well.</p>
                <p>The difference between the UP and DOWN options is simple:</p>
                <ul className='list-disc px-6 py-2 flex flex-col gap-2'>
                    <li>In the case of the <strong>UP</strong> direction, if the price of the crypto asset that you chose for example BTC grows - you profit;</li>
                    <li>In the case of the <strong>DOWN</strong> option, if the price of the crypto assets drops - you profit.</li>
                </ul>
                <p>With these two options, we present the opportunity to be on top of the market, no matter if it rises or drops.</p>
            </div>
        </div>
    )
}

export const HodlerhelpSeven = () => {
    const [name, setName] = useState('Hodler Risks')
    const navigate = useNavigate()

    return (
        <div className='p-6'>
            <div className='bg-blue-500 p-6 -mx-6 -mt-6'>
                <div className='flex items-center gap-4 text-white'>
                    <SiShopware color='white' size={35} />
                    <p className='uppercase font-semibold'>WeHodler</p>
                </div>
                <div className='mt-4'>
                    <p>Hello there</p>
                    <p>Get help from support right away after looking at the various articles.</p>
                </div>
            </div>
            <div>
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Hodler</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Hodler Risk disclosure</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='font-bold text-lg'>What are Hodler risks?</h2>
                <p>Hodler involves trading futures which may not be suitable for all investors. You may lose a substantial amount of money in a very short period of time. The amount you may lose is potentially unlimited and can exceed the amount you originally invested. </p>
                <p>This is because the multiplier is highly leveraged, with a relatively small amount of money used to establish a position with a much greater value. If you're uncomfortable with this level of risk, you should not trade with the Hodler.</p>
                <h2 className='font-bold text-lg'>How to manage your risk?</h2>
                <img src={tptwo} alt="tptwo" className='block my-4 mx-auto w-[90%]' />
                <p>You can manage the risk by setting Take Profit and Stop Loss levels. The max loss amount is visible when you set a Stop Loss level on the Hodler page. Max loss can be set up to 100% of initial collateral when you select a default Stop Loss level.</p>
                <p>Your position will be closed automatically after the price reaches the Stop Loss level.</p>
            </div>
        </div>
    )
}

export const HodlerhelpEight = () => {
    const [name, setName] = useState('Hodler Fees & Specifications')
    const navigate = useNavigate()

    return (
        <div className='p-6'>
            <div className='bg-blue-500 p-6 -mx-6 -mt-6'>
                <div className='flex items-center gap-4 text-white'>
                    <SiShopware color='white' size={35} />
                    <p className='uppercase font-semibold'>WeHodler</p>
                </div>
                <div className='mt-4'>
                    <p>Hello there</p>
                    <p>Get help from support right away after looking at the various articles.</p>
                </div>
            </div>
            <div>
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Hodler</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How the rollover fee works</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='font-bold text-xl'>Fees</h2>
                <p>Hodler includes a trading fee - the main trading fee that you pay for every fixed period of time. This is a minimal payment, that allows us to create a Hodler deal and use its benefits.</p>
                <p>WeHodler charges a 0.02% fee for every buy or sell hodler deal on your account. This is relative to the trading pair and currency.</p>
                <div className='font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>Fee conditions may vary. The actual terms and conditions are shown on the Hodler form on the platform.</li>
                        <li>Opening new operations and closing active operations is not possible outside trading time.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const HodlerhelpNine = () => {
    const [name, setName] = useState('Hodler Index Specifications')
    const navigate = useNavigate()

    return (
        <div className='p-6'>
            <div className='bg-blue-500 p-6 -mx-6 -mt-6'>
                <div className='flex items-center gap-4 text-white'>
                    <SiShopware color='white' size={35} />
                    <p className='uppercase font-semibold'>WeHodler</p>
                </div>
                <div className='mt-4'>
                    <p>Hello there</p>
                    <p>Get help from support right away after looking at the various articles.</p>
                </div>
            </div>
            <div>
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Hodler</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-3'>
                <p>An index is a financial metric used to track the performance of a group of assets. It provides a summary of the performance of multiple assets and is typically used as a benchmark to compare individual investments.</p>
                <p>WeHodler has launched a new crypto index (ticker: MHIK), which is composed of a list of cryptocurrencies traded against USDT. The index is calculated using a simple formula based on the sum of the products of the weight (shares) and the coin quote (price) for each asset.</p>
                <p>Formula:</p>
                <p>The current value of the index (Index(t)) is calculated as the sum of the products of the weight (Shares) and the coin quote (Price(t)) for each asset:</p>
                <p>Index(t) = ∑ (Shares * Price(t))</p>
                <p>Where:</p>
                <ul className='list-disc px-6 py-2'>
                    <li>Index(t) is the value of the index at time t</li>
                    <li>Shares are the number of shares held for each asset in the index</li>
                    <li>Price(t) is the current price of each asset at time t</li>
                </ul>
                <p>The composition of the index is rebalanced periodically to ensure that it remains representative of the performance of the underlying assets.</p>
                <p>Launch Date: <br /> The WeHodler Crypto Index was launched on May 1, 2023.</p>
                <p>Index Composition on April 1, 2023:</p>
                <table className='w-[90%] mx-auto my-4 border'>
                    <thead>
                        <tr>
                            <td className='p-4 border font-semibold'>Symbol</td>
                            <td className='p-4 border font-semibold'>Shares</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='p-4 border'>1INCH/USDT</td>
                            <td className='p-4 border'>45.12283</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>AAVE/USDT</td>
                            <td className='p-4 border'>0.50223</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>ADA/USDT</td>
                            <td className='p-4 border'>64.1038</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>APE/USDT</td>
                            <td className='p-4 border'>6.0050</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>ATOM/USDT</td>
                            <td className='p-4 border'>2.17786</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>AVAX/USDT</td>
                            <td className='p-4 border'>1.42503</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>AXS/USDT</td>
                            <td className='p-4 border'>2.9986</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>BAT/USDT</td>
                            <td className='p-4 border'>96.3453</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>BCH/USDT</td>
                            <td className='p-4 border'>0.2016</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>BNB/USDT</td>
                            <td className='p-4 border'>0.0986</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>BTC/USDT</td>
                            <td className='p-4 border'>0.00096</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>CAKE/USDT</td>
                            <td className='p-4 border'>6.6676</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>COMP/USDT</td>
                            <td className='p-4 border'>0.56861</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>DASH/USDT</td>
                            <td className='p-4 border'>0.51177</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>DOGE/USDT</td>
                            <td className='p-4 border'>314.37886</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>EGLD/USDT</td>
                            <td className='p-4 border'>0.5862</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>EOS/USDT</td>
                            <td className='p-4 border'>20.0596</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>ETH/USDT</td>
                            <td className='p-4 border'>0.01586</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>GALA/USDT</td>
                            <td className='p-4 border'>604.586</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>GMT/USDT</td>
                            <td className='p-4 border'>62.53500</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>LINK/USDT</td>
                            <td className='p-4 border'>3.63600</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>LTC/USDT</td>
                            <td className='p-4 border'>0.31500</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>MANA/USDT</td>
                            <td className='p-4 border'>42.22300</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>NEAR/USDT</td>
                            <td className='p-4 border'>12.33800</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>OMG/USDT</td>
                            <td className='p-4 border'>15.1240</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>SAND/USDT</td>
                            <td className='p-4 border'>39.6600</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>SNX/USDT</td>
                            <td className='p-4 border'>9.93045</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>SOL/USDT</td>
                            <td className='p-4 border'>1.33300</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>SUSHI/USDT</td>
                            <td className='p-4 border'>23.51120</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>TRX/USDT</td>
                            <td className='p-4 border'>362.3500</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>UNI/USDT</td>
                            <td className='p-4 border'>4.03500</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>XLM/USDT</td>
                            <td className='p-4 border'>228.7204</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>XRP/USDT</td>
                            <td className='p-4 border'>44.03500</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>XTZ/USDT</td>
                            <td className='p-4 border'>22.2200</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>YFI/USDT</td>
                            <td className='p-4 border'>0.00300</td>
                        </tr>
                        <tr>
                            <td className='p-4 border'>ZIL/USDT</td>
                            <td className='p-4 border'>857.10300</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const Hodlerhelp = () => {
    const [name, setName] = useState('Hodler')
    const navigate = useNavigate()
  return (
    <div className='p-6'>
        <div className='bg-blue-500 p-6 -mx-6 -mt-6'>
            <div className='flex items-center gap-4 text-white'>
                <SiShopware color='white' size={35} />
                <p className='uppercase font-semibold'>WeHodler</p>
            </div>
            <div className='mt-4'>
                <p>Hello there</p>
                <p>Get help from support right away after looking at the various articles.</p>
            </div>
        </div>
        <div>
            <p className='my-4'><span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> <span className='text-gray-500'>&gt; {name}</span></p>
            <FiBarChart2 size={40} color='#3b82f6' />
            <h2 className='text-2xl font-bold uppercase my-3'>{name}</h2>
            <p>How to enlarge crypto assets while keeping them safe.</p>
            <p className='text-gray-500'>9 articles</p>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <Link to={`/help/hodlerhelp/hodlerhelpone`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How Hodler works</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`/help/hodlerhelp/hodlerhelptwo`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to start a Hodler</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`/help/hodlerhelp/hodlerhelpthree`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How the multiplier works</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`/help/hodlerhelp/hodlerhelpfour`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Hodler Take profit &amp; Stop Loss</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`/help/hodlerhelp/hodlerhelpfive`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to close Hodler</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`/help/hodlerhelp/hodlerhelpsix`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Hodler Price Direction</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`hodlerhelpseven`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Hodler Risks</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`/help/hodlerhelp/hodlerhelpeight`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Hodler Fees &amp; Specifications</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`/help/hodlerhelp/hodlerhelpnine`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Hodler Index Specifications</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
        </div>

        <div className='my-10'>
            <div className='flex items-center gap-3 text-gray-200 justify-center'>
                <SiShopware color='#e5e7eb' size={35} />
                <p className='uppercase font-semibold'>WeHodler</p>
            </div>
        </div>
    </div>
  )
}

export default Hodlerhelp