import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { BsChatRightDots } from 'react-icons/bs'
import { SiShopware } from 'react-icons/si'
import { MdOutlineKeyboardArrowRight, MdArrowRight } from 'react-icons/md'
import { RiArrowDownSFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const FaqhelpOne = () => {
    const [name, setName] = useState('Referrals and Bonus program')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>FAQ</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Invite friends and family and earn crypto together</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h3 className='font-bold'>What is a Referrals and Bonuses program?</h3>
                <p>The Referrals and Bonuses program is a great chance to get additional bonuses from the platform by completing simple reward tasks and inviting your friends to our platform. You can earn up to $100 in prizes, along with all the friends that you invite.</p>
                <h3 className='font-bold'>How I can earn my personal bonus?</h3>
                <ol className='list-decimal px-6 py-2'>
                    <li>In your wallet section, you will find a Referrals and Bonuses program tab.</li>
                    <li>Once you click this tab, you will see all the reward tasks and the exact steps that you need to take to earn bonuses.</li>
                    <li>If the task is completed and the reward is collected, the task color will change to green and remains the same until you complete other tasks.</li>
                </ol>
                <h3 className='font-bold'>How can I earn unlimited rewards along with my friends?</h3>
                <ol className='list-decimal px-6 py-2'>
                    <li>In the Referrals and Bonuses program tab simply copy and share your referral code or link with your friends. </li>
                    <li>Once your friend(s) signed up using your code or link and verified their accounts, they will see their own tab with the tasks that will bring them up to $70 in a personal bonus and up to $30 in rewards to you. You can invite as many friends, as you want.</li>
                </ol>
                <p className='font-semibold'>Important to know</p>
                <ul className='font-semibold list-disc px-6 py-2'>
                    <li>The time for the referral reward to arrive may vary. Commonly, it is 48 hours since the task completion.</li>
                    <li>The system works and distributes tasks automatically using the special algorithm, therefore the availability and the number of tasks may vary. In the Referrals and Bonuses section, you can see all the reward tasks, which are currently available for your account, as well as the amount and the limit for these tasks.</li>
                    <li>Rewards are flexible in both amounts and availability. Personal and referral bonuses will be provided in accordance with the conditions that you saw in your account when you started to do the task.</li>
                    <li>WeHodler reserves the right to change the rules of the promotion unilaterally and at any time. We will advertise any changes that occur to the terms. </li>
                    <li>WeHodler reserves the right to exclude the account from the reward program if we suspect a violation of terms or any activity we determine as abusive (for example, fictitious people, selling or buying of Identity Verification/Verified account, etc).</li>
                </ul>
            </div>
        </div>
    )
}

export const FaqhelpTwo = () => {
    const [name, setName] = useState('Requirements for customers')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>FAQ</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Who can sign up on WeHodler?</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>WeHodler is an international FinTech company that provides crypto-related services to its customers on a worldwide scale. However, due to legal restrictions, there are minimal requirements for a person if they want to benefit from using our platform:</p>
                <ul className='list-disc py-2 px-6'>
                    <li>We don't provide our service to users under 18 y.o.;</li>
                    <li>Users are allowed to have only one account on the platform;</li>
                    <li>At this time, we cannot provide services to residents of the following countries and regions: <ul className='list-disc py-2 px-6'>
                            <li>Unincorporated territories of the US;</li>
                            <li>Afghanistan;</li>
                            <li>Nepal;</li>
                            <li>Pakistan;</li>
                            <li>North Korea;</li>
                            <li>Syria;</li>
                            <li>Iraq;</li>
                            <li>Sudan;</li>
                            <li>Myanmar.</li>
                        </ul></li>
                </ul>
            </div>
        </div>
    )
}

export const FaqhelpThree = () => {
    const [name, setName] = useState('WeHodler commissions and limits')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>FAQ</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>What are WeHodler fees, commissions, and limits</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='text-center font-bold text-lg'>Deposit</h2>
                <p className='font-semibold'>Fiat:</p>
                <ul className='list-disc px-6 py-2'>
                    <li>Bank wire fee per transfer - 0 (except USD SWIFT - 25 USD per deposit; GBP - 20 GBP per deposit) <ul className='list-disc px-6 py-2'>
                            <p>Min deposit amount by bank wire:</p>
                            <li>300 for GBP</li>
                            <li>100 for USD/EUR</li>
                            <p className='my-2'>Bank wire processing time:</p>
                            <li>USD, EUR (SWIFT) - up to business 5 days</li>
                            <li>EUR (SEPA) - up to 2 business days</li>
                            <li>GBP - up to business 3 days </li>
                        </ul></li>
                    <li>Bank card fee - 1% </li>
                    <li>Bank card via AdvCash - 4.5%</li>
                </ul>
                <p className='font-semibold'>Crypto/Stablecoins:</p>
                <ul className='list-disc px-6 py-2'>
                    <li>Crypto fees - 0</li>
                    <li>Stablecoins fees - 0</li>
                    <li>Min deposit amount by crypto - 10 USD in crypto equivalent</li>
                </ul>
                <h2 className='text-center font-bold text-lg'>Withdraw</h2>
                <p className='font-semibold'>Fiat:</p>
                <ul className='list-disc px-6 py-2'>
                    <li>Bank wire fees per transfer:  <ul className='list-disc px-6 py-2'>
                            <li>USD (SWIFT) - 1.5% (min 85 USD)</li>
                            <li>EUR (SEPA) - 5 EUR</li>
                            <li>EUR (SWIFT) - 55 EUR</li>
                        </ul></li>
                    <li>Min withdrawal amount by bank wire: <ul className='list-disc px-6 py-2'>
                            <li>500 for USD/EUR (SWIFT)</li>
                            <li>300 for GBP</li>
                            <li>30 for EUR (SEPA)</li>
                        </ul></li>
                    <li>Bank wire processing time: <ul className='list-disc px-6 py-2'>
                            <li>USD, EUR (SWIFT) - up to business 5 days</li>
                            <li>EUR (SEPA) - up to 2 business days</li>
                            <li>GPB - up to business 3 days</li>
                        </ul>
                    </li>
                </ul>
                <p className='font-semibold'>Crypto/Stablecoins:</p>
                <ul className='list-disc px-6 py-2 flex flex-col gap-1'>
                    <li>You can check the actual withdrawal fees in the withdrawal form of your wallet</li>
                    <li>Min withdrawal amount - 5-50 USD in crypto/Stablecoins equivalent depending on the withdrawal currency</li>
                </ul>
                <div className='font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2 flex flex-col gap-1'>
                        <li>The crypto withdrawal fee doesn't include a blockchain fee (miner's reward) which can vary depending on the blockchain workload and capacity;</li>
                        <li>The withdrawal conditions may vary. The factual conditions are shown in the platform withdrawal form;</li>
                        <li>Depending on the number of requests, market activity, and compliance checks, the time of the crypto withdrawal request execution may vary from a few minutes to a few hours. </li>
                    </ul>
                </div>
                <h2 className='text-center font-bold text-lg'>Loans</h2>
                <ul className='list-disc px-6 py-2 flex flex-col gap-1'>
                    <li>Min loan amount - 100 USD</li>
                    <li>Daily Fee - 0.55% from the overdraft amount (if collected from the wallet) or 0.825% (if the fee is added to the loan debt). For other details, please use this loan form</li>
                    <li>Close now fee - 1% from the overdraft amount</li>
                </ul>
                <h2 className='text-center font-bold text-lg'>Savings</h2>
                <p className='text-blue font-bold'>General conditions</p>
                <ul className='list-disc px-6 py-2 flex flex-col gap-1'>
                    <li>The min deposit amount to start earning the interest is 100 USD (in crypto equivalent)</li>
                    <li>MAX - 300k overall on all currencies</li>
                    <li>Settlement period - 7 days</li>
                </ul>
            </div>
        </div>
    )
}

