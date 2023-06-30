import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { BiCoinStack } from 'react-icons/bi'
import { MdOutlineKeyboardArrowRight, MdArrowRight } from 'react-icons/md'
import { RiArrowDownSFill } from 'react-icons/ri'
import { SiShopware } from 'react-icons/si'
import { Link } from 'react-router-dom'
import loanscreenshot from '../data/loanscreenshot.png'
import closeloanscreenshot from '../data/closeloanscreenshot.png'
import loanfourscreenshot from '../data/loanfourscreenshot.png'

export const LoanhelpOne = () => {
    const [name, setName] = useState('How crypto-backed loans work')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Loans</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-500'>General conditions</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-3'>
                <p>Crypto investors like any other investors buy various cryptocurrencies and wait for the market price to jump up. But, in this case, their investments are "frozen" in the crypto. For instance, you as an investor buy BTC for 10k EUR. This 10K is frozen until you sell BTC (perhaps after the price grows up). </p>
                <p>This is the exact moment when crypto loans prove to be very helpful. The investor can borrow a part of the market crypto value of the crypto, use it for any purpose, and afterward pay back the loan and get back the exact crypto amount. Eventually, it is the same result as with the classic investment, but you as an investor are able to use the value of your crypto funds.</p>
                <p>WeHodler provides their users with an option to get a loan using crypto or stablecoins assets as collateral. In return, the user instantly receives an agreed loan amount in USD, EUR, GBP, CHF, BTC, or Stablecoins. After repaying the loan, the user gets the collateral back, even if it has increased in value.</p>
                <div>
                    <p>To understand the product in detail, follow these simple steps:</p>
                    <ol>
                        <a href={`loanhelptwo`} className='underline text-blue-500'> <li>How to get a loan</li> </a>
                        <a href={`loanhelpseven`} className='underline text-blue-500'> <li>How to repay your loan</li> </a>
                        <a href={`loanhelpsix`} className='underline text-blue-500'> <li>Frequently asked questions</li> </a>
                    </ol>
                </div>
                <p className='font-semibold'>For any questions, you can reach our support team via chat or support@wehodler.com.</p>
            </div>
        </div>
    )
}

export const LoanhelpTwo = () => {
    const [name, setName] = useState('How to get a loan')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Loans</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-500'>Borrow cash, USDT or crypto</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-3'>
                <p>WeHodler provides their users with an option to get a loan using crypto or stablecoins asset as collateral. In return, the user instantly receives an agreed loan amount in other (USD, EUR, GBP, CHF, BTC and Stablecoins). After repaying the loan, the user gets his/her collateral back, even if it has increased in value.</p>
                <p>To get a loan, go to the Loans page after logging in and click the <span className='font-semibold'>Create new loan</span> button.</p>
                <p className='my-4 text-xl font-bold'>Loans</p>
                <p>There you will find the loan calculator. All you need is to choose the <span className='font-semibold'>Crypto</span> you want to use as <span className='font-semibold'>Collateral</span>, the desired <span className='font-semibold'>Loan Amount</span> in fiat or cryptocurrency, and a comfortable <span className='font-semibold'>Loan Tariff (LTV)</span>. You can see how much crypto you need to deposit to get a loan in the <span className='font-semibold'></span>Crypto Collateral field right after you filled the <span className='font-semibold'>Loan Amount</span> field. </p>
                <p className='capitalize font-bold my-4 text-xl'>Get loan</p>
                <img src={loanscreenshot} alt="" />
                <p className='mt-2'>After you fill out the loan parameters, review the Terms of Service, and toggle on the switcher. Once you're ready, click on the <span className='font-semibold'>GET LOAN</span> button. Your borrowed funds will appear in the Wallet section of your account. You can watch your loans in the Loans section of your account.</p>
                <div>
                    <p className='mb-3 font-semibold'>Please be advised:</p>
                    <ul className='list-disc py-2 px-6'>
                        <li className='font-semibold mb-1'>You can explore all terms used in the loan form and platform (such as "LTV", "PDL", etc.) in our Glossary;</li>
                        <li className='font-semibold mb-1'>The minimum loan amount is 100 USD;</li>
                        <li className='font-semibold mb-1'>Make sure you review the Terms of Service before you take a loan;</li>
                        <li className='font-semibold mb-1'>The max total borrowed amount of the loans may vary.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const LoanhelpThree = () => {
    const [name, setName] = useState('How the Price Down Limit works')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Loans</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div>
                <p className='my-6'>WeHodler reserves the right to sell the collateral in the event of the collateral cryptocurrency price decreasing below a certain level ( e.g. "Margin Call level" or “Price Down Limit”). The available “Price Down Limits” for all loans offered on the platform are visible on our tariff plans and also included in the "Individual Agreements" for each loan granted. </p>
                <p>For users, that means, when the price drops below the “Price Down Limit” (PDL) level, WeHodler is forced to sell users' collateral and close the deal. But no worries!</p>
                <ul className='list-disc py-2 px-6'>
                    <li>You do not need to pay anything. In this case, you are already on the safe side, meaning you are already sold your coins at a better price;</li>
                    <li>You will also be notified by email in advance in case of the price of your collateral drops more than 2/3 of the Price Down Limit;</li>
                    <li>YouHodler offers very competitive PDL levels. Hence, in the case of  “Margin Call” you simply buy almost the same amount of coins for fiat you received from your loan earlier.</li>
                </ul>
                <p className='font-semibold'>Please be advised:</p>
                <ul className='list-disc py-2 px-6 font-semibold'>
                    <li>Learn more about PDL in Terms of Service;</li>
                    <li>Please be advised that the Margin Call (PDL) notification is a supportive feature that doesn't affect the terms and conditions of the operation. Once the price reaches the PDL level, the loan will be closed.</li>
                </ul>
            </div>
        </div>
    )
}

