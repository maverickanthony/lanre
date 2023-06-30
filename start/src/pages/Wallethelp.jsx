import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { BsWallet2 } from 'react-icons/bs'
import { SiShopware } from 'react-icons/si'
import { MdOutlineKeyboardArrowRight, MdArrowRight } from 'react-icons/md'
import { RiArrowDownSFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import walletone from '../data/walletone.png'
import wallettwo from '../data/wallettwo.png'
import withdrawone from '../data/withdrawone.png'
import withdrawfiat from '../data/withdrawfiat.png'
import depositfiat from '../data/depositfiat.png'
import bankcard from '../data/bankcard.png'
import convertone from '../data/convertone.png'

export const WallethelpOne = () => {
    const [name, setName] = useState('How to use your wallet')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to create and use your crypto/fiat wallet</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6'>
                <p>WeHodler provides all its customers with their own wallets. What makes WeHodler wallet unique is that it provides a full range of essential features, such as:</p>
                <ul className='list-disc px-6'>
                    <li>simple deposits and withdrawals;</li>
                    <li>easy conversion/exchange (crypto-crypto/crypto-fiat) any crypto, stablecoins or fiat;</li>
                    <li>easy to navigate transaction history and status monitoring;</li>
                    <li>using a mix of hot and cold storage to provide top-notch security for customers funds;</li>
                    <li>all wallet holders are protected by the Blockchain Association.</li>
                </ul>
            </div>
            <div className='my-6'>
                <h2 className='text-xl font-bold text-center my-2'>Get wallet</h2>
                <p>Wallets are created right after you sign up, verify your account and go to the Wallet page. There you will see three sections with fiat, crypto, and stablecoins wallets.</p>
                <img src={walletone} alt="wallet" className='block w-[90%] mx-auto my-2' />
            </div>
            <div className='my-6'>
                <h2 className='text-xl font-bold text-center my-2'>Deposit/ Withdraw/ Convert</h2>
                <p>To deposit your crypto, fiat or stable coins use the Deposit/Receive button on the left side panel. You can convert crypto or fiat with just one click using the Convert button. To withdraw (transfer) crypto or stablecoins to another wallet use the Withdraw button on the panel. To withdraw fiat you can use a bank wire.</p>
                <img src={wallettwo} alt="wallet" className='block w-[90%] mx-auto my-2' />
            </div>
            <div className='my-6'>
                <h2 className='text-xl font-bold text-center my-2'>Transaction History</h2>
                <p>You can view all the operations statuses and transaction history with your funds in the <strong>Dashboard History</strong> section of your account.</p>
            </div>
        </div>
    )
}