export const FaqhelpFour = () => {
    const [name, setName] = useState('Crypto taxes explained')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>FAQ</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>All about the crypto-related taxation</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6'>
                <p>Crypto taxes are a hot topic these days and becoming increasingly important for governments around the world. WeHodler is not responsible for your personal taxes, but we recommend you learn the individual tax code for capital assets in your native country.</p>
                <div className='my-4 flex flex-col gap-2'>
                    <p>Crypto trading has become popular around the world. Many are doing it out of interest and also for professional reasons. Let's recap the main benefit of cryptocurrency before we dive deep into the crypto taxation aspect. The central theme around cryptocurrencies is that there's no one in absolute control over them. This idea has been attracting many crypto enthusiasts for a long time now. </p>
                    <p>If given a choice, most of us would not like to give any part of our crypto profit to the taxman. Yet ambiguity around crypto taxation isn't good for the growth of the crypto industry. It's an undeniable fact that clear taxation rules will help make the crypto industry legal. Hence, it will grant legitimacy to crypto coins. It may even establish cryptocurrencies as an alternative to the global fiat currencies. </p>
                    <p>Countries around the world have different sets of taxation rules when it comes to cryptocurrencies. Our guide will help you learn about how the crypto taxation system works in the United Kingdom and the European Union's countries. </p>
                    <h2 className='font-bold text-xl'>Crypto Taxes in the United Kingdom </h2>
                    <p>The United Kingdom is a financial powerhouse. Even after Brexit, the United Kingdom still stands as the financial capital of the European region. It means that a proper set of crypto taxation and legislation in the UK can compel other countries in the region to do the same. </p>
                    <h3 className='font-bold uppercase'>#1. HMRC'S CRYPTO TAXATION GUIDELINES</h3>
                    <p>If you are a UK-based crypto trader, you will benefit greatly from the HMRC's crypto taxation guidelines. HMRC is Her Majesty's Revenue and Customs department of the United Kingdom. The crypto taxation guide covers everything from business activities to payments to trading. It also provides you information about crypto-based gifts. </p>
                    <p>If you are planning for paper filing, then 31 October 2020 is the tax deadline for it. The tax deadline for online filing is 31 January 2021. Both these deadlines are for the previous tax year, which ends on 5th April 2020. </p>
                    <h3 className='font-bold uppercase'>#2. WHAT ARE THE CRYPTO TAXES LIKE IN THE UK?</h3>
                    <p>As of now, cryptocurrencies are categorized as property in the UK. Hence, it taxes cryptocurrencies as such. Are you a HODLer that doesn't actively trade? You will be subject to a 10% capital gains tax. On the other hand, if you are trading cryptocurrencies actively, then it will be covered under income tax. </p>
                    <p>You don't have to pay anything in taxes if your total income from crypto trading and other sources doesn't exceed £12500. If your total income goes above £12500, then you will have to pay income tax in the range of 20% to 45%. If you had any losses in crypto trading, then you can use it to reduce your taxable income. </p>
                    <p>Furthermore, have you received cryptocurrencies through an airdrop or giveaway? You will have to pay income tax on it in the United Kingdom. You will also have to pay income tax if you receive cryptocurrency rewards through mining activities. Moreover, if you receive your salary in crypto, then it is also subject to taxes in the United Kingdom. </p>
                    <p>There are also taxation rules when it comes to a business engaging in crypto. If business profits from crypto trading, then they will have to pay income tax on it. It's because, in the case of crypto trading, income tax is prioritized over capital gains tax in the UK.  </p>
                    <h2 className='font-bold text-xl'>Crypto Taxes in the European Union</h2>
                    <p className='font-bold uppercase'>Germany</p>
                    <p>Germany is pretty lenient when it comes to crypto taxes. Some HODLers may even consider Germany as a crypto tax haven. The German tax authorities won't ask you to pay any taxes on your crypto holding if you hold it over a year and then sell it. </p>
                    <p>Did you buy and sell any crypto tokens within a year? Even in this case, you won't have to pay any taxes if your crypto trading profit doesn't exceed €600 in the tax year. In any other case, you will have to pay tax on your gains. The taxes can be as high as 45% in Germany. Keep in mind that your taxable income will factor in all your income within a tax year.</p>
                    <p className='font-bold uppercase'>France</p>
                    <p>The French tax department will consider your crypto profits as taxable income only if you trade actively. When it comes to one-time transactions, it will come under a net of 66% tax on your profits. But many factors will influence your tax rate. Factors such as - if you are making your tax payments on a monthly or quarterly basis, if you hired a chartered accountant to assist you, among other things. </p>
                    <p className='font-bold uppercase'>Portugal</p>
                    <p>Portugal is a crypto haven in real terms. They don't tax your crypto profits. Your income by selling your crypto-assets does not even come under the purview of capital gains tax in Portugal. </p>
                    <p className='font-bold uppercase'>Spain</p>
                    <p>In Spain, the total duration for which you held on to your crypto assets is an important factor. It will influence your tax rate. If a crypto trader engages in buying and selling a cryptocurrency within 12 months, their tax rate will be 24.75% to 52%. When it comes to long term investments, a crypto trader will have to pay taxes in the range of 19% to 23%. </p>
                    <p className='font-bold uppercase'>Estonia</p>
                    <p>Estonia has a reputation for being a digital asset and digitization-friendly country. As of now, Estonia considers cryptocurrencies as property. They charge a flat income tax of 20% on your crypto profits. But you won't be able to deduct your losses from your taxable income in Estonia. </p>
                    <p className='font-bold uppercase'>Croatia</p>
                    <p>A crypto trader has to pay taxes on their profits in Croatia. The current capital gains tax, known as "final income" in Croatia is 12%. A trader can claim capital losses to reduce their taxable income, but it is only allowed for the year from their capital gains. </p>
                    <p className='font-bold uppercase'>Switzerland</p>
                    <p>There is no income tax as such on your profits after selling any cryptocurrencies. But you will have to pay a wealth tax, depending upon the value of your crypto assets. Your income comes under the purview of wealth tax if the total worth of your crypto assets is over 100,000 CHF. The value is calculated as per the actual exchange rates in terms of CHF on December 31st. The wealth tax is between 0.13% to 0.94%. </p>
                    <p className='font-bold uppercase'>Slovenia</p>
                    <p>Slovenia is one of the most popular crypto havens in the crypto world. There is no tax on your crypto profits in Slovenia as there is no tax on capital gains in the country. But you will have to pay income tax if you get paid in cryptocurrencies. </p>
                    <h3 className='font-bold'>Conclusion</h3>
                    <p>The crypto industry is still growing and many governments around the world are yet to decide on how to tax them. At the same time, the crypto adoption is increasing at a rapid pace, and governments will soon have to implement crystal clear guidelines regarding crypto assets globally. </p>
                    <p>When it comes to crypto taxes, the following elements often determine how much you'll be taxed:</p>
                    <ul className='list-disc py-2 px-6'>
                        <li>Holding period</li>
                        <li>Crypto losses to reduce taxable income</li>
                        <li>Trade frequency</li>
                    </ul>
                </div>
                <p>For those who want to request their financial information for tax purposes, please contact <a href='mailto:support@wehodler.com' className='text-blue-500 underline'>support@wehodler.com</a>, and we will organize it for you. </p>
            </div>
        </div>
    )
}