export const LoanhelpFour = () => {
    const [name, setName] = useState('How the "Close Now" feature works on an opened loan')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Loans</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400 mb-2'>Use the collateral value to repay your loan</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6'>
                <p>This feature allows repaying the loan using your loan collateral market value. Our platform automatically sells the collateral and uses the profit to cover the loan repayment. The remaining cryptocurrency appears in your Wallet.</p>
                <p className='my-2'>To use this feature, please go to the <span className='font-semibold'>My Loans</span> section and click the "Close Now" button found on the card of your active loan.</p>
                <p>There you will see the following operation parameters: </p>
                <ul className='list-disc py-2 px-6'>
                    <li><span className='font-semibold'>Current collateral price </span>- the current market value of your collateral;</li>
                    <li><span className='font-semibold mb-1'>Outstanding loan</span> - the amount you need to repay to close your loan;</li>
                    <li><span className='font-semibold mb-1'>Collateral repayment</span> - how much of your collateral is taken to repay the loan;</li>
                    <li><span className='font-semibold mb-1'>Collateral return</span> - the amount of collateral that appears in your WeHodler crypto wallet after applying the Close now feature.</li>
                    <li><span className='font-semibold mb-1'>Service fee</span> - loan closing commission;</li>
                </ul>
                <div>
                    <p className='my-4 font-bold text-xl'>Close loan</p>
                    <img src={closeloanscreenshot} alt="" />
                    <p className='my-4'>Once you check all numbers, press the Close Loan Now button.</p>
                    <p className='my-4 font-semibold'>Please be advised:</p>
                    <ul className='list-disc py-2 px-6'>
                        <li className='font-semibold mb-1'>This operation requires a service fee. You can see the amount on the Close Now page;</li>
                        <li className='font-semibold mb-1'>All operations are executed on real crypto exchanges. Hence, the price rate and time of the transactions may vary.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const LoanhelpFive = () => {
    const [name, setName] = useState('Loan daily fees')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Loans</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400 mb-2'>Loan fee specifications</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6'>
                <p>WeHodler charges only one fee for using the loan - a daily fee (interest fee). The key feature of the commission is that it charged daily only for the days the loan was actually open. </p>
                <div>
                    <h2 className='font-bold text-[20px] my-4'>How the fee is calculated</h2>
                    <p>The loan fee is shown on the loan opening form and can be viewed in the loan detailed view after opening the loan as well.  The fee is calculated in % from the loan borrowed amount (not from the overdraft amount) and in the loan borrowed currency. The loan commission is collected after 24 hours from the moment of opening the loan and then daily at the same time. </p>
                </div>
                <div>
                    <h2 className='font-bold text-[20px] my-4'>How to pay the loan fee</h2>
                    <p className='my-3 font-bold text-lg'>Pay from the wallet</p>
                    <ul className='list-disc py-2 px-6'>
                        <li>In that case, the fee is collected from your wallet (a borrowed currency of the loan) if you have enough balance on it.</li>
                    </ul>
                    <p className='my-3 font-bold text-lg'>Add it to the loan repayment</p>
                    <ul className='list-disc py-2 px-6'>
                        <li>If you don't have enough balance in your wallet (a borrowed currency of the loan), the fee will be <span className='font-semibold'>added to the loan debt (repayment amount)</span>. But in this case, the fee is higher. </li>
                    </ul>
                    <p className='font-semibold my-3'>Please be advised:</p>
                    <ul className='list-disc py-2 px-6'>
                        <li className='font-semibold'>The actual fees are available on the loan form inside the platform.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const LoanhelpSix = () => {
    const [name, setName] = useState('Loan FAQ')
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)
    const [six, setSix] = useState(false)
    const [seven, setSeven] = useState(false)
    const [eight, setEight] = useState(false)
    const [nine, setNine] = useState(false)
    const [ten, setTen] = useState(false)
    const [eleven, setEleven] = useState(false)
    const [twelve, setTwelve] = useState(false)
    const [thirteen, setThirteen] = useState(false)
    const [fourteen, setFourteen] = useState(false)
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Loans</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Frequently asked questions</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6'>
                <div>
                    <div onClick={()=> setOne(!one)} className='flex items-center gap-2 cursor-pointer'>
                        {!one ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>How crypto-backed loans works</p>
                    </div>
                    {one && <div className='px-6 py-2'>
                        <p className='text-gray-600'>The crypto-backed loan works similar to regular loan with collateral, but in this case, as collateral you use crypto. Crypto investors like any other investors buy various cryptocurrencies and wait for the market price to jump up. But, in this case, their investments are "frozen" in the crypto. For instance, you as an investor buy BTC for 10k EUR. This 10K is frozen until you sell BTC (perhaps after the price grows up).</p>
                        <p className='text-gray-600'>This is the exact moment when crypto loans prove to be very helpful. The investor can borrow a part of the market crypto value of the crypto, use it for any purpose, and afterward pay back the loan and get back the exact crypto amount. Eventually, it is the same result as with the classic investment, but you as an investor are able to use the value of your crypto funds.</p>
                        <p className='mt-2 text-gray-600'>WeHodler provides their users with an option to get a loan using crypto or stablecoins assets as collateral. In return, the user instantly receives an agreed loan amount in USD, EUR, GBP, CHF, BTC, or Stablecoins. After repaying the loan, the user gets the collateral back, even if it has increased in value.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setTwo(!two)} className='flex items-center gap-2 cursor-pointer'>
                        {!two ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>How can I get a loan</p>
                    </div>
                    {two && <div className='px-6 py-2'>
                        <p className='text-gray-600'>To get a loan, go to the Loans page and click the Create new loan button. There you will find the loan calculator. All you need is to choose the Crypto you want to use as Collateral, the desired Loan Amount in fiat or cryptocurrency, and a comfortable Loan Tariff (LTV). You can see how much crypto you need to deposit to get a loan in the Crypto Collateral field right after you filled the Loan Amount field.</p>
                        <p className='mt-2 text-gray-600'>After you fill out the loan parameters, review the Terms of Service, and toggle on the switcher. Also, you can set a desired Take Profit level for your loan using the Set Take Profit feature. Once you're ready, click on the GET LOAN button. Your borrowed funds will appear in the Wallet section of your account. You can watch your loans in the Loans section of your account.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setThree(!three)} className='flex items-center gap-2 cursor-pointer'>
                        {!three ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>Why is my loan not opening?</p>
                    </div>
                    {three && <div className='px-6 py-2'>
                        <p className='text-gray-600'>If the collateral amount (and therefore the loan amount) is relatively big (usually, more than $100,000 equivalent), the loan can be subject to manual approval by the Team. In that case you can reach the customer service via online chat or by sending an email to <a href="mailto:support@wehodler.com" className='underline text-blue-500 cursor-pointer'>support@wehodler.com</a> , to check the loan status, or cancel the loan request and simply split the loan in two smaller amounts.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setFour(!four)} className='flex items-center gap-2 cursor-pointer'>
                        {!four ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>What is LTV?</p>
                    </div>
                    {four && <div className='px-6 py-2'>
                        <p className='text-gray-600'>LTV stands for Loan-To-Value ratio. The amount of fiat funds that you can receive in exchange for your cryptocurrency used as collateral for a crypto-backed loan. This is typically represented in percentages. E.g. 80% LTV means clients borrow 80% of the crypto collateral's value.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setFive(!five)} className='flex items-center gap-2 cursor-pointer'>
                        {!five ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>How much crypto do I need to take X loan on your platform?</p>
                    </div>
                    {five && <div className='px-6 py-2'>
                        <p className='text-gray-600'>It is possible to borrow only a part of the collateral value. The part of the collateral value represents by the LTV level of the particular loan tariff and is typically represented in percentages. E.g. 80% LTV means clients borrow 80% of the crypto collateral’s value. Future loan parameters, including LTV, can be checked.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setSix(!six)} className='flex items-center gap-2 cursor-pointer'>
                        {!six ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>What is the loan term</p>
                    </div>
                    {six && <div className='px-6 py-2'>
                        <p className='text-gray-600'>The loan can be opened for a maximum term of 364 days. On the loan widget, there is a field <span className='font-semibold'>Repay until</span>, which shows the date of the last day of the loan.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setSeven(!seven)} className='flex items-center gap-2 cursor-pointer'>
                        {!seven ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>How can I repay my loan</p>
                    </div>
                    {seven && <div className='px-6 py-2'>
                        <p className='text-gray-600'>WeHodler provides several options to repay your loan using Crypto, Bank Wire, Apple Pay, AdvCash (incl. Credit Card), From your wallet and Close now feature.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setEight(!eight)} className='flex items-center gap-2 cursor-pointer'>
                        {!eight ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>What is a loan fee and how is it calculated</p>
                    </div>
                    {eight && <div className='px-6 py-2'>
                        <p className='text-gray-600'>The fee is calculated in % from the loan borrowed amount (not from the overdraft amount) and in the loan borrowed currency. The actual fees are available on the loan form inside the platform. The loan commission is collected after 24 hours from the moment of opening the loan and then daily at the same time. The loan fee is shown on the loan opening form and can be viewed in the loan detailed view after opening the loan as well.</p>
                        <p className='mt-4 text-gray-600'>There are 2 ways the loan fee can be paid:</p>
                        <ol className='my-3 px-6 list-decimal text-gray-600'>
                            <li>From the wallet. In that case, the fee is collected from the client's wallet (a borrowed currency of the loan) if you have enough balance on it.</li>
                            <li>Add it to the loan repayment. If the client doesn't have enough balance in his wallet (a borrowed currency of the loan), the fee will be <span className='font-semibold'> added to the loan debt (repayment amount)</span>. But in this case, the fee is higher.</li>
                        </ol>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setNine(!nine)} className='flex items-center gap-2 cursor-pointer'>
                        {!nine ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>What happens if I don't repay the loan?</p>
                    </div>
                    {nine && <div className='px-6 py-2'>
                        <p className='text-gray-600'>For Loans that are created after 05.10.2022 max loan duration is 364 days. Once this term passed, the loan will be closed automatically. If the loan is closed without repayment, all borrowed funds will be kept by the customer.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setTen(!ten)} className='flex items-center gap-2 cursor-pointer'>
                        {!ten ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>Can you reopen my closed loan?</p>
                    </div>
                    {ten && <div className='px-6 py-2'>
                        <p className='text-gray-600'>If the loan was closed it can't be reopened, since the loan collateral will be sold in order to cover the loan repayment to avoid the financial losses of the company.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setEleven(!eleven)} className='flex items-center gap-2'>
                        {!eleven ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>What are the minimum and maximum amounts to start a loan?</p>
                    </div>
                    {eleven && <div className='px-6 py-2'>
                        <p className='text-gray-600'>The minimum loan amount is 100 USD equivalent. There is no max cap for the loan. To get a custom loan tariff, you need to contact customer service via online chat or by sending an email to <a href="mailto:support@wehodler.com" className='underline text-blue-500'>support@wehodler.com</a>.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setTwelve(!twelve)} className='flex items-center gap-2 cursor-pointer'>
                        {!twelve ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>Can I earn interest on crypto used as collateral for the loan?</p>
                    </div>
                    {twelve && <div className='px-6 py-2'>
                        <p className='text-gray-600'>No, crypto collateral does not earn interest. However, the borrowed funds (stablecoins or crypto) earn interest when they are kept in your WeHodler account.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setThirteen(!thirteen)} className='flex items-center gap-2 cursor-pointer'>
                        {!thirteen ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>Can I use fiat (USD) as collateral?</p>
                    </div>
                    {thirteen && <div className='px-6 py-2'>
                        <p className='text-gray-600'>Yes, fiat currency (USD, EUR, GBP, CHF) can be used to borrow crypto such as BTC, ETH, XRP, etc.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setFourteen(!fourteen)} className='flex items-center gap-2 cursor-pointer'>
                        {!fourteen ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>Can I use stablecoins as collateral?</p>
                    </div>
                    {fourteen && <div className='px-6 py-2'>
                        <p className='text-gray-600'>Yes, USDT or USDC can be used to borrow crypto such as BTC, ETH, XRP, etc.</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export const LoanhelpSeven = () => {
    const [name, setName] = useState('How to repay a loan')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Loans</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Loan repayment options</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6'>
                <div>
                    <h2 className='font-bold text-xl text-center mb-2'>Loan repayment</h2>
                    <p>WeHodler provides several options to repay your loan using crypto, fiat, or stablecoins:</p>
                    <ul className='list-disc my-4 px-6'>
                        <li><strong className='text-blue-500'>Crypto</strong> - repay your loan in any crypto using the Convert feature inside the platform;</li>
                        <li><strong className='text-blue-500'>Bank Wire</strong> - repay your using a bank wire (Please be advised that to unlock the bank wire option, you need to verify your address. The process could take up to 12 hours);</li>
                        <li><strong className='text-blue-500'>Apple Pay</strong> - repay your loan with a fast Apple pay deposit option and the Convert feature inside the platform;</li>
                        <li><strong className='text-blue-500'>From your wallet</strong> - repay your loan using fiat or stablecoins from your wallet;</li>
                        <li><strong className='text-blue-500'>Close now</strong> - repay your loan using your collateral's market value;</li>
                        <li><strong className='text-blue-500'>AdvCash <span className='text-black'>(incl. Credit Card)</span></strong> - repay your loan using AdvCash with a debit/credit card. (Please be advised that the Bank Card verification could take up to 12 hours).</li>
                    </ul>
                </div>
                <div className='mt-4'>
                    <h2 className='font-bold text-xl text-center mb-2'>Loan commissions</h2>
                    <p>The commission is collected at the moment of opening the loan and then every 24 hours. There are two ways to count the commission:</p>
                    <ul className='list-disc my-4 px-6'>
                        <li>The Fee is collected from the wallet (currency of the loan) if you have enough balance on it;</li>
                        <li>The fee is added to the debt if you don't have enough balance on the wallet (currency of the loan). In this case, the commission is higher. The commission is calculating based on the borrowed amount only (not on the overdraft amount);</li>
                        <li>The actual fees are visible in the loan card/form inside the platform.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const LoanhelpEight = () => {
    const [name, setName] = useState('How to repay a loan using crypto')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Loans</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Use crypto funds to pay an outstanding loan amount</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>

            <div className='mt-6'>
                <p>You can repay your loan using any of the accepted coins. First, you need to deposit a certain amount of crypto funds and then convert your crypto to fiat (USD or EUR). After you receive USD or EUR funds, you can repay your loan using funds from your wallet.</p>
                <p className='font-semibold my-2'>Please be advised:</p>
                <ul className='font-semibold px-6 py-2 list-disc'>
                    <li>We highly recommend converting your crypto to the currency of your loan;</li>
                    <li>The execution of crypto-to-fiat conversion may take some time because of the real market execution of the conversion orders.  </li>
                </ul>
            </div>
        </div>
    )
}

export const LoanhelpNine = () => {
    const [name, setName] = useState('How to repay a loan using USD or Stablecoins from your wallet')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Loans</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Use your WeHodler wallet balance for the loan repayment</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>To repay your loan and unfreeze your collateral amount, go to the Loans page. Click the <strong>REPAY LOAN</strong> button on the loan you want to repay.</p>
                <p>There you will see a pop-up with your loan repayment options. To repay your loan using EUR, USD, or Stablecoins, you need to use the <strong>From my wallet </strong>option.</p>
                <p>By choosing <strong>From my wallet</strong> option, you will see a pop-up where you can select a wallet you want to spend funds from, and amount you want to repay (could be the whole loan balance or a fraction of it). Play with the numbers to see how much EUR, USD, or Stablecoins you need.</p>
                <img src={loanfourscreenshot} alt="repay_from_wallet" className='block my-4' />
                <p>Once you're ready, click on the REPAY NOW button.</p>
                <p className='font-semibold'>Please be advised:</p>
                <ul className='list-disc px-6 font-semibold'>
                    <li>All loan repayments from your fiat wallets have 0% commission and are processed instantly;</li>
                    <li>You can repay the loan only if you have USD, EUR or Stablecoins in your wallet.</li>
                </ul>
            </div>
        </div>
    )
}

export const LoanhelpTen = () => {
    const [name, setName] = useState("What happens if I don't repay my loan")
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Loans</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Loan term expiration</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>As a company, we are trying to keep our client approach as friendly and straight through as possible. However, like any e-commerce organization, we have financial obligations to our customers and partners. Violations of these obligations are unacceptable for us.</p>
                <p>The max loan duration can be seen on the Get loan page. The loan will be closed automatically with the Close Now operation once the term in the loan plan expired.</p>
                <p>We send an email alert 24 hours before a loan expires. In addition, we will inform our customers about the first and last extension day.</p>
                <p>After repaying the loan, the customer receives all collateral, that is left over after the Extension Fee deduction. If the loan is closed without repayment, all borrowed funds will be kept by the customer.</p>
                <p className='font-semibold'>There is an extension period of 14 days. If the loan is not repaid during the extension period, our system sells a part of the collateral to cover the repayment amount and the rest collateral will be deposited back into your balance.</p>
            </div>
        </div>
    )
}

const Loanhelp = () => {
    const [name, setName] = useState('Loans')
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
            <BiCoinStack size={40} color='#3b82f6' />
            <h2 className='text-2xl font-bold uppercase my-3'>{name}</h2>
            <p>How to get cash or crypto using your crypto assets</p>
            <p className='text-gray-500'>10 articles</p>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <div className='p-4 mb-2 border-b border-b-gray-300'>
                <p className='font-bold text-lg'>How to get and manage a loan</p>
            </div>
            <Link to={`loanhelpone`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How crypto-backed loans work</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`loanhelptwo`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to get a loan</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`loanhelpthree`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How the Price Down Limit works</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`loanhelpfour`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How the "Close Now" feature works on a opened loan</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`loanhelpfive`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Loan daily fees</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`loanhelpsix`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Loan FAQ</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <div className='p-4 mb-2 border-b border-b-gray-300'>
                <p className='font-bold text-lg'>Loan Repayment</p>
            </div>
            <Link to={`loanhelpseven`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to repay a loan</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`loanhelpeight`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to repay a loan using crypto</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`loanhelpnine`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to repay a loan using USD or Stablecoins from your wallet</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`loanhelpten`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>What happens if I don't repay my loan</p>
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

export default Loanhelp