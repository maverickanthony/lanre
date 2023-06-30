import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineAccountBalance } from 'react-icons/md'
import { SiShopware } from 'react-icons/si'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import signupone from '../data/signupone.png'
import resetpass from '../data/resetpass.png'
import verifyone from '../data/verifyone.png'
import verifytwo from '../data/verifytwo.png'
import verifycard from '../data/verifycard.png'
import verifythree from '../data/verifythree.png'
import chatone from '../data/chatone.png'
import smsauthy from '../data/smsauthy.png'
import moneylaun from '../data/moneylaun.png'


export const AccounthelpOne = () => {
    const [name, setName] = useState('How do I sign up')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to open a WeHodler account</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6'>
                <p>First, visit the <a className='text-blue-500 underline' href='https://wehodler.com'>wehodler.com</a> landing page. We recommend having a look around first. On the wehodler.com page, click the GET STARTED button, or simply go directly to our <a className='text-blue-500 underline' href='https://wehodler.com/signup'>sign-up</a> page.</p>
                <img src={signupone} alt="sign-up" className='block my-4' />
                <p>Here, you can enter your email and password. Once you enter that information, click on the <strong>SIGN UP</strong> button. </p>
            </div>
        </div>
    )
}

export const AccounthelpTwo = () => {
    const [name, setName] = useState('How to receive email messages from WeHodler')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>What to do if you do not receive email messages from WeHodler</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>Email messaging service is essential for a few security services. Such as basic 2fa, restoring passwords etc.</p>
                <p>Our system sends the message within a few seconds. However, as unfortunate as it might be, we cannot control the delivery rate.</p>
                <p>If you did not receive an email from the system to perform any of the aforementioned actions, please follow these recommendations:</p>
                <ul className='list-disc px-6 py-2'>
                    <li>Check your Spam and Archive folders, filters, and settings to make sure your inbox receives mail properly;</li>
                    <li>Make sure that you added our email domains to the whitelist/trusted senders list - @wehodler.email. This is a specific domain that we use to send system messages.</li>
                    <li>If you are having issues adding domains yourself, please reach your email provider's support team</li>
                </ul>
                <h2 className='text-xl font-bold'>What do I do if that did not work</h2>
                <p>If after all the actions that are described above, you still cannot see the email messages that WeHodler system is sending, as a final option, we can offer changing email address (aka. login to your WeHodler account).</p>
                <p>To change your account email, please provide a selfie with the document you used to verify your account and with a paper on the one-shot. Write the following data on the paper:</p>
                <ul className='list-disc px-6 py-2'>
                    <li>Our company name; </li>
                    <li>The current date;</li>
                    <li>A text "Change email from X to Y", where X and Y are old and new email addresses. </li>
                </ul>
                <p>Please send your selfie to <a href='support@wehodler.com' className='text-blue-500 underline'>support@wehodler.com</a>. </p>
            </div>
        </div>
    )
}

export const AccounthelpThree = () => {
    const [name, setName] = useState('How to reset your password')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to set a new password on your account</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='flex my-6 flex-col gap-2'>
                <p>To reset your account password go to Profile page and press the Reset Password button.</p>
                <img src={resetpass} alt="reset" className='block w-[90%] my-4' />
                <p>You will receive an email with the password reset link.</p>
                <p>By clicking on the link you receive in your email you will be redirected to the <strong>New password</strong> page. Create a new strong password (this should be different from previous passwords) and click the Restore button.</p>
                <p>As soon as you set your new password, go to the <strong>Sign In</strong> page and log in to your account using your new password.</p>
            </div>
        </div>
    )
}

export const AccounthelpFour = () => {
    const [name, setName] = useState('Beneficial ownership confirmation')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Essential steps</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>As an EU (Cyprus) based regulated company, we have an obligation to comply with Anti Money Laundering regulations regarding the identification and verification process of new customers, as well as ongoing due diligence regarding old customers. The first required verification step is the signing of the Beneficiary ownership confirmation form.</p>
                <p className='font-semibold'>With this document, the customer simply confirms that they are the sole beneficial owner of the funds that they will use on the platform.</p>
                <p>Please note, <span className='font-semibold'>customers may be sent a separate KYC form as part of the AML Due diligence process; both forms are necessary</span>.</p>
                <p>To sign the Beneficial ownership confirmation please go to your Profile section/Account Verification and press the <strong>Verify</strong> button on the account verification form.</p>
                <p>In the next two steps, you need to fill our your personal and address data.</p>
                <h2 className='text-lg font-bold text-center my-4'>Sign your contract</h2>
                <img src={verifyone} alt="verify" className='block my-2 w-[90%] mx-auto' />
                <img src={verifytwo} alt="verifytwo" className='block my-2 w-[90%] mx-auto' />
                <p>After submitting the form, you can proceed with the next verification steps to start using the platform. </p>
                <p className='font-semibold'>Please note that, once you start using the platform, there might be some additional verification steps requested by the compliance team in line with regulations and company policies. As much as this is about regulations, it is also about ensuring that your funds on the platform are protected.</p>
            </div>
        </div>
    )
}