export const WallethelpTwo = () => {
    const [name, setName] = useState('Wallet FAQ')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Frequently asked questions</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6'>
                <div>
                    <div onClick={()=> setOne(!one)} className='flex items-center gap-2 cursor-pointer'>
                        {!one ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>How can I top up my wallet?</p>
                    </div>
                    {one && <div className='px-6 py-2'>
                        <p className='text-gray-600'>You can use fiat deposit and crypto deposit to top up your account:</p>
                        <ul className='text-gray-600 list-disc px-6 py-2'>
                            <li><strong className='text-blue-500'>Crypto/stablecoins deposit</strong> - the fastest way to top up your WeHodler account. In case you don't have crypto yet you can deposit fiat currency and convert it to crypto within the platform;</li>
                            <li><strong className='text-blue-500'>By bank wire</strong> - this is the cheapest way to deposit fiat funds;</li>
                            <li><strong className='text-blue-500'>Apple Pay</strong> - use Apple Pay to top up your account;</li>
                            <li><strong className='text-blue-500'>Connect wallet</strong> - by using the connect wallet feature on your coin dashboard;</li>
                            <li><strong className='text-blue-500'>Bank card</strong> - deposit EUR or USD directly from your bank card;</li>
                            <li><strong className='text-blue-500'>AdvCash</strong> - make an almost instant deposit via the AdvCash service.</li>
                        </ul>
                        <p className='mt-2 text-gray-600'>Please be advised, some fiat card deposit options are available in EU, UK, Cyprus or Switzerland regions only. If you don't see the particular option, it is not available for your region.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setTwo(!two)} className='flex items-center gap-2 cursor-pointer'>
                        {!two ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>What are withdrawal options?</p>
                    </div>
                    {two && <div className='px-6 py-2'>
                        <p className='text-gray-600'>There are two main withdrawal options: bank wire transfers for fiat assets, and crypto transfers for crypto coins and tokens.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setThree(!three)} className='flex items-center gap-2 cursor-pointer'>
                        {!three ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>Why fiat deposit (bank wire or bank card) didn't arrive? How long does it take for a bank transfer to be credited to my account?</p>
                    </div>
                    {three && <div className='px-6 py-2'>
                        <p className='text-gray-600'>Bank card deposits are processed by WeHodler's partner services AdvCash, Unlimint and Apple Pay.</p>
                        <ul className='list-disc px-6 py-2 text-gray-600'>
                            <li>Most of AdvCash deposit delays are derived with the AdvCash KYC procedure. The AdvCash has its own KYC verification process separate from that of WeHodler. If you have encountered any issues making a deposit with AdvCash, please, make sure that your account in AdvCash has been verified. If all the steps of card deposit are completed properly, but the deposit is still missing, then a user has to contact the AdvCash support;</li>
                            <li>Unlimit (card deposit option) delays or failure transactions can be caused by the unsupported region that issued the bank card, as well as the unsupported card currency. The Bank card and Apple Pay options are available in the EU, UK, Cyprus and Switzerland regions for Visa (EUR, USD) cards only. For any other delay reasons, reach the support team for the futher transaction status check;</li>
                        </ul>
                        <p className='text-gray-600'>Most bank wire deposits are processed within the standart timeframes (SWIFT - up to 5 business days; SEPA -up to 2 business days; and GBP, CHF - up to 3 business days). The common reason for the deposit crediting delay are:</p>
                        <ul className='list-disc px-6 py-2 text-gray-600'>
                            <li>The required transfer processing time didn't pass;</li>
                            <li>The transfer was sent without the required payment reference number, and the system can't identify the transfer and complete the deposit. In that case, please send the transfer confirmation receipt to <a href='mailto:support@wehodler.com' className='text-blue-500 underline'>support@wehodler.com</a> for the further check by our Finance Team;</li>
                            <li>A pending compliance verification request. Wehodler is based in Cyprus and is regulated by Cyprus regulations. We, therefore, have to comply with Cyprus Anti-Money laundering regulations and carry out ongoing compliance checks accordingly. Once the compliance request is completed by the user, the transferred funds will be credited to your account. The verification request is being sent to your account email. Please check your email (spam) and make sure you completed all essential verification steps. If you have any question regarding compliance verification, please forward them in reply to the request or send them to <a href='mailto:compliance@wehodler.com' className='text-blue-500'>compliance@wehodler.com</a>.</li>
                        </ul>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setFour(!four)} className='flex items-center gap-2 cursor-pointer'>
                        {!four ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>How long does the crypto withdrawal take? Why is crypto withdrawal pending?</p>
                    </div>
                    {four && <div className='px-6 py-2'>
                        <p className='text-gray-600'>Most crypto withdrawals are quite fast and can take from several seconds to a few minutes. Bitcoin withdrawals can be processed a little longer than most coins or tokens due to its blockchain nature. In rare cases, the processing of crypto withdrawal requests can take some additional time depending on the market activity, blockchain load, compliance checks, and other factors. If you are facing any delay over 1 hour, please reach the support team for the futher transaction status check.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setFive(!five)} className='flex items-center gap-2 cursor-pointer'>
                        {!five ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>How long the fiat (EUR/USD/GBP wire) withdrawal takes?</p>
                    </div>
                    {five && <div className='px-6 py-2'>
                        <p className='text-gray-600'>The processing of bank wire withdrawal requests can take from a few business hours to a couple of business days. Once the withdrawal request is processed in the platfrom, the duration of fiat arrival depends on the payment type:</p>
                        <ul className='list-disc px-6 py-2 text-gray-600 mt-2'>
                            <li>USD, EUR (SWIFT) - up to business 5 days;</li>
                            <li>EUR (SEPA) - up to 2 business days;</li>
                        </ul>
                        <p className='text-gray-600 mt-2'>The delayed transfer processing time can be caused by the not completed compliance verification request. Wehodler is based in Cyprus and is regulated by Cyprus regulations. We, therefore, have to comply with Cyprus Anti-Money laundering regulations and carry out ongoing compliance checks accordingly. Once the compliance request is completed by the user, the transferred funds will be credited to your account. The verification request is being sent to your account email. Please check your email (spam) and make sure you completed all essential verification steps. If you have any question regarding compliance verification, please forward them in reply to the request or send them to <a href='mailto:compliance@wehodler.com' className='text-blue-500 underline'>compliance@wehodler.com</a>.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setSix(!six)} className='flex items-center gap-2 cursor-pointer'>
                        {!six ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>Why crypto deposit didn't arrive?</p>
                    </div>
                    {six && <div className='px-6 py-2'>
                        <p className='text-gray-600'>Usually, crypto transfers are processed quite fast (from few seconds to several minutes), and if a crypto deposit did not arrive, then there could be several reasons for that:</p>
                        <ul className='text-gray-600 list-disc px-6 py-2 mt-2'>
                            <li>The transaction hasn't been confirmed in the blockchain yet. In such case, simply wait for the confirmation;</li>
                            <li>A using of the smart contract (for ERC20 tokens transfers) on the sender's end. Using a smart contracts for ERC20 tokens transfers is possible, but requires a manual processing. In such a case please reach the support team for the futher transaction status check;</li>
                            <li>A system and the blockchain sync delay. In some cases, due to the high volume of incoming transactions, the system requires more time than usual for the sync with the blockchain for the futher deposits completion. If the delays is over 1 hour, reach the support team for the further transaction status check;</li>
                            <li>An incorrect transfer details (wrong address or unsupported transfer network). Indicating the wrong address or network can result in funds loss, but in some cases, funds could be recovered.</li>
                        </ul>
                        <p className='text-gray-600 mt-2'>For any of those cases, please provide the required <strong>Transaction ID (TxHash/Transaction Hash)</strong> required to track the transaction and reach the support team for the futher transaction status check. The TxHash can be found in the wallet history/transaction details or requested in the wallet support.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setSeven(!seven)} className='flex items-center gap-2 cursor-pointer'>
                        {!seven ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>What happens if I send crypto to the wrong address (network)?</p>
                    </div>
                    {seven && <div className='px-6 py-2 flex flex-col gap-2'>
                        <p className='text-gray-600'>Indicating the wrong address or network can result in funds loss, but in some cases, funds could be recovered (applied only to deposit transactions to your WeHodler wallet).</p>
                        <p className='text-gray-600'>The transaction sent from your WeHodler to external wallet using incorrect destination address or network, can't be reverted or recovered, if it is confirmed and processed in the blockchain. In such case you can reach the destination's side for a further check of the transfer status and possible funds recovery options.</p>
                        <p className='text-gray-600'>We strongly recommend following the transfer instructions as carefully to avoid a possible permanent loss of crypto funds.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setEight(!eight)} className='flex items-center gap-2 cursor-pointer'>
                        {!eight ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>How to buy crypto on the YouHodler platform?</p>
                    </div>
                    {eight && <div className='px-6 py-2'>
                        <p className='text-gray-600'>WeHodler provide several options to purchase crypto with different payment methods.</p>
                        <ul className='my-3 px-6 list-disc text-gray-600'>
                            <li><strong className='text-blue-500'>Bank wire.</strong> The cheapest way to buy crypto. Simply make a wire transfer to your YouHodler wallet and convert your funds to crypto with one of the lowest fees on the market.</li>
                            <li><strong className='text-blue-500'>Bank card.</strong> Deposit EUR or USD directly from your bank card to buy crypto within the platform.</li>
                            <li><strong className='text-blue-500'>Apple Pay.</strong> Use Apple Pay to top up your account to buy crypto within the platform.</li>
                            <li><strong className='text-blue-500'>AdvCash.</strong> Make an almost instant deposit via the AdvCash service to buy crypto within the platform.</li>
                        </ul>
                        <p className='mt-4 text-gray-600'>The most cost-effective way to buy crypto on WeHodler is to deposit fiat funds, and then convert them into any crypto available on the platform. A user can access the conversion option from any wallet of their YouHodler account.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setNine(!nine)} className='flex items-center gap-2 cursor-pointer'>
                        {!nine ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>Why has my balance changed? Even though I didn't do anything, its total value went down.</p>
                    </div>
                    {nine && <div className='px-6 py-2'>
                        <p className='text-gray-600'>The total portfolio value displayed on the Wallet screen in USD or EUR (to be chosen by a user) of all assets is the indicator reflecting the total worth including fiat funds and crypto coins or tokens, calculated at the current price of each individual asset in the portfolio. Therefore, if the market value of the assets in the portfolio changes, the total worth of a your portfoliochanges respectively.</p>
                    </div>}
                </div>
                <div className='mt-1'>
                    <div onClick={()=> setTen(!ten)} className='flex items-center gap-2 cursor-pointer'>
                        {!ten ? <MdArrowRight />: <RiArrowDownSFill />}
                        <p className='font-semibold'>How secure are my funds? Do you have insurance?</p>
                    </div>
                    {ten && <div className='px-6 py-2'>
                        <p className='text-gray-600'>All customers funds are secured. As Cyorus (EU) based and regulated company, WeHodler has a legal obligation to return the customer's assets. You can explore a detailed info about the customers protection policy here.</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export const WallethelpThree = () => {
    const [name, setName] = useState('How to deposit Crypto and Stablecoins')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to deposit crypto to your WeHodler wallet</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6'>
                <p>To deposit crypto please go to the Wallets section and click the Deposit button on the crypto wallet of your choice.</p>
                <img src={wallettwo} alt="wallet" className='block' />
                <p>Simply copy your wallet address or scan a QR-code to send your coins to this address. Once your crypto funds arrive, you will be notified via SMS and email.</p>
                <p className='font-semibold'>Please be advised</p>
                <ul className='font-semibold list-disc py-2 px-6'>
                    <li>By depositing you acknowledge that WeHodler is not responsible for any digital assets sent to the wrong address;</li>
                    <li>In the case of sending funds with the wrong transaction Memo ID/Destination tag/Memo, the funds will not be deposited to your WeHodler wallet with no possibility of sending them back to the sender's wallet.</li>
                    <li>The transaction confirmation time could vary based on the conditions of the corresponding network.</li>
                </ul>
            </div>
        </div>
    )
}

export const WallethelpFour = () => {
    const [name, setName] = useState('How to make a deposit')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to top up your WeHodler account</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>WeHodler provides various methods to top up your account using crypto, stablecoins, and fiat currencies.</p>
                <ul className='list-disc px-6 py-2'>
                    <li><strong className='text-blue-500'>Crypto/stablecoins deposit</strong> - the fastest way to top up your WeHodler account.  In case you don't have crypto yet you can deposit fiat currency and convert it to crypto within the platform;</li>
                    <li><strong className='text-blue-500'>Connect wallet</strong> - by using the connect wallet feature to sync your WeHodler account to your external wallet;</li>
                    <li><strong className='text-blue-500'>By bank wire</strong> - this is the cheapest way to deposit fiat funds;</li>
                    <li><strong className='text-blue-500'>Bank card</strong> - deposit EUR or USD directly from your bank card;</li>
                    <li><strong className='text-blue-500'>Apple Pay</strong> - use Apple Pay to top up your account;</li>
                </ul>
                <p>Once funds reach your wallet, you'll be notified.</p>
                <p className='font-semibold'>Please be advised:</p>
                <ul className='list-disc px-6 py-2 font-semibold'>
                    <li>To deposit crypto your account should be verified;</li>
                    <li>To use the bank wire option you need to verify your address;</li>
                    <li>When sending your coins please make sure you use the correct network;</li>
                    <li>The Bank card and Apple Pay options are available in the EU, UK, Cyprus and Switzerland regions for Visa (EUR, USD) cards only;</li>
                    <li>The AdvCash provider requires an independent identity verification procedure that could take from a few minutes to a few hours.</li>
                </ul>
            </div>
        </div>
    )
}

export const WallethelpFive = () => {
    const [name, setName] = useState('Blockchain confirmation')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Blockchain confirmation conditions and timing</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='font-bold text-xl mt-2'>What is Blockchain confirmation?</h2>
                <p>Blockchain confirmation means that the transaction has been processed by the network. This is a measure of how many blocks have passed since your transaction was added to the blockchain. Once your transaction has been included in a mined block, the transaction receives a confirmation. The more confirmations, the more secure your transaction, and the faster it will be processed.</p>
                <h2 className='font-bold text-xl mt-2'>Why do we need it?</h2>
                <p>To avoid the risks of double-spending (the case where the same single token can be spent more than once), the transaction is not completed until a certain number of confirmations have been reached.</p>
                <h2 className='font-bold text-xl mt-2'>How to watch confirmation progress?</h2>
                <p>Each transaction in the blockchain has a progress bar that shows the confirmation progress. You can check your transaction confirmation status using the transaction ID (TxHash/txid/Hash) from your wallet transaction history or by requesting from the wallet provider. Simply copy Tx into the relevant currency explorer searching bar.</p>
                <h2 className='font-bold text-xl mt-2'>Why is my transaction taking too long to confirm?</h2>
                <p>The transaction confirmation delays can be caused by high transactions volume in the blockchain. Such a thing happens due to the high activity in the market and, as a result, a large number of transactions.</p>
                <h2 className='font-bold text-xl mt-2'>Can I cancel the crypto transaction?</h2>
                <ul className='list-disc px-6 py-2'>
                    <li>If your transaction is pending on wallet provider's side and is not yet in the blockchain, then you can contact wallet support and find out if it can be canceled.</li>
                    <li>If your transaction is already in the blockchain, it cannot be canceled. </li>
                </ul>
                <p className='font-semibold'>Please be advised:</p>
                <ul className='font-semibold list-disc px-6 py-2'>
                    <li>We can not affect the speed of the confirmation process;</li>
                    <li>The transaction confirmation time may vary based on the conditions of the corresponding network.</li>
                </ul>
            </div>
        </div>
    )
}

export const WallethelpSix = () => {
    const [name, setName] = useState('How to buy crypto')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>WeHodler crypto purchasing options</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6'>
                <p>WeHodler provide several options to purchase crypto with different payment methods.</p>
                <ul className='list-disc py-2 px-6'>
                    <li className='mb-1'><strong>Bank wire</strong>. The cheapest way to buy crypto. Simply make a wire transfer to your WeHodler wallet and convert your funds to crypto with one of the lowest fees on the market. </li>
                    <li className='mb-1'><strong>Bank card</strong>. Deposit EUR or USD directly from your bank card to buy crypto within the platform. </li>
                    <li className='mb-1'><strong>Connect wallet</strong>. Use the connect wallet button to buy crypto directly from your external wallet</li>
                    <li className='mb-1'><strong>Apple Pay</strong>. Use Apple Pay to top up your account to buy crypto within the platform.</li>
                    <li><strong>AdvCash</strong>. Make an almost instant deposit via the AdvCash service to buy crypto within the platform.</li>
                </ul>
                <div className='font-semibold mt-6'>
                    <p>Please be advised:</p>
                    <ul className='list-disc py-2 px-6'>
                        <li className='mb-1'>To make a deposit your account should be verified;</li>
                        <li className='mb-1'>The Bank card option is available in the EU (SEPA zone), Cyprus and Switzerland regions, and for Visa card only;</li>
                        <li className='mb-1'>To use the bank wire option you need to verify your address;</li>
                        <li className='mb-1'>Apple Pay option is available in the EU (SEPA zone) region only;</li>
                        <li>The AdvCash provider requires an independent identity verification procedure that could take from a few minutes to a few hours.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const WallethelpSeven = () => {
    const [name, setName] = useState('How to withdraw Crypto and Stablecoins')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to send crypto to another wallet</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>To withdraw crypto to another wallet, just go to your Wallet page. Find the crypto you want to send and click the <strong>Withdraw</strong> button.</p>
                <p>Enter the wallet address and the amount of crypto you want to send in the Withdrawal form. Select the correct network as failure to do this can result in losses. Click on the <strong>WITHDRAW</strong> button.</p>
                <img src={withdrawone} alt="withdraw" className='block w-[90%] mt-4' />
                <p className='mt-4'>You can see your transaction status in the Transaction history of your account.</p>
                <div className='font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc py-2 px-6'>
                        <li>To withdraw crypto from the platform, your account should be verified;</li>
                        <li>You can check the actual withdrawal fees of any available coin in the withdrawal form of your wallet;</li>
                        <li>The transaction confirmation time could vary based on the conditions of the corresponding network;</li>
                        <li>By withdrawing you acknowledge that YouHodler is not responsible for any digital assets sent to the wrong address.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const WallethelpEight = () => {
    const [name, setName] = useState('BTC Address formats')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>The difference between SegWit and Bech32</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='flex flex-col gap-3 my-6'>
                <p>There are several BTC address formats (protocols) that crypto-related services support. YouHodler supports the top two BTC address formats - SegWit and Bech32. Before the deposit you must choose the correct type of the wallet. For withdrawals, our platform automatically determines the type of wallet using the address format.</p>
                <h2 className='text-center text-xl font-bold'>Bech32</h2>
                <p>Bech32 is the advanced BTC address format that starts with the bc1. Since this is the newest wallet format, statistically the speed of transaction processing is slower than other types of BTC addresses but as with any transaction, the exact speed depends on the blockchain capacity and workload at the particular time.</p>
                <h2 className='text-center text-xl font-bold'>SegWit</h2>
                <p>SegWit is the most common BTC address format that almost all businesses and wallets support. It starts with the number 3 and contains 26 to 36 characters. The average transaction fee and time can be higher for Bech32 but as with any transaction, it depends on the state of the blockchain.</p>
                <p className='font-semibold'>Before making the transfer, please check the address format of your wallet provider.</p>
            </div>
        </div>
    )
}

export const WallethelpNine = () => {
    const [name, setName] = useState('Supported Networks')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Supported networks for crypto deposits and withdrawals</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6'>
                <p>In order to make crypto transactions convenient, fast and cheap, we integrated a number of different networks. Please, see the networks for each crypto in the list below :-</p>
                <table className='w-full mt-4 border text-center'>
                    <thead>
                        <td className='border'></td>
                        <td className='border'>ERC20</td>
                        <td className='border'>BEP2</td>
                        <td className='border'>BEP20(BSC)</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='w-[25%] p-2 border'>COMP | BAT | USDC | MKR | SNX | DAI | LINK | UNI 1INCH</td>
                            <td className='w-[25%] p-2 border'></td>
                            <td className='w-[25%] p-2 border'>+</td>
                            <td className='w-[25%] p-2 border'>+</td>
                        </tr>
                        <tr>
                            <td className='p-2 border'>REP | TUSD | BNT | FTT | ZRX | OMG | PAXG</td>
                            <td className='border'>+</td>
                            <td className='border'></td>
                            <td className='border'></td>
                        </tr>
                        <tr>
                            <td className='p-2 border'>USDT</td>
                            <td className='border'>+</td>
                            <td className='border'></td>
                            <td className='border'>+</td>
                        </tr>
                        <tr>
                            <td className='p-2 border'>BTT | ADA | AVAX | TRX | DOGE | CAKE | ZIL | NEAR | FIL | ATOM</td>
                            <td className='border'></td>
                            <td className='border'></td>
                            <td className='border'>+</td>
                        </tr>
                    </tbody>
                </table>
                <div className='font-semibold mt-4'>
                    <p>Please be advised:</p>
                    <ul className='list-disc py-2 px-6'>
                        <li>By withdrawing you acknowledge that WeHodler is not responsible for any coins sent to the wrong address.</li>
                        <li>Please, make sure that the destination wallet supports the network that you are using to send crypto;</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const WallethelpTen = () => {
    const [name, setName] = useState('Crypto withdrawals wallet requirements')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Withdrawals wallet requirements for XLM, DOT, XRP, EOS and XTZ</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-3'>
                <p>WeHodler can't process a crypto withdrawal transaction of XLM, DOT, XRP, EOS, and XTZ to an external non-activated wallet. </p>
                <p>If you withdraw XLM, DOT, XRP, EOS, and XTZ from WeHodler please make sure your external wallet is activated i.e. has a history of transactions. </p>
            </div>
        </div>
    )
}

export const WallethelpEleven = () => {
    const [name, setName] = useState('What happens if I use the wrong network or coin')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-3'>
                <p>Due to the crypto decentralized nature, it is extremely important to pay close attention to the crypto transaction creating process. An incorrect network or destination wallet address may lead to the loss of funds. For that reason, we are kindly asking to pay very close attention to the crypto transactions. If you sent an unsupported coin or used an incorrect network please follow these recommendations:</p>
                <h2 className='font-bold text-lg'>Withdrawal from WeHodler to the external wallet using the incorrect network.</h2>
                <p>We will not be able to alter the results of the transaction that has been executed (confirmed) in the blockchain. If such a situation occurs please reach the destination wallet owner.</p>
                <h2 className='font-bold text-lg'>Deposit from the external wallet to the WeHodler wallet.</h2>
                <p>If you have sent an unsupported coin to your WeHodler wallet or used unsupported network, please collect these data:</p>
                <ul className='list-disc px-6 py-2'>
                    <li>Transaction Hash (TxHash/TxID);</li>
                    <li>The transfer currency;</li>
                    <li>Used network (ERC20, BSC, or other) or link to the blockchain explorer with the transaction details;</li>
                    <li>WeHodler Account ID or email.</li>
                </ul>
                <p>Please send all the required data in one email to <a href='mailto:support@wehodler.com' className='text-blue-500 cursor-pointer underline'>support@wehodler.com</a>. WeHodler Team will review the transaction and evaluate if the recovery of the transaction is feasible.</p>
                <div className='font-semibold mt-4'>
                    <p>Please be advised</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>We will be able to review the request if the transaction is over 100 USD worth of crypto;</li>
                        <li>WeHodler will charge a service fee of 10% but not lower than 100 USD. The final service fee amount for the recovery process will be determined during the review. This evaluation is final. If it is decided that a recovery will be tried;</li>
                        <li>The timeframe of the review and recovery process may vary. In practice, the review of such a case can take from several weeks to several months. Therefore there is no need to contact our team regarding the review status. Once there is a resolution, we will contact you directly.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const WallethelpTwelve = () => {
    const [name, setName] = useState('How to withdraw EUR/USD/GBP with Bank Wire')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Send funds to your EUR/USD/GBP/CHF bank account</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>To withdraw the fiat borrowed funds from your WeHodler account using a bank wire, go to your Wallets and press the <strong>Withdraw</strong> button on the fiat wallet panel.</p>
                <p>Choose the Bank Wire option in the Withdrawal options form.</p>
                <img src={withdrawfiat} alt="withdrawfiat" className='block w-[90%] my-4' />
                <p>Fill out the <strong>IBAN</strong> and Account number sections in the withdrawal form with your bank account details and press <strong>CONTINUE</strong>.</p>
                <div className='font-semibold mt-4'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>All transfers are approved almost instantly during working bank hours. The banking day schedule is 10:00 - 17:00 CET;</li>
                        <li>To use the bank wire option you need to verify your address;</li>
                        <li>Due to regulatory prohibitions we don't support fiat wire transfers from/to Singapore;</li>
                        <li>Bank wire processing time: <ul className='px-6 py-2 list-disc'>
                                <li>USD (SWIFT) - up to 5 days;</li>
                                <li>EUR (SEPA) - up to 2 business days;</li>
                                <li>EUR (SWIFT) - up to 5 days;</li>
                                <li>GPB, CHF - up to 3 days.</li>
                            </ul></li>
                        <li>The withdrawal commission: <ul className='px-6 py-2 list-disc'>
                                <li>USD (SWIFT) - 1.5% (min 85 USD);</li>
                                <li>EUR (SEPA) - 5 EUR;</li>
                                <li>EUR (SWIFT) - 55 EUR;</li>
                            </ul>
                        </li>
                        <li>Min withdrawal amount: <ul className='px-6 py-2 list-disc'>
                                <li>500 for USD/EUR (SWIFT);</li>
                                <li>300 for GBP;</li>
                                <li>30 for EUR (SEPA);</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const WallethelpThirteen = () => {
    const [name, setName] = useState('How to deposit EUR/USD/GBP with Bank Wire')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to top up your account with fiat funds</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>To deposit fiat funds to your wallet, go to the Wallets page. There you will see fiat wallets.</p>
                <p>Click the <strong>Deposit</strong> button on the wallet you want to top up.</p>
                <img src={depositfiat} alt="deposit" className='block w-[90%] my-4' />
                <p>After you pick the Bank wire option, you will see the bank account info to make a bank wire deposit.</p>
                <div className='font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>To use the bank wire option you need to verify your address;</li>
                        <li>The commission on incoming bank wire transfers is 0 (except USD SWIFT - 25 USD per deposit; GBP - 20 GBP per deposit);</li>
                        <li>The sender of the bank wire must be the WeHodler company client;</li>
                        <li>We accept transfers from personal bank accounts only;</li>
                        <li>All deposits without the “Description” field must be on hold for no more than 10 business days.</li>
                        <li>Bank wire processing time: <ul className='list-disc px-6 py-2'>
                                <li>USD, EUR (SWIFT) - up to business 5 days</li>
                                <li>EUR (SEPA) - up to 2 business days</li>
                                <li>GBP - up to business 3 days.</li>
                            </ul>
                        </li>
                        <li>If the user claimed ownership of the “unrecognized” transaction in Customer Support communication, then the user should provide additional info: <ul className='list-disc px-6 py-2'>
                                <li>Bank statement from the client's bank account with this transaction clearly visible, and/or:</li>
                                <li>A letter from the customer bank with confirmation that the client sent this amount.</li>
                            </ul>
                        </li>
                        <li>If no one claims ownership of the transfer within 10 business days, the transfer will be sent back to the sender's account. A transaction fee will be charged from the amount.</li>
                        <li>The company reserves the right to request additional documents or verification steps including but not limited to video call verification, proof of source of funds, a selfie with the document, etc.</li>
                        <li>The Company is obliged to return your funds in the event that you refuse to provide any information or to accept to undergo any procedures which may be requested from time to time by our compliance team. Fees incurred for refusing to provide information or to undergo procedures shall be charged to your funds;</li>
                        <li>Due to regulatory prohibitions we don't support fiat wire transfers to/from Singapore.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const WallethelpFourteen = () => {
    const [name, setName] = useState('Bank card deposit')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to make a deposit using a bank card</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>To deposit EUR or USD with your bank card, click on the wallet Deposit button and select the Bank Card option.</p>
                <img src={bankcard} alt="card" className='block w-[90%] my-4' />
                <p>Then fill out the amount and press the Pay button.</p>
                <div className='font-semibold mt-4'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>The Bank card option is available in the EU, UK, Cyprus and Switzerland regions for Visa (EUR, USD) cards only. Mastercard is available for Switzerland only. </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const WallethelpFifteen = () => {
    const [name, setName] = useState('How to convert crypto and fiat funds')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Guide to exchanging crypto-to-crypto and fiat-to-crypto</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>To convert crypto-to-fiat and crypto-to-crypto, please go to the Wallets page. There, you will see a list of wallets. If you have any balance on your wallet, you will see a convert option available:</p>
                <p>By clicking on the <strong>EXCHANGE</strong> button you will be brought to the conversion form. The same form can be used for any type of conversion. On the left side, you will choose the amount you want to spend. On the right side, you can see the amount you will receive as a result of the conversion.</p>
                <img src={convertone} alt="convert" className='block w-[90%] my-4 mx-auto' />
                <p>Once you're ready, please click on the <strong>CONVERT</strong> button. You will see your converted transaction in the transaction history with a Pending status. </p>
                <p>After the transaction is complete, you will see the actual amount you got from the conversion. This amount will appear in your wallet.</p>
                <div className='mt-2 font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>While your transaction is executing, the actual amount you will get after the conversion may differ approximately ±1% from the expected exchange rate you saw on the conversion form;</li>
                        <li>In order to convert funds anywhere within the platform, you need to verify your account;</li>
                        <li>WeHodler uses leading crypto exchanges to provide customers with real-time crypto conversion execution. Please note, that real execution can take up to several hours depends on the blockchain;</li>
                        <li>The funds of the coin you are converting should be immediately taken from your wallet, but the converted amount will be deposited only after real conversion execution takes place.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const WallethelpSixteen = () => {
    const [name, setName] = useState('Crypto conversion commissions & time')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Wallet</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Timimg involved and conversion commissions</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='text-center text-lg font-bold'>Conversion</h2>
                <ul className='list-disc px-6 py-2'>
                    <li>Stablecoins  -&gt; Stablecoins - <strong>instant</strong></li>
                    <li>Crypto -&gt; Fiat - <strong>instant</strong></li>
                    <li>Fiat -&gt; Stablecoins - <strong>instant</strong></li>
                    <li>Crypto -&gt; Crypto - <strong>5-30 min</strong></li>
                    <li>Crypto -&gt; Stablecoins - <strong>5-30 min</strong></li>
                </ul>
                <div className='font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>WeHodler uses real conversion execution, so conversion time may vary depending on blockchain network performance at the time of conversion;</li>
                        <li>The minimum crypto-to-fiat and fiat-to-crypto transaction amount is 40 USD or the equivalent in a convertible currency. </li>
                    </ul>
                </div>
                <p className='italic'><strong><sup>*</sup>Fiat</strong> - is regular money such as USD or EUR;</p>
                <p className='italic'><strong><sup>*</sup>Stablecoins</strong> - USDT, USDC, PAX, etc.;</p>
                <p className='italic'><strong><sup>*</sup>Cryptocurrency</strong> - is a digital asset designed to work as a medium of exchange that uses strong cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets.</p>
            </div>
        </div>
    )
}

const Wallethelp = () => {
    const [name, setName] = useState('Wallet')
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
            <BsWallet2 size={40} color='#3b82f6' />
            <h2 className='text-2xl font-bold uppercase my-3'>{name}</h2>
            <p>How to navigate &amp; use your WeHodler wallet</p>
            <p className='text-gray-500'>16 articles</p>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <div className='p-4 mb-2 border-b border-b-gray-300'>
                <p className='font-bold text-lg'>How to use your wallet</p>
            </div>
            <Link to={`wallethelpone`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to use your wallet</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`wallethelptwo`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Wallet FAQ</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <div className='p-4 mb-2 border-b border-b-gray-300'>
                <p className='font-bold text-lg'>Crypto wallet</p>
            </div>
            <Link to={`wallethelpthree`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to deposit Crypto and Stablecoins</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`wallethelpfour`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to make a deposit</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`wallethelpfive`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Blockchain confirmation</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`wallethelpsix`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to buy crypto</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`wallethelpseven`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to withdraw Crypto and Stablecoins</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`wallethelpeight`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>BTC Address formats</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`wallethelpnine`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Supported Networks</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`wallethelpten`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Crypto withdrawals wallet requirements</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`wallethelpeleven`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>What happens if I use the wrong network or coin</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <div className='p-4 mb-2 border-b border-b-gray-300'>
                <p className='font-bold text-lg'>Fiat wallet</p>
            </div>
            <Link to={`wallethelptwelve`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to withdraw EUR/USD/GBP with Bank Wire </p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`wallethelpthirteen`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to deposit EUR/USD/GBP with Bank Wire</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`wallethelpfourteen`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Bank card deposit</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <div className='p-4 mb-2 border-b border-b-gray-300'>
                <p className='font-bold text-lg'>Conversion</p>
            </div>
            <Link to={`wallethelpfifteen`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to convert crypto and fiat funds</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`wallethelpsixteen`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Crypto conversion commissions &amp; time</p>
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

export default Wallethelp