export const FaqhelpFive = () => {
    const [name, setName] = useState('WeHodler glossary')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>FAQ</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>The description of terms used in the platform</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='text-center font-bold text-lg'>General terms</h2>
                <p><strong>Coins</strong> - are all cryptocurrencies and stablecoins inside the WeHodler platform.</p>
                <p><strong>Crypto Collateral</strong> - is any of the supported coins/tokens by YouHolder which can be used as collateral for a crypto-backed loan.</p>
                <p><strong>Crypto-backed loan</strong> - is a loan secured by cryptocurrency used as the collateral (aka secure deposit).</p>
                <p><strong>Cryptocurrency</strong> - is a digital asset designed to work as a medium of exchange that uses strong cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets.</p>
                <p><strong>FIAT</strong> - is regular money such as USD or EUR.</p>
                <p><strong>HDP (Help Desk Portal)</strong> - is a set of detailed instructions on functions and other issues related to the work principles of the platform.</p>
                <p><strong>HODL</strong> - is a slang term in the cryptocurrency community for holding the cryptocurrency rather than selling it.</p>
                <p><strong>Stablecoins</strong> - are cryptocurrencies designed to minimize the volatility of the price of the stablecoin, relative to some "stable" asset or basket of assets. A stablecoin can be pegged to a cryptocurrency, fiat money, or to exchange-traded commodities (such as precious metals or industrial metals).</p>
                <p><strong>Tokens</strong> - a blockchain account can provide functions other than making payments, for example in decentralized applications or smart contracts. In this case, the units or coins are sometimes referred to as crypto tokens (or cryptotokens).</p>
                <p><strong>WeHodler</strong> - is the platform and mobile wallet app focused on crypto-backed lending with fiat (USD and EUR), crypto (BTC), and stablecoin loans (USDT, USDC, TUSD, PAX), crypto/fiat, and crypto/crypto conversions, as well as high-yield saving accounts. </p>
                <h2 className='text-center font-bold text-lg'>Legal &amp; Security</h2>
                <p><strong>AML/KYC Policy</strong> - is the guidelines aimed to prevent WeHodler company from being used, intentionally or unintentionally, by criminal elements for money laundering activities, as well as managing the company's risks.</p>
                <p><strong>Blockchain Association</strong> - is the independent, self-regulatory organization (SRO) and external dispute resolution (EDR) provider ensures all WeHodler customers have an outlet for dispute resolution outside of the WeHodler platform. </p>
                <p><strong>Certificate of Incorporation</strong> - is a legal document (license) for the creation of a corporation issued by an authorized state organization.</p>
                <p><strong>Crypto Valley Association</strong> - is an independent, government-supported association established to take full advantage of Cyprus's strengths to build the world's leading blockchain and cryptographic technologies ecosystem.</p>
                <p><strong>Cryptocurrency Security Standard (CCSS)</strong> - is a set of requirements for all information systems that make use of cryptocurrencies, including exchanges, web applications, and cryptocurrency storage solutions.</p>
                <p><strong>Identity verification (KYC procedure)</strong> - is the process of verifying the customer's identity by uploading scans of documents into the WeHodler platform.</p>
                <p><strong>KYC</strong> - Know-Your-Customer is the process of verifying the identity of the client and assessing their suitability, along with the potential risks of illegal intentions.</p>
                <p><strong>PCI Security Standards</strong> - is an information security standard for organizations that handle branded credit and debit cards.</p>
                <p><strong>Terms and conditions</strong> - is the legal agreement between a service provider (WeHodler company) and a person who wants to use its services (client). The client must agree to abide by the terms of service in order to use the offered service.</p>
                <p><strong>Verification</strong> - is a procedure that is used for checking that a client's personal information meets the platform requirements and specifications and that it fulfills its intended purpose.</p>
                <h2 className='text-center font-bold text-lg'>Crypto operations</h2>
                <p><strong>Borrowed amount</strong> - is the amount of money the user receives in his/her wallet by taking a crypto-backed loan.</p>
                <p><strong>Close now</strong> - is the process of closing a loan by paying the loan interest and the principal from the crypto collateral.</p>
                <p><strong>Initial price</strong> - is the price of the crypto collateral at the beginning of crypto-backed loan.</p>
                <p><strong>Interest fee (in future: monthly interest)</strong> - is the Interest accrued by WeHodler for taking a crypto-backed loan.</p>
                <p><strong>Loan Plan</strong> - is a loan tariff, which includes loan conditions such as Loan-To-Value ratio (LTV), loan duration, interest, and Price Down Limit (PDL).</p>
                <p><strong>Loan term</strong> - is the period during which the client needs to repay the loan to get back his or her crypto used as collateral for a crypto-backed loan. </p>
                <p><strong>Loan settlement period (will replace loan term soon)</strong> - is a settlement period of 1 month means the client needs to pay the interest due at the end of this time to continue the loan.</p>
                <p><strong>LTV</strong> - Loan-To-Value ratio. The amount of fiat funds that the client can receive in exchange for his or her cryptocurrency is used as collateral for a crypto-backed loan. This is typically represented in percentages. E.g. 80% LTV means clients borrow 80% of the crypto collateral's value.</p>
                <p><strong>Hodler™</strong> - is a tool to multiply the customer's crypto assets using a small part of his WeHodler savings account or wallet balance. Customers can keep the majority of their funds in safe, stable and profitable savings accounts while using some amount to engage in risky trading activities with the potential for high profit.</p>
                <p><strong>PDL </strong>- Price Down Limit. For users, this means, when the price drops below the “price down limit” (PDL) level, WeHodler has the right to sell their collateral and close the deal. Typically represented as two values: the price of crypto and the change in % from initial crypto collateral price, e.g. 8984 USD -15%.</p>
                <p><strong>Principal</strong> - is the body of loan, typically equal to the borrowed amount. An amount of money that is to be paid together with the loan interest to fully repay and close the loan.</p>
                <p><strong>Take profit</strong> - is the price of the crypto collateral where a crypto-backed loan will be closed automatically by using collateral funds to repay the loan interest and principal.</p>
                <h2 className='text-center font-bold text-lg'>Crypto Savings</h2>
                <p><strong>Crypto Savings Account</strong> - is a savings account (wallet) for storing and earning interest on cryptocurrency or stablecoins.</p>
                <h2 className='text-center font-bold text-lg'>Account/Wallet</h2>
                <p><strong>Converter</strong> - is the widget inside the platform, which correlates the market price and converts fiat, cryptocurrencies, and coins to each other.</p>
                <p><strong>Deposit (for fiat/stablecoin wallets)</strong> - is a wallet function within the platform that allows receiving (depositing) fiat or stablecoins to the client's wallet.</p>
                <p><strong>Rates</strong> - are the exchange rates between different fiat, cryptocurrencies, and stablecoins. We are using combined rates from different cryptocurrency exchanges to offer our clients the best rates on the market.</p>
                <p><strong>Receive (for crypto wallets)</strong> - is a wallet function within the platform that allows receiving (depositing) cryptocurrency to the client's wallet.</p>
                <p><strong>Send (for crypto wallets)</strong> - is a wallet function within the platform that allows sending cryptocurrency to other wallets.</p>
                <p><strong>Transaction History</strong> - is an information field inside the client's account within the platform, which displays all transactions, deposits, withdrawals and other movements of the client's funds on his or her internal accounts.</p>
                <p><strong>Wallets / Secured Crypto Wallet</strong> - is a software program that stores private and public keys and interacts with various blockchains to enable clients to send and receive digital currency and monitor their balance within the platform.</p>
                <p><strong>Withdrawal (for fiat/stablecoin wallets)</strong> - is a wallet function within the platform that allows sending (withdrawal) a fiat to the client's bank account and credit/debit card or stablecoins to other stablecoin wallets.</p>
                <h2 className='text-center font-bold text-lg'>Affiliate program</h2>
                <p><strong>WeHodler Affiliate Program</strong> - is the affiliate program that allows clients to earn money in another way besides using regular products within WeHodler platform.</p>
            </div>
        </div>
    )
}

export const FaqhelpSix = () => {
    const [name, setName] = useState('How do Indexes work?')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>FAQ</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>Investing in the stock market can be intimidating, especially for beginners. There are numerous options to choose from, and it can be challenging to know which stocks to invest in. That's where indexes come in. In this article, we'll explain how indexes work, why they are an interesting investing tool, and how you can benefit from them.</p>
                <h2 className='font-bold text-xl mt-4'>What is an Index?</h2>
                <p>An index is a portfolio of stocks, bonds, or other assets that represents a specific segment of the market. It tracks the performance of a particular group of assets, allowing investors to understand how that group is doing as a whole. Indexes are created by compiling a list of stocks or other assets that meet specific criteria, such as being from the same sector or having a certain market capitalization.</p>
                <h2>How do Indexes work?</h2>
                <p>Indexes work by calculating the average performance of a group of assets. The most common way to do this is by using market capitalization. Market capitalization is the total value of all outstanding shares of a company's stock. The larger the company, the more weight it has in the index. For example, if a company has a market capitalization of $100 billion and the total market capitalization of the index is $1 trillion, then that company will have a 10% weighting in the index.</p>
                <p>To calculate the value of an index, you multiply the share price of each asset in the index by its weight and then sum the products. This gives you the total value of the index at that point in time. For example, if the index has 10 assets, each with a weight of 10%, and the total value of all assets is $1,000, then the value of the index would be $100.</p>
                <h2 className='font-bold text-xl mt-4'>Why Are Indexes Interesting? </h2>
                <p>Indexes are interesting because they provide a snapshot of how a particular segment of the market is performing. They are also useful for diversifying your portfolio. Instead of investing in individual stocks, you can invest in an index that tracks a particular sector or market. This can help reduce risk since you're not relying on the performance of just one company.</p>
                <p>Another interesting aspect of indexes is that they can be used as a benchmark for mutual funds or other investment products. For example, if a mutual fund is designed to track the S&amp;P 500 index, then its performance should be similar to the performance of the index. If the fund underperforms the index, then investors may want to consider switching to a different investment.</p>
                <h2 className='font-bold text-xl mt-4'>How Can You Benefit from Indexes?</h2>
                <p>There are several ways you can benefit from investing in indexes. First, they are a low-cost way to invest in the stock market. Instead of paying high fees to an active fund manager, you can invest in an index fund or ETF (exchange-traded fund) that tracks an index.</p>
                <p>Second, indexes can help you diversify your portfolio. By investing in an index, you're investing in a variety of assets, which can help reduce risk.</p>
                <p>Also, indexes can be used to create a long-term investment strategy. By investing in indexes that track different segments of the market, you can create a well-diversified portfolio that is designed to perform well over time.</p>
                <p>In conclusion, indexes are an important investing tool that can help you understand how different segments of the market are performing. They are interesting because they are a low-cost way to invest in the stock market and can help reduce risk. By investing in indexes, you can create a diversified portfolio that is designed to perform well over the long term.</p>
            </div>
        </div>
    )
}

export const FaqhelpSeven = () => {
    const [name, setName] = useState('Hodler product FAQ')
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
    const [fifteen, setFifteen] = useState(false)
    const [sixteen, setSixteen] = useState(false)
    const [seventeen, setSeventeen] = useState(false)
    const [eighteen, setEighteen] = useState(false)
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>FAQ</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Common questions about Hodler</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='text-xl font-bold'>Hodler Parameters and product features</h2>
                <div>
                    <div>
                        <div onClick={()=> setOne(!one)} className='flex items-center gap-2 cursor-pointer'>
                            {!one ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>What is Hodler?</p>
                        </div>
                        {one && <div className='px-6 py-2'>
                            <p className='text-gray-600'>Hodler is an advanced and simple tool to enlarge your crypto assets using a portion of your WeHodler wallet balance. You can keep most of the funds in a safe and stable wallet while earning interest and using some amount to engage in trading activities with high-profit potential.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setTwo(!two)} className='flex items-center gap-2 cursor-pointer'>
                            {!two ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>What is the min amount to open Hodler?</p>
                        </div>
                        {two && <div className='px-6 py-2'>
                            <p className='text-gray-600'>Hodler minimum deal input amount is between $15 and $100, depending on current market conditions, the currency pair, and the deal volume (multiplier level). If the system does not allow you to open a trade due to insufficient funds, it will also tell you the actual minimum required amount to start the deal.</p>
                            <p className='text-gray-600'>Please note that the minimum deal amount may differ for various assets, trading directions, and depending on the current market conditions. Therefore take note and follow the information provided on the platform.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setThree(!three)} className='flex items-center gap-2 cursor-pointer'>
                            {!three ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>General overview of all Hodler features</p>
                        </div>
                        {three && <div className='px-6 py-2'>
                            <ul className='list-disc px-6 py-2 flex flex-col gap-2 text-gray-600'>
                                <li><strong>Input or Source amount</strong> is the amount and currency you place into a trade. When you open a Hodler the largest amount you risk is the input amount, despite the multiplier that can make the effective volume of the trade, and thus the risks are higher at your choice.</li>
                                <li><strong>The multiplier</strong> is one of the Hodler's deal settings that you can select before opening it. It allows you to select the number by which your input amount will be multiplied with. By selecting a lower value you can reduce the risk in your deal while increasing the multiplier you can increase your profit, and its value and make your deal more responsive to price changes as a result. However, consider the increase in risk in this case as well. Note that once Hodler has been opened, the multiplier can no longer be changed.</li>
                                <li><strong>Output</strong> is the approximate amount you will receive when the Hodler transaction gets closed, including its financial result and all commissions accrued and deducted. Increased trading activity, current price changes, and the order execution sequence may affect the result to a greater or lesser amount.</li>
                                <li><strong>Ticker</strong> - In general, a Ticker refers to the currency, and assets that you select when creating a deal. <p>The Source ticker is the currency you place in the trade for example 100 USDT can be the source/input amount placed in the Hodler deal. And the tickers of the trading asset, for example, BTC/USDT, are the trading pair on the price change of which you plan and open your trade.</p></li>
                                <li><strong>The tariff</strong> is a set of deal parameters available at the moment. The minimum deal amount, rollover fee, and multiplier. Most parameters can be changed and selected at the moment of deal creation, for example, you can choose the Input Amount you are ready to place into a deal, the number of multiplier, and also you can set the Take Profit and Stop Loss levels available.</li>
                                <li><strong>A Rollover fee</strong> is a basic trading fee that is paid for each fixed period of time. This is the minimum service payment that allows us to create a Hodler deal for you and provide its benefits. You can see the fee percentage and period for which the fee is charged on the deal creation page, or by selecting the active deal and searching for the Rollover fee line. The rollover is calculated on the total amount borrowed. The 1st rollover period is neither charged nor paid out.</li>
                                <li><strong>Stop Loss and Take Profit</strong> orders are pending orders to close a trade at specific price levels. They are Hodler deal parameters that you can set for your convenience and automation in trading and risk reduction. Take Profit is set in order to lock the profit when the preset level is achieved and the Stop Loss order is set to limit the losses - the forced closing of a deal when the maximum possible loss is reached. For each Hodler transaction, the maximum possible level of loss is 100% of the funds placed in the transaction. When the market reaches one of the prices you set, a close order is triggered.</li>
                                <li><strong>Pending order</strong> allows setting an order to open Hodler when the price reaches a specific level. This way, you can be sure that you will always enter the market at the most profitable price level.</li>
                            </ul>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setFour(!four)} className='flex items-center gap-2 cursor-pointer'>
                            {!four ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>What is Multiplier?</p>
                        </div>
                        {four && <div className='px-6 py-2'>
                            <p className='text-gray-600'>The multiplier is one of the Hodler deal settings that you can select before opening it. It allows you to select the number by which your input amount will be multiplied with. By selecting a lower value you can reduce the risk in your deal while increasing the multiplier you can increase your stake, and its value and make your deal more responsive to price changes as a result. However, consider the increase in risk in this case as well. Note that once Hodler has been opened, the multiplier can no longer be changed.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setFive(!five)} className='flex items-center gap-2 cursor-pointer'>
                            {!five ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>What are TP and SL (Take Profit / StopLoss)?</p>
                        </div>
                        {five && <div className='px-6 py-2'>
                            <p className='text-gray-600'>Stop Loss and Take Profit orders to close a trade at specific price levels are Hodler deal parameters that you can set for your convenience and automation in trading and risk reduction. Take Profit is set in order to lock the profit when the preset level is achieved and the Stop Loss order is set to limit the losses - the forced closing of a deal when the maximum possible loss is reached. For each Hodler transaction, the maximum possible level of loss is 100% of the funds placed in the transaction.</p>
                            <p className='text-gray-600 mt-2'>When the market reaches one of the prices you set, a close order is triggered.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setSix(!six)} className='flex items-center gap-2 cursor-pointer'>
                            {!six ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>Why can't I set TP/SL that I want?</p>
                        </div>
                        {six && <div className='px-6 py-2'>
                            <p className='text-gray-600'>Like any other financial product, Hodler has its own features, some of which are related to current market conditions. Take Proft and Stop Loss available price levels that you see on the platform are also related to the market conditions available to us. If any price level or range is not available for the selection or setting of an order, the system will inform you about it.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setSeven(!seven)} className='flex items-center gap-2 cursor-pointer'>
                            {!seven ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>What are UP and DOWN?</p>
                        </div>
                        {seven && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>Hodler deals can be opened either in the buy (Up) or sell (Down) direction, depending on your financial strategy and plans. That is to say in more simple words when a deal is opened Upwards, the asset is bought first, and then it is sold when the deal is closed. And when a deal is opened Downward, the asset is sold first and then bought. The difference between the prices, taking into account the multiplier, is the result of the deal.</p>
                            <p className='text-gray-600'>Before closing a deal, you can see the approximate result that will be obtained.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setEight(!eight)} className='flex items-center gap-2 cursor-pointer'>
                            {!eight ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>What is Market Execution?</p>
                        </div>
                        {eight && <div className='px-6 py-2'>
                            <p className='text-gray-600'>Market Execution means that an order to close a deal is closed at the prices available in the market at the time of execution of the order for specific parameters and volume of a deal. Therefore, the deal result may be different from what you might have seen when the close order was triggered. At times of high volatility, this difference may increase. Any Hodler order is performed by Market Execution.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setNine(!nine)} className='flex items-center gap-2 cursor-pointer'>
                            {!nine ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>How do I make a profit in Hodler?</p>
                        </div>
                        {nine && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>The profit-making mechanism in Hodler transactions is the same as in any other financial transaction based on the price difference principle. You should first buy a financial asset (crypto) at a low price and then sell it at a higher price (BUY direction) or vice versa, which is possible when trading in the SELL direction, which means first selling crypto at a higher price and then buying at a lower one.</p>
                            <p className='text-gray-600'>Consider the difference between buy (ASK) and sell (BID) prices, the so-called spread difference. When you open a deal and see a loss even though the price has not changed too much, this is the spread you see applied to the Hodler trade.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setTen(!ten)} className='flex items-center gap-2 cursor-pointer'>
                            {!ten ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>From where do you take quotes for the chart?</p>
                        </div>
                        {ten && <div className='px-6 py-2'>
                            <p className='text-gray-600'>We are using a real market execution working with a number of providers that include but are not limited to some top exchanges like Binance, Kraken, Poloniex, etc. The exact list is not disclosed. That means that all the operations are getting processed via the real exchange providers. The prices and terms on the platform may differ from those of third-party services since we don't use just one source, but an aggregated and most accurate price from several top sources. For any orders placed in our company, the conditions and the results you have got on our platform are relevant.</p>
                        </div>}
                    </div>
                </div>
                <h2 className='font-bold text-xl'>How to close a deal</h2>
                <div>
                    <div className='mt-1'>
                        <div onClick={()=> setEleven(!eleven)} className='flex items-center gap-2 cursor-pointer'>
                            {!eleven ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>How long can I keep Hodler open?</p>
                        </div>
                        {eleven && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>You can keep a Hodler transaction open for as long as necessary under favorable conditions. However, take into account all possible reasons for closing the deal. If the price moves in a negative direction for your deal, it can either close at the Stop Loss level you have set or, having reached 100% of the loss, that is, the Stop Loss level. Otherwise, the transaction can be closed at the Take Profit level you set or when the maximum possible profit level for the transaction is reached at around +100%.</p>
                            <p className='text-gray-600'>You also need to be aware of a very rare reason for closing a deal - insufficient collateral. This can happen if the Rollover fee, having accumulated over time, depletes all the funds of your transaction.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setTwelve(!twelve)} className='flex items-center gap-2 cursor-pointer'>
                            {!twelve ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>How can I close Hodler?</p>
                        </div>
                        {twelve && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>You can close a Hodler deal at any time while it is open and any of the Stop Loss, Take Profit orders are not triggered. To close a trade go to the Hodler Portfolio tab, select the Hodler you wish to close, and click on the Close now button.</p>
                            <p className='text-gray-600'>Take Market Execution into account. Market Execution means that an order to close a deal is closed at the prices available in the market at the time of execution of the order for specific parameters and volume of a deal. Therefore, a deal result may be different from what you might have seen when the close order was triggered. At times of high volatility, this difference may increase.</p>
                            <p className='text-gray-600'>Note that the result of the trade is paid in the same currency that you placed into the deal.</p>
                        </div>}
                    </div>
                </div>
                <h2 className='font-bold text-xl'>Risks and charges</h2>
                <div>
                    <div className='mt-1'>
                        <div onClick={()=> setThirteen(!thirteen)} className='flex items-center gap-2 cursor-pointer'>
                            {!thirteen ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>What are Hodler fees?</p>
                        </div>
                        {thirteen && <div className='px-6 py-2'>
                            <p className='text-gray-600'>Hodler includes a Rollover fee, a basic trading fee that is paid for each fixed period of time. This is the minimum service payment that allows us to create a Hodler deal for you and provide its benefits. You can see the fee percentage and period for which the fee is charged on the deal creation page, or by selecting the active deal and searching for the Rollover fee line. The rollover is calculated on the total amount borrowed. The 1st rollover period is neither charged nor paid out.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setFourteen(!fourteen)} className='flex items-center gap-2 cursor-pointer'>
                            {!fourteen ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>Why my Hodler is at a loss right after it was issued?</p>
                        </div>
                        {fourteen && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>As in any deal in which the result depends on price movements between the purchase and sale prices Hodler includes the difference between Buy (ASK) and Sell (BID) prices, the so-called spread difference. When you open a deal and see a loss even though the price hasn't changed too much it is the spread that you see applied to the Hodler deal. Its volume (range) may vary depending on the market conditions available at the moment.</p>
                            <p className='text-gray-600'>Note that when there is high volatility, sharp price changes, or a high demand to buy or a rush to sell an asset, the spread widens. That is, the buy and sell prices move away from each other, therefore please take into account the associated financial results and possible risks.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setFifteen(!fifteen)} className='flex items-center gap-2 cursor-pointer'>
                            {!fifteen ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>What are the risks of using Hodler?</p>
                        </div>
                        {fifteen && <div className='px-6 py-2'>
                            <p className='text-gray-600'>As with any deal in which the result depends on price movements between the purchase and sale prices, there exists financial risk in a Hodler deal too. However, it is limited to the input amount used in the deal. Besides this, you can manage the risk of your deal by lowering or increasing the multiplier, using Stop Loss and Take Profit orders, and you can always close the active deal.</p>
                        </div>}
                    </div>
                </div>
                <h2 className='font-bold text-xl'>Why was I liquidated?</h2>
                <div>
                <div className='mt-1'>
                        <div onClick={()=> setSixteen(!sixteen)} className='flex items-center gap-2 cursor-pointer'>
                            {!sixteen ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>Why is my Hodler closed?</p>
                        </div>
                        {sixteen && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>Hodler transactions can be kept open for as long as necessary under preferable conditions. However, take into account all possible reasons for closing the deal. If the price moves in a negative direction for your deal, it can either close at the Stop Loss level you have set or, having reached 100% of the loss, that is, the Stop Loss level. Otherwise, the transaction can be closed at the Take Profit level you set or when the maximum possible profit level for the transaction is reached at around +100%.</p>
                            <p className='text-gray-600'>You also need to be aware of a very rare reason for closing a deal - insufficient collateral. This can happen if the Rollover fee, having accumulated over time, depletes all the funds (initial collateral) of your transaction.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setSeventeen(!seventeen)} className='flex items-center gap-2 cursor-pointer'>
                            {!seventeen ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>Why did I open Hodler and it closed right away?</p>
                        </div>
                        {seventeen && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>As with any deal in which the result depends on price movements between the purchase and sale prices Hodler includes the difference between Buy (ASK) and Sell (BID) prices, the so-called spread difference. When you open a deal and see a loss even though the price hasn't changed too much it is the spread that you see applied to the Hodler deal. Its volume (range) may vary depending on the market conditions available at the moment.</p>
                            <p className='text-gray-600'>Note that at moments of high volatility, sharp price changes, or a high demand to buy or a rush to sell an asset, the spread widens.</p>
                            <p className='text-gray-600'>And at moments of especially high market activity, the width (volume) of the spread can make up a large part or exceed the Input amount of your transaction. Also keep in mind that the greater the multiplier you select, the greater the total effective trade volume becomes. In such cases, a small price movement might be enough to close the deal shortly after it is opened.</p>
                            <p className='text-gray-600'>That is, the buy and sell prices move away from each other, therefore please take into account the associated financial results and possible risks.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setEighteen(!eighteen)} className='flex items-center gap-2 cursor-pointer'>
                            {!eighteen ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>Why did you close my Hodler if the Stop Loss price was not reached?</p>
                        </div>
                        {eighteen && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>Please be aware of a very rare reason for closing a deal - insufficient collateral. This can happen if the Rollover fee, having accumulated over time, depletes all the funds (initial collateral) of your transaction.</p>
                            <p className='text-gray-600'>If you have not received our emails, please check your Spam and Undesired folders in your email inbox. If the letters are not there, we recommend you whitelist our mail domains in the settings of your mail provider, follow these instructions for Whitelisting Of WeHodler Email Messages, and also consult the mail support team on how to do it if you encounter any difficulties.</p>
                            <p className='text-gray-600'>Please be aware of a very rare reason for closing a deal - insufficient collateral. This can happen if the Rollover fee, having accumulated over time, depletes all the funds (initial collateral) of your transaction.</p>
                            <ul className='list-disc text-gray-600 px-6 py-2'>
                                <li>Your transaction ID code</li>
                                <li>Description of why in your opinion the transaction was executed incorrectly, details of when you noticed the errors or discrepancies</li>
                                <li>Your calculations of the deal that you consider to be correct</li>
                                <li>Attach screenshots of any error messages and discrepancies that you have noticed.</li>
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const FaqhelpEight = () => {
    const [name, setName] = useState('Loyalty program FAQ')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>FAQ</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Common questions</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6'>
                <h2 className='font-bold text-xl'>Referrals and Bonuses FAQ</h2>
                <div>
                    <div className='mt-1'>
                        <div onClick={()=> setOne(!one)} className='flex items-center gap-2 cursor-pointer'>
                            {!one ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>How does the Referral and bonuses program work?</p>
                        </div>
                        {one && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>You can receive cash bonuses by referring users to the platform (provided that referred users will perform certain actions on the platform) or by doing certain actions (opening Hodler deals, making a deposit, etc.) by yourself. The actual terms for getting rewards are specified in the Referral and Bonuses section of your account.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setTwo(!two)} className='flex items-center gap-2 cursor-pointer'>
                            {!two ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>Where can I find the Referrals and Bonuses section?</p>
                        </div>
                        {two && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>The Referrals and Bonuses section can be founded in the top right corner of the wallet section, in the web platform.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setThree(!three)} className='flex items-center gap-2 cursor-pointer'>
                            {!three ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>Where is my referral link?</p>
                        </div>
                        {three && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>You can find the referral link in the Referrals and Bonuses section by clicking on the referral area. You can also find information about the number of referred friends, their activity on the platform, and the total bonus earned.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setFour(!four)} className='flex items-center gap-2 cursor-pointer'>
                            {!four ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>How many friends can I invite?</p>
                        </div>
                        {four && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>There is no limit to invited friends. You can invite as many friends as you want.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setFive(!five)} className='flex items-center gap-2 cursor-pointer'>
                            {!five ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>When will I get my reward for completing tasks?</p>
                        </div>
                        {five && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>The time for the referral reward to arrive on may vary. Commonly, it is 48 hours since the task completion.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setSix(!six)} className='flex items-center gap-2 cursor-pointer'>
                            {!six ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>Why have I completed all the conditions and tasks, 48H passed and I haven't been rewarded?</p>
                        </div>
                        {six && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>In the dashboard, you can see the Referrals and Bonuses section with the conditions and the progress. You can see the progress bar which shows the actual completion state of the actions, which are required to get a bonus. If all requirements are fulfilled, the time for the referral reward to arrive may vary. Commonly it is 48 hours.</p>
                            <p className='text-gray-600'>Please be advised, that the Reward program is optional and may be not available for the particular account. For any additional info, you can reach the support team.</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setSeven(!seven)} className='flex items-center gap-2 cursor-pointer'>
                            {!seven ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>Where are rewards credited?</p>
                        </div>
                        {seven && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>The rewards received by the client in terms of the Referrals and bonuses program, depending on the reward currency, are credited to the respective client’s wallet (i.e. rewards in USD are credited to the client's USD wallet).</p>
                        </div>}
                    </div>
                    <div className='mt-1'>
                        <div onClick={()=> setEight(!eight)} className='flex items-center gap-2 cursor-pointer'>
                            {!eight ? <MdArrowRight />: <RiArrowDownSFill />}
                            <p className='font-semibold'>Why have the reward conditions changed?</p>
                        </div>
                        {eight && <div className='px-6 py-2 flex flex-col gap-2'>
                            <p className='text-gray-600'>The terms and conditions of any launched reward campaign (tasks) can be amended following the market conditions, and platform's usage. And customers decide whether they will take advantage of these opportunities. The decision to use a particular product is always upon the client. If you feel that a product is not suitable for you or your financial strategy or situation, you may simply not use it.</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Faq = () => {
    const [name, setName] = useState('FAQ')
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
            <BsChatRightDots size={40} color='#3b82f6' />
            <h2 className='text-2xl font-bold uppercase my-3'>{name}</h2>
            <p>Common questions about the platform</p>
            <p className='text-gray-500'>8 articles</p>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <Link to={`faqhelpone`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Referrals and Bonuses program</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`faqhelptwo`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Requirements for customers</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`faqhelpthree`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>WeHodler commissions and limits</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`faqhelpfour`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Crypto Taxes explained</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`faqhelpfive`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>WeHodler glossary</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`faqhelpsix`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How do Indexes work?</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <div className='p-4 mb-2 border-b border-b-gray-300'>
                <p className='font-bold text-lg'>Products FAQ</p>
            </div>
            <Link to={`faqhelpseven`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Hodler product FAQ</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`faqhelpeight`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Loyalty program FAQ</p>
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

export default Faq