export const AccounthelpFive = () => {
    const [name, setName] = useState('How to verify your identity')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Pass KYC to start using the platform</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>After you log into your new WeHodler account, you'll be brought to a Profile page. You cannot use the platform without verifying your identity. Fortunately, the process is quick and easy. You are expected to send a photo with a vaild Identity document</p>
                <p>Make sure the quality of pictures is good enough and all document's optical security features are clearly visible and the chosen document meet the following requirements:</p>
                <ul className='list-disc px-6 py-2'>
                    <li>Allowed document types: <strong>International passport/International Identity card</strong></li>
                    <li>Document's optical security features are clearly visible;</li>
                    <li>Scans of both sides of a document are provided (if required);</li>
                    <li>The document is not expired;</li>
                    <li>The document should be in <strong>Latin (A,B,C, etc,)</strong> alphabet;</li>
                    <li>The document should contain <strong>MRZ (Machine Readable Zone)</strong></li>
                </ul>
                <img src={verifycard} alt="" className='block w-[90%] mx-auto my-2' />
                <p className='font-semibold'>Please be advised:</p>
                <ul className='list-disc px-6 py-2 font-semibold'>
                    <li>In a rare scenario that there is a problem with the auto-scanning of your documents, our team will review it manually. This could take up to 24 hours;</li>
                    <li>Our team will contact you in case you need to re-submitting something;</li>
                    <li>You will get an email and SMS with your identity verification result. </li>
                </ul>
            </div>
        </div>
    )
}

export const AccounthelpSix = () => {
    const [name, setName] = useState('How to verify your email address')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to verify your account email address</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>To verify your email go to your profile settings. Click the <strong>Verify</strong> button on the email verification form to request the verification code.</p>
                <img src={verifythree} alt="verifyth" className='block w-[90%] my-2 mx-auto' />
                <p>The email with the security code will be sent to the email you provided on the Sign-up form.</p>
                <p>Copy your verification code in the verification form to verify your email address.</p>
                <div className='font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li className='mb-1'>If you made a typo in your email and your account is not verified yet, please repeat Sign up process using the correct email;</li>
                        <li className='mb-1'>If you've already verified your account and want to change your email, please take a selfie with the document you used to verify your account and a paper (with our company name (WeHodler), the current date, and the following text "Change email from X to Y" (where X and Y are old and new email addresses) on the one-shot. Send your selfie to <a href='mailto:support@wehodler.com' className='text-blue-500 underline'>support@wehodler.com</a>;</li>
                        <li className='mb-1'>If for some reason you don't receive the verification code, please send the following message "Verify my email" from your account email to <a href='mailto:support@wehodler.com' className='text-blue-500 underline'>support@wehodler.com</a>. Your email address will be verified manually.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const AccounthelpSeven = () => {
    const [name, setName] = useState('How to verify your residential address')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>Once you've signed the Beneficiary ownership confirmation and verified your identity you can verify your address. </p>
                <h2 className='font-bold text-lg text-center'>Proof of Residence</h2>
                <div className='flex gap-2'>
                    <div>
                        <p>We accept:</p>
                        <ul className='list-disc px-6 py-2'>
                            <li>Bank Statements</li>
                            <li>Utility bills(not older than 3months)</li>
                            <li>Internet/Cable/house Phone bills</li>
                            <li>Tax returns</li>
                            <li>Government-issued certification of residence, etc.</li>
                        </ul>
                    </div>
                    <div className='text-red-400'>
                        <p>We don't accept:</p>
                        <ul className='list-disc px-6 py-2'>
                            <li>Mobile phone bills</li>
                            <li>Screenshots</li>
                            <li>Medical bills</li>
                            <li>Receipts from purchases</li>
                            <li>Insurance statements</li>
                        </ul>
                    </div>
                </div>
                <p>You can watch the verification progress in the Profile section of your account. You'll be notified via email about the verification result.</p>
                <div className='font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>We do not accept photos of electronic documents (document screenshot, photo of monitor with the document, screenshot of the document from a mobile device, etc.);</li>
                        <li>Make sure your document meets the platform requirements listed in the verification form;</li>
                        <li>The address verification is required to unlock fiat (wire) operation on the platform. We support fiat (wire) transfers only from/to countries you see in the list in the address verification form;</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const AccounthelpEight = () => {
    const [name, setName] = useState('How to verify your phone number')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Phone number verification</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>To verify your phone number go to Profile/Verification section and press the <strong>Verify</strong> button on the Phone verification form.</p>
                <img src={verifythree} alt="phone" className='block w-[90%] mx-auto my-2' />
                <p>Choose the country code, fill out your number into in the form and press <strong>Continue</strong>. The verification code will be send to your number.</p>
                <div className='font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>If SMS is not coming, check and reboot your mobile connection (with your mobile provider);</li>
                        <li>If SMS still doesn't arrive, please reach our support team via support chat or <a href='mailto:support@wehodler.com' className='text-blue-500 underline'>support@wehodler.com</a>.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const AccounthelpNine = () => {
    const [name, setName] = useState('Source of Funds')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to verify your source of funds</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>In accordance with the Compliance and AML regulations, YouHodler can request the Source of Funds confirmation document. </p>
                <p>Your source of funds is what you would answer if someone said "<span className='italic'>So how do you make your money</span>". It could otherwise be termed "the origin of your wealth" i.e. <span className='italic'>It is your regular income with which you purchase the coins that eventually enter the platform</span>.</p>
                <ul className='list-disc px-6 py-2'>
                    <li className='mb-1'>In most cases, this is salary or company dividends. In a few exceptional cases, people have received a large inheritance or property sale which dwarfs their regular income, but this is rare. </li>
                    <li className='mb-1'>Please note, <strong>Crypto/investments will only be your source of funds if you would classify that as your MAIN source of income (i.e. you are mining/trading professionally)</strong>. You are not advised to designate these options if this is merely how you store/invest your savings from your salary/company/inheritance/gift, as then the salary/company/inheritance/gift would be the SOF.</li>
                    <li className='mb-1'>A bank statement isn't good source of funds in and of itself (it will normally only ever serve as supplemental evidence) as, while it does show that you do have funds, it doesn't show us the legitimate nature of the provenance of those funds.</li>
                </ul>
                <p>This documentation is required by Cyprus Anti-money Laundering legislation and is asked of all active users on the platform. Such requests are not made with every transaction on the platform, nor are they linked to specific transactions. </p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='my-3 font-bold text-lg'>Source of Funds</h2>
                <p>We can accept the following document types:</p>
                <ul className='list-disc px-6 py-2'>
                    <li className='mb-1'><strong>Where SOF is salary, pension, or savings</strong> - Recent payslips, Income tax statements, Employment contracts, Pension statements  (no older than six months) Any and all company names and the name you have registered must be clearly visible on all the provided documents;</li>
                    <li className='mb-1'><strong>Property sale</strong> - A notarized contract for property sale or extract from the land registry, accompanied by bank statements (with the account balance and receipt of payment clearly visible) / confirmation of stamp duty;</li>
                    <li className='mb-1'><strong>Where SOF is company dividends/ sale of a company</strong> - Company accounts, shareholding documents, Proof of income from capital assets or company investments (e.g. bank statement, distribution agreements, dividend resolutions, and current account balance) or  Proof of the sale of shares in a company;</li>
                    <li className='mb-1'><strong>Gift/Inheritance</strong> - A trust deed, Attestation from the executor of a will/notarial proof of gift/inheritance;</li>
                    <li className='mb-1'><strong>Loan/mortgage</strong> - a mortgage or Loan contract in combination with bank statements showing the transaction;</li>
                    <li className='mb-1'><strong>Property management</strong> - Proof of income from renting and leasing (e.g. rental agreement at the time of the agreement being signed and proof of the last rental payment);</li>
                    <li className='mb-1'><strong>Crypto assets</strong> - Screenshots of purchase and withdrawal confirmation displaying your account ID and all transaction details; Confirmation emails/Receipts which provide proof of purchase or withdrawal; Receipts which provide proof of purchase); Screenshots of the transaction history displaying trading profits made on other brokers or exchanges; In the case of an ICO, the full name of the ICO and the associated project's website must be visible -  We also need to know the exact amount invested in the cryptocurrency and the equivalent value in fiat at the time of the investment - In addition, we need the transaction history that documents the purchase and withdrawal of the token (wallet addresses and transaction ID);</li>
                    <li className='mb-1'><strong>Sale of (non-land) assets</strong> - Proof of income from investments (e.g. artwork, collector's items), such as contracts and payment receipts which contain information on the buyer and seller;</li>
                    <li className='mb-1'><strong>Crypto mining</strong> - Receipts for the purchase of mining hardware, on which the address of the buyer (the name that you have registered) and seller are displayed; Photos of mining hardware and screenshots of the platforms and programs used; Operating cost statements (e.g. electricity bills) also issued in the name that you have registered.</li>
                </ul>
                <p>Please, see the requirements for the document:</p>
                <ul className='list-disc px-6 py-2'>
                    <li>The document could be paper (scan or photo) or electronic (PDF/JPG/PNG);</li>
                    <li>The document should contain your full name;</li>
                    <li>The document is written in Latin (e.g. A,B,C,D, etc.) alphabet; in scenarios where it is completely impossible (e.g. payslip issued in kanji) please make sure the image is of high quality, scanned so that it is completely legible and bear in mind that processing may take longer;</li>
                    <li>The Document should cover all future and past crypto &amp; fiat deposits; i.e. it is not the origin of a specific transaction, but the regular income with which all of your investments are made (i.e. how you make your money, that you have spare to invest). </li>
                    <li>Where the document does not reflect regular income (e.g. salary, pension), and is a one time event (e.g. Sale of property) it should cover a significant proportion of your assets on the platform to be accepted as plausible SOF.</li>
                </ul>
                <div className='font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>We do not accept photos of electronic documents (document screenshot, photo of monitor with the document, screenshot of the document from a mobile device, etc.);</li>
                        <li>Due to international and domestic legislation that govern our onboarding a bank statement is not in and of itself a proof of source of funds.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const AccounthelpTen = () => {
    const [name, setName] = useState('How to contact customer support team')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to reach out to the support team</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-3'>
                <p>You can always text us at <a href='mailto:support@wehodler.com' className='text-blue-500 underline'>support@wehodler.com</a>.</p>
                <p>Alternatively, you can ask us questions in our chat on the platform <a className='text-blue-500 underline' href='https://wehodler.com'>https://wehodler.com</a></p>
                <img src={chatone} alt="chat" className='block w-[90%] mx-auto my-2' />
                <p>Please, make sure that you disable AdBlock and other plugins that can alter the web page content.</p>
                <div className='font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>WeHodler is working with the customers directly, without any intermediate organizations;</li>
                        <li>Be careful of the imposters. WeHodler will contact you only via online chat or emails wehodler.today, wehodler.app, wehodler.email, wehodler.io, @wehodler-xxx.intercom-mail.com;</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const AccounthelpEleven = () => {
    const [name, setName] = useState("WeHodler user's personal account security")
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to protect your account with Two-Factor Authentication (2FA)</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>WeHodler pays close attention to customers' accounts and personal data security. In addition to the platform security system, WeHodler provides customers with personal high-security level options. </p>
                <p>In order to set the additional level of security and protect the account all users can apply one of two 2FA (Two-Factor Authentication) available options:</p>
                <ul className='list-disc px-6 py-2'>
                    <li><strong>SMS 2FA.</strong> The platform sends a user mobile phone number a text message containing a one-time security code whenever a user signs in his account.</li>
                    <li><strong>Google 2FA.</strong> It allows to use a special app that generates a unique security code upon the user's request to let him use it within the WeHodler platform.</li>
                </ul>
                <div className='font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>The SMS 2FA is much less stable due to possible reasons associated with the phone connection operators. We recommend using Google 2FA since it is much more stable and comfortable;</li>
                        <li>We strongly recommend enabling two-factor authentication immediately after signing up and keep it on throughout the usage of the platform. </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const AccounthelpTwelve = () => {
    const [name, setName] = useState('How to manage 2fa')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Common questions about 2FA</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>WeHodler provides and supports several 2FA options to secure customers' accounts - SMS 2FA, Google 2FA, and Email 2FA. Due to the platform security policy, the Email 2fa is set for the account by default. You can switch to SMS or Google 2FA in your profile settings.</p>
                <h2 className='font-bold text-lg'>How to enable 2FA</h2>
                <p>To enable 2fa please follow these instructions:</p>
                <ul className='list-disc px-6 py-2'>
                    <a className='text-blue-500 underline' href='./accounthelpthirteen'><li>How to enable SMS 2FA</li></a>
                    <a className='text-blue-500 underline' href='./accounthelpfourteen'><li>How to enable Google 2FA</li></a>
                </ul>
                <h2 className='font-bold text-lg'>2FA common issues</h2>
                <p>The 2fa is a black box service. There is not much that can be done about it. We don't control the reaction to the code that you are entering. You are entering the code, it is getting sent to the 2fa service and compared with the factual code on the server (in the case of Google authentication - Google servers).</p>
                <p>The common reason why when you're entering the code, you see the error "invalid code" is you are entering an incorrect code or you are not entering the code on time.</p>
                <p className='font-semibold'>If Google/Authy 2FA code is not accepted:</p>
                <ul className='list-disc px-6 py-2'>
                    <li>Check if the time on your device and on the Google Authenticator app is synced. On the device check <strong>General settings/Date &amp; Time/Set Automatically</strong>. In the Google, Authenticator app. go to Main menu/tap More/Settings/Time correction for codes/Sync now.</li>
                </ul>
                <p className='font-semibold'>If SMS with 2FA code is not coming:</p>
                <ul className='list-disc px-6 py-2'>
                    <li>SMS may arrive with a delay of 10-15 minutes;</li>
                    <li>If SMS is not coming, check and reboot your mobile connection (with your mobile provider);</li>
                    <li>If SMS still doesn't arrive, proceed with disabling 2FA.</li>
                </ul>
                <h2 className='font-bold text-lg'>How to disable 2FA</h2>
                <p>To disable 2FA, in order to comply with security procedures, please take a one-shot selfie of yourself holding:</p>
                <ul className='list-disc px-6 py-2'>
                    <li>The document with which you registered on the platform;</li>
                    <li>The paper on which is written by hand <strong>today's date, our company name - WeHodler</strong>, and the text <strong>"Disable 2FA"</strong>.</li>
                </ul>
                <p>Please send your selfie to support@wehodler.com from your WeHodler account email.</p>
                <p>After disabling SMS or Google 2FA your account authentication will be changed to Email 2FA. Right after that you can log in to your account and set a preferred 2FA (SMS or Google 2FA).</p>
                <p>If you can't log in using Email 2FA, please reach our support via chat or <a href='mailto:support@wehodler.com' className='text-blue-500 underline'>support@wehodler.com</a>. </p>
            </div>
        </div>
    )
}

export const AccounthelpThirteen = () => {
    const [name, setName] = useState('How to enable SMS Two-Factor Authentication')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to enable SMS Two-Factor Authentication</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-3'>
                <p className='font-semibold'>We strongly recommend to enable two-factor authentication immediately after signing up.</p>
                <p>If you didn't turn on 2FA right after signing up, you can enable it anytime on your Profile found in the <strong>Two-Factor Authentication</strong> section.</p>
                <img src={smsauthy} alt="sms" className='block w-[90%] my-2 mx-auto' />
                <h2 className='text-lg font-bold'>Enable SMS two-factor authentication</h2>
                <p>On the first step, select your country code and enter your phone number. For example, if you have a German phone number like +49123456789, you should enter only 123456789 in the phone number field.</p>
                <p>Once you entered your phone number press the <strong>SEND CODE</strong> button, you need to confirm your phone number by entering a 6-digit security code that was sent to your phone. You can resend the code after 30 seconds if you so choose. If you didn't receive the code, you can change your number and request a new code.</p>
                <p>Once you entered the correct security code, press ENABLE 2FA button to set SMS 2FA for your account. Then you'll be asked to login using the SMS 2FA code.</p>
                <h2 className='text-lg font-bold'>Disable 2FA</h2>
                <p>We strongly recommend against disabling 2FA, but you may need to do this in case you want to change your phone number.</p>
                <p>To disable 2FA go to your Profile page. Then scroll down to <strong>Two-Factor Authentication</strong> section and click DISABLE button. You will be asked to enter the secure code from SMS. After entering the code, press the DISABLE 2FA.</p>
                <div className='font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>If for some reason you lose access to your smartphone and can't pass 2FA, you can disable 2FA for your account. To disable 2FA please take a selfie with the document you used to verify your account, and with a paper (with our company name, the current date, and the following text "Disable 2FA") on the one-shot. Send your photo to <a href='mailto:support@wehodler.com' className='text-blue-500 underline'>support@wehodler.com</a>.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const AccounthelpFourteen = () => {
    const [name, setName] = useState('How to enable Google Two-Factor Authentication')
    const navigate = useNavigate()

    return (
        <div className='p-6'>
            <div className='bg-blue-500 p-6 -mx-6 -mt-6'>
                <div className='flex items-center gap-4 text-white'>
                    <SiShopware color='white' size={35} />
                    <p className='uppercase font-semibold'>WeHodler</p>
                </div>
                <div className='mt-4 text-gray-100'>
                    <p>Hello there</p>
                    <p>Get help from support right away after looking at the various articles.</p>
                </div>
            </div>
            <div>
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How to enable Google Two-Factor Authentication</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-3'>
                <p className='font-semibold'>We strongly recommend enabling two-factor authentication immediately after signing up.</p>
                <p>You can use Google two-factor authentication with two available apps - Authy or Google Authenticator.</p>
                <h2 className='font-bold text-lg'>Enable Google two-factor authentication</h2>
                <p>Go to the "<strong>Two-factor authentication</strong>" section in your Profile settings. There you will see two-factor authentication available options.</p>
                <img src={smsauthy} alt="sms" className='block w-[90%] my-2 mx-auto' />
                <p>Push the Use Authenticator App button. You can choose between two apps - Authy or Google Authenticator. Click the preferred app button to install it on your smartphone.</p>
                <p>Once you install the app, scan the QR-code, paste the code from the app in the Security code field and click the ENABLE 2FA button. Then you'll be asked to login using the google authentication code.</p>
                <h2 className='font-bold text-lg'>Disable Google 2FA</h2>
                <p>To disable Google 2FA go to your Profile page. Then scroll down to the <strong>Two-Factor Authentication</strong> section, paste the verification code from the app, and click the DISABLE button.</p>
                <div className='font-semibold'>
                    <p>Please be advised:</p>
                    <ul className='list-disc px-6 py-2'>
                        <li>If for some reason you lose access to your smartphone and can't pass 2FA, you can disable 2FA for your account. To disable 2FA please take a selfie with the document you used to verify your account, a paper (with our company name, the current date, and the following text "Disable 2FA") on the one-shot. Send your photo to <a href='mailto:support@wehodler.com' className='text-blue-500 underline'>support@wehodler.com</a>.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const AccounthelpFifteen = () => {
    const [name, setName] = useState('How safe is WeHodler (Reputation, Insurance, and Security)')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Is WeHodler safe?</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-3'>
                <p>The whole premise of WeHodler is that "HODLers" can get a cash loan without having to sell their crypto assets or simply store their precious crypto assets at savings accounts. But how can you be sure we will keep your crypto safe and give it back to you after paying the loan? There are several factors in which WeHodler is legally obligated to securely store your crypto and return your collateral. Let's go over them now. </p>
                <h2 className='font-bold text-lg mt-4'>YOUHODLER VALUES REPUTATION</h2>
                <p>As you can imagine, WeHodler would not get very far if we didn't abide by the rules. As a team that prides itself on transparency, honesty, and regulation, we take our reputation extremely seriously. We have a global audience depending on us for quick, efficient loans and we do our best to satisfy their needs. As a growing startup in the FinTech sphere, we need to build our reputation from not only the technological spectrum but the moral point of view as well.</p>
                <h2 className='font-bold text-lg mt-4'>YOUHODLER CUSTODY AND INSURANCE</h2>
                <p>We use industry best practices when it comes to crypto storage. Funds are never stored 100% in hot wallets. Instead, we use a mixture of <strong>both hot and cold wallet storage</strong> which are secure to protect users' funds.</p>
                <p>In addition, WeHodler is proud to say that we incorporate Ledger Vault's technology into the platform which produces advanced custody options for all users. Ledger Vault is a core business unit of Ledger, a leader in security for cryptocurrencies and blockchain applications. Leveraging Ledger's industry-leading and independently-certified security technology, the Ledger Vault provides information technology infrastructure for financial institutions to securely control their crypto assets with a multi-authorization self-custody management solution.</p>
                <p>WeHodler benefits from the Ledger Vault's <strong>pooled customized crime insurance program insuring crypto-assets for up to $150 million</strong> led by the prestigious Arch UK Lloyds of London syndicate. The insurance covers different risks, including risks of employee theft caused by collusion and third-party theft of private keys/master seed in the event of a physical breach of hardware security.</p>
                <p>Additionally with Ledger Vault, WeHodler:</p>
                <ul className='list-disc px-6 py-2'>
                    <li><strong>Reduces risk of human error:</strong> Key usage for signatures is strictly controlled by strong governance rules. The access to the Vault is distributed among different managers with different functions and access rights and mandatory multi-signature principles.  </li>
                    <li><strong>Avoids the risk of a hack:</strong> All cold wallet private keys are isolated, stored, and encrypted within a hardware security module, and are never directly handled by day-to-day operators. </li>
                    <li>Maintains a level of <strong>systems flexibility and instant access</strong> to funds. This is possible because of a combination of both hardware and software solutions.</li>
                    <li><strong>Still has an independent security system:</strong> Ledger never holds WeHodler's keys or its managers. A backup recovery mechanism ensures we can independently recover our funds at any time without needing to use the platform.</li>
                </ul>
                <p>The system has no limits for scalability.</p>
                <h2 className='font-bold text-lg mt-4'>3FA SECURITY LEVEL</h2>
                <p>Following the best practices of the high-end financial services industry, we provide a rare option for users to lock their financial assets. Owners of accounts with balances over 100 USD (or its equivalent in any fiat or cryptocurrency) can request to disable all crypto withdrawal options. All other features will still be available.</p>
                <p>We will enable withdrawal only upon the account owners' requests and after additional unique identity verification steps.</p>
                <p>This is yet another layer of security in which our customers can use all our services and eliminate any possibility of suspicious withdrawals.</p>
                <h2 className='font-bold text-lg mt-4'>BOUND BY LAW TO RETURN YOUR CRYPTOASSETS</h2>
                <p>Speeches about moral justice aside, WeHodler also has legal obligations to uphold. Each deal is legally structured by contracts and falls under EU laws. These automated personal contracts ensure each deal is accounted for and properly executed.</p>
                <h2 className='font-bold text-lg mt-4'>WeHODLER'S DISPUTE RESOLUTION PROCEDURE</h2>
                <p>WeHodler is a proud and official member of the Blockchain Association, the crypto subgroup of the larger Financial Commission. This independent, self-regulatory organization (SRO) and external dispute resolution (EDR) provider ensures all YouHodler customers have an outlet for dispute resolution outside of the WeHodler platform. </p>
                <p>If at any time, WeHodler fails to meet clients' expectations, they can submit a complaint to the Association and receive a quick, unbiased, and non-binding resolution. This is a unique type of crypto security not many others have and we believe it is an effective form of crypto insurance for WeHodler clients. </p>
                <h2 className='font-bold text-lg mt-4'>CIPHERTRACE AND ELLIPTIC BLOCK ACCESS OF BAD ACTORS TO THE PLATFORM</h2>
                <p>WeHodler has partnerships with Elliptic and CipherTrace to closely analyze all crypto transactions in order to protect the platform and its users from a full range of criminal behavior such as money laundering, fraud schemes, terrorist financing, and sanctions evasion. Elliptic supports over 97% of all crypto assets which helps them offer improved AML and sanctions compliance for WeHodler. By far, this is the largest coverage percentage of any transaction screening solution in the industry. Aside from this, both Elliptic and CipherTrace bring a solid reputation to WeHodler backed by some of the biggest names in the traditional and blockchain industries.</p>
            </div>
        </div>
    )
}

export const AccounthelpSixteen = () => {
    const [name, setName] = useState('Personal data security')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>How WeHodler keeps customers personal data in safety</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <p>WeHodler uses best practices in implementing technical measures to ensure the security of company systems and customer data:</p>
                <ul className='list-disc px-6 py-2'>
                    <li>All credit card operations are under <strong>PCI Security Standards</strong>; </li>
                    <li>WeHodler does not store customer's credit cards data, but it sends payments providers <strong>directly</strong>;</li>
                    <li>WeHodler runs external security audits on a regular basis;</li>
                    <li>All crypto operations are in accordance with <strong>Cryptocurrency Security Standard (CCSS)</strong>;</li>
                    <li>WeHodler sends all the KYC data directly to the identity verification service provider (<strong>SumSub</strong> - one of the leading providers on the market; Clients with accounts from 2022 or earlier may have been onboarded with IdentityMind and/or Ondato);</li>
                    <li>All WeHodler customers passwords stored in <strong>SHA256</strong> encrypt with Salt;</li>
                    <li>WeHodler uses <strong>SSL</strong> for encrypting data on the client-server connection;</li>
                </ul>
            </div>
        </div>
    )
}

export const AccounthelpSeventeen = () => {
    const [name, setName] = useState('Anti-Money Laundering')
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
                <p className='my-4'><span onClick={()=> navigate(-2)} className='cursor-pointer text-black hover:text-gray-600'>All Collections</span> &gt; <span onClick={()=> navigate(-1)} className='cursor-pointer text-black hover:text-gray-600'>Account</span> <span className='text-gray-500'>&gt; {name}</span></p>
                <h2 className='text-2xl font-bold my-3'>{name}</h2>
                <p className='text-gray-400'>Why is AML important for WeHodler and the Crypto Industry</p>
                <p className='text-gray-400'>Updated over a week ago</p>
            </div>
            <div className='my-6 flex flex-col gap-2'>
                <h2 className='font-bold text-lg my-4'>What is Money Laundering?</h2>
                <p>Money laundering is the illegal process of making large amounts of money generated by criminal activity, such as drug trafficking, corruption, or terrorist funding, appearing to have come from a legitimate source.</p>
                <p>The money obtained from illegal activities is colloquially called 'dirty', so the money laundering process 'cleans' it, i.e., makes it legitimate.</p>
                <img src={moneylaun} alt="moneylaun" className='block mx-auto w-[90%] my-2' />
                <h2 className='font-bold text-lg my-4'>How do we prevent Money Laundering?</h2>
                <p>Anti-money laundering (AML) refers to the laws, regulations, and procedures intended to prevent criminals from disguising illegally obtained funds as legitimate income. </p>
                <p>International organizations and governments have put measures into place in order to prevent and stop money laundering. The measures put in place are applicable to all organizations in certain sectors, such as the financial sector, and, they have the obligations to ensure that they follow and apply anti-money laundering laws in their business operations as well as perform KYC standards. The laws are applicable to both fiat and virtual transactions, such as crypto assets.</p>
                <h2 className='font-bold text-lg my-4'>What is KYC “Know Your Client”?</h2>
                <p>KYC is the process of identification and verification of the identity of a client in which a series of controls are applied to avoid having commercial relations with people related to terrorism, corruption or money laundering, among others. The process aims to verify that the client is actually who they say they are, and also that the funds they transact with on the platform are from legitimate sources and consistent with the client's financial background.</p>
                <h2 className='font-bold text-lg my-4'>What is WeHodler's role?</h2>
                <p>As a regulated entity, Wehodler has the obligation to comply with anti-money laundering laws and regulations when onboarding clients and during business relationships. The identification and verification are based on a risk-based approach as recommended by international standards.</p>
                <h2 className='font-bold text-lg'>What to expect?</h2>
                <ol className='list-decimal px-4'>
                    <li className='mb-2'>When signing up on the platform as a new client, the following will be required from you: <ul className='list-disc px-6 py-2'>
                            <li>Sign a beneficial ownership form, which confirms that the funds you are using on the platform belong to you and not to third parties;</li>
                            <li>Upload a proof of address, which aims to ensure that you are not from a sanctioned country;</li>
                            <li>Upload copies of identity document, which aims to verify your identity.</li>
                        </ul>
                        <p>The above is applicable to all clients on the platform, and should any of the above documents be missing, they shall be requested during the course of the business relationship.</p>
                    </li>
                    <li>During the course of the business relationship and depending on the overall total amount of deposits the client has transacted on the platform, you might receive an additional request from the compliance team requiring the below: <ul className='list-disc px-6 py-2'>
                            <li>Sign a KYC form, which confirms your personal information as well as additional information regarding economic background;</li>
                            <li>Provide document confirming source of funds/income, which is required to verify the legitimacy of the clients transactions and to ensure the client transactions are aligned with the clients economic profile;</li>
                            <li>Conduct a Video Identification, which aims to confirm that the identity document provided does in fact belong to that specific client and to exclude the case of identity theft or coercion.</li>
                        </ul>
                        <p>All information required is requested by our compliance department, through the email address the client signed up on the platform with. Do always remember to check your mail, including spam, just in case there is a request for you.</p>
                    </li>
                </ol>
                <h2 className='font-bold text-lg my-4'>What happens when we do not comply?</h2>
                <p>Failure for WeHodler to comply with the regulations could be very damaging to the company as it could expose the company to fines, loss of license, and thus a cessation or suspension of the operational activity as well as reputational damage and so much more.</p>
                <p>Our Company may in certain cases when a client misses some verification steps to restrict his access to some of our services until the deficiencies are resolved. It is important to mention that even if the client wants to close the account, we are still obliged to fulfill this legal obligation first; since it is designed to stop criminals, the legislator presupposed that ordinary clients will comply with the request. </p>
                <p>It should be noted that in a case of non-compliance, clients may be subject to regulatory reporting.</p>
                <h2 className='font-bold text-lg my-4'>Finally</h2>
                <p>All the above is indicated in our AML policy, Service Level Agreement, and Terms of Conditions, should you wish to read further on it. And yes, all information collected is processed and stored in accordance with GDPR requirements and more information can be found on our data privacy policy on the website as well.</p>
            </div>
        </div>
    )
}

const Accounthelp = () => {
    const [name, setName] = useState('Account')
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
            <MdOutlineAccountBalance size={40} color='#3b82f6' />
            <h2 className='text-2xl font-bold uppercase my-3'>{name}</h2>
            <p>How to manage your account</p>
            <p className='text-gray-500'>17 articles</p>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <div className='p-4 mb-2 border-b border-b-gray-300'>
                <p className='font-bold text-lg'>Account management</p>
            </div>
            <Link to={`accounthelpone`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How do I sign up</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`accounthelptwo`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to receive email messages from WeHodler</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`accounthelpthree`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to reset your password</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <div className='p-4 mb-2 border-b border-b-gray-300'>
                <p className='font-bold text-lg'>Account verification</p>
            </div>
            <Link to={`accounthelpfour`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Beneficial ownership confirmation</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`accounthelpfive`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to verify your identity</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`accounthelpsix`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to verify your email address</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`accounthelpseven`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to verify your residential address</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`accounthelpeight`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to verify your phone number</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`accounthelpnine`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Source of Funds</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <div className='p-4 mb-2 border-b border-b-gray-300'>
                <p className='font-bold text-lg'>Contact Support</p>
            </div>
            <Link to={`accounthelpten`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to contact customer support team </p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
        </div>

        <div className='p-3 border border-gray-300 rounded-lg mt-6'>
            <div className='p-4 mb-2 border-b border-b-gray-300'>
                <p className='font-bold text-lg'>Account security</p>
            </div>
            <Link to={`accounthelpeleven`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>WeHodler user's personal account security</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`accounthelptwelve`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to manage 2fa</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`accounthelpthirteen`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to enable SMS Two-Factor Authentication</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`accounthelpfourteen`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How to enable Google Two-Factor Authentication</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`accounthelpfifteen`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>How safe is WeHodler (Reputation, Insurance, and Security)</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`accounthelpsixteen`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Personal data security</p>
                    <MdOutlineKeyboardArrowRight color='#3b82f6' />
                </div>
            </Link>
            <Link to={`accounthelpseventeen`}>
                <div className='flex items-center justify-between rounded-lg p-2 cursor-pointer bg-transparent hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600'>
                    <p>Anti-Money Laundering</p>
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

export default Accounthelp