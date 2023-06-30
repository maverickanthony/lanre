import React from 'react'
import blueledger from '../data/blueledger.svg'
import fireblocks from '../data/fireblocks.jpeg'
import fire from '../data/fire.svg'
import ondato from '../data/ondato.jpeg'
import sumsub from '../data/sumsub.jpeg'
import elli2 from '../data/elli2.png'
import ledger2 from '../data/ledger2.svg'
import pci from '../data/pci.png'
import secure from '../data/secure.png'
import valley from '../data/valley.png'
import blockass from '../data/blockass.png'
import adan from '../data/adan.png'
import ledgerah from '../data/ledgerah.svg'
import cyprus from '../data/cyprus.jpeg'
import walletbr from '../data/walletbr.svg'
import euroun from '../data/euroun.svg'
import { CiVault } from 'react-icons/ci'
import { BsHandThumbsUp } from 'react-icons/bs'
import { BiCodeCurly } from 'react-icons/bi'
import { BsShieldCheck } from 'react-icons/bs'
import { GrVolumeControl } from 'react-icons/gr'
import { BsChatDots } from 'react-icons/bs'

const Company = () => {
  return (
    <div className='mt-12'>
        <div className='mt-5 h-4'></div>
        <div className='mt-12 p-4 lg:p-6 lg:w-2/3'>
            <h1 className='font-bold text-2xl mb-3 lg:text-4xl text-center'>About WeHodler</h1>
            <p className='italic'>"In our daily lives, we still need some sort of traditional financial services. However, we clearly don't want to miss the opportunities opened up by modern finance. The Future is 'Web3 banking' that connects both the old and new worlds with enhanced and secure services for just about anyone with a smartphone. Welcome to WeHodler, your guide to Web3 Finance!"</p>
            <div className='mt-3 p-3'>
                <div className='flex gap-2'>
                    <img src={cyprus} alt="" width='40' height='40' />
                    <p className='text-sm'>Regulated EU and Cyprus Financial Institutions</p>
                </div>
                <div className='flex gap-2 mt-2'>
                    <img src={ledgerah} alt="" width='40' height='40' />
                    <p className='text-sm'>Custody secured by Ledger Enterprise</p>
                </div>
            </div>
        </div>
        <div className='mt-2 bg-gray-200 py-4'>
            <div className='font-bold text-center text-2xl'>Memberships</div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:flex lg:items-baseline p-4 gap-4 lg:p-6'>
                <a href="https://finsom.ch/en" target="_blank" rel="noopener noreferrer">
                    <img src={ondato} alt="" loading='lazy' height='90' width='90' className={`opacity-50 hover:opacity-100 m-auto`} />
                    <div className='mt-2 text-center'>WeHodler is affiliated with Financial Services Ombudsman FINSOM</div>
                </a>
                <a href="https://cryptovalley.swiss" target="_blank" rel="noopener noreferrer">
                    <img src={valley} alt="" loading='lazy' height='100' width='100' className={`opacity-50 hover:opacity-100 m-auto`} />
                    <div className='mt-2 text-center'>The world's leading blockchain and cryptographic technologies ecosystem.</div>
                </a>
                <a href="https://wehodler.com" target="_blank" rel="noopener noreferrer">
                    <img src={adan} alt="" loading='lazy' height='90' width='90' className={`opacity-50 hover:opacity-100 m-auto`} />
                    <div className='mt-2 text-center'>Professionals in the digital asset and blockchain sector.</div>
                </a>
                <a href="https://wehodler.com" target="_blank" rel="noopener noreferrer">
                    <img src={blockass} alt="" loading='lazy' height='40' width='40' className={`opacity-50 hover:opacity-100 m-auto`} />
                    <div className='mt-2 text-center'>Blockchain Association is protecting Digital Asset investors and traders since 2013</div>
                </a>
            </div>
            <div className='p-4 bg-white lg:p-6'>
                <h1 className='font-bold text-3xl text-center mb-3'>About the Company</h1>
                <p className='mb-3'>WeHodler - a multi-faced FinTech platform providing a variety of Web3 crypto and fiat services. YouHodler's wallet caters to active HODLers, allowing them to use their digital assets beyond hodling and trading.</p>
                <p className='mb-3'>WeHodler supports major fiat currencies (USD, EUR, CHF, GBP) as well as all major crypto currencies and tokens (BTC, ETH, LTC, XLM, XRP, BNB, USDT, USDC, TUSD, PAXG, DAI, etc).</p>
                <p className='mb-3'>WeHodler is an active member of the Blockchain Association of Financial Commission and the Crypto Valley Association.</p>
            </div>
            <div className='p-4 lg:p-6'>
                <h1 className='font-bold text-3xl text-center mb-3'>Our Mission</h1>
                <p className='text-center'>WeHodler is your ultimate guide to the Web3 world.</p>
                <div className='flex flex-col gap-2 lg:flex lg:flex-row'>
                    <div></div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='mb-2 font-bold'>We make your digital assets work for you with our bridges between Crypto and Traditional finance; CeFi and DeFi.</h3>
                        <p><span className='font-bold'>Trading Solutions</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolore quod iure, perspiciatis velit in libero unde, beatae maiores veritatis magnam, inventore cumque culpa fugit! Animi cumque qui itaque necessitatibus.</p>
                        <p><span className='font-bold'>WeHodler Wallet</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolore quod iure, perspiciatis velit in libero unde, beatae maiores veritatis magnam, inventore cumque culpa fugit! Animi cumque qui itaque necessitatibus.</p>
                        <p><span className='font-bold'>Crypto-backed loans</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolore quod iure, perspiciatis velit in libero unde, beatae maiores veritatis magnam, inventore cumque culpa fugit! Animi cumque qui itaque necessitatibus.</p>
                    </div>
                </div>
            </div>
            <div className='p-4 bg-white lg:p-6'>
                <h1 className='font-bold text-3xl lg:text-center mb-4'>Our Partners</h1>
                <ul className='lg:grid lg:grid-cols-4 lg:gap-5'>
                    <li className='mt-5'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={blueledger} alt="ledger" width='150' />
                        </a>
                        <p className='lg:mt-2 mt-2'><span className='font-bold'>Secured custody.</span>&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptates repellendus, natus, nisi odit dolor necessitatibus magni voluptatibus voluptatem iure eum cumque ea error nesciunt hic officiis voluptate rerum cupiditate!</p>
                    </li>
                    <li className='mt-5'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={fireblocks} alt="" width='165' />
                        </a>
                        <p className='lg:mt-2 mt-2'><span className='font-bold'>Asset Platform.</span>&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptates repellendus, natus, nisi odit dolor necessitatibus magni voluptatibus voluptatem iure eum cumque ea error nesciunt hic officiis voluptate rerum cupiditate!</p>
                    </li>
                    <li className='mt-5'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={ondato} alt="ondato" width='135' />
                        </a>
                        <p className='lg:mt-2 mt-2'><span className='font-bold'>Compliance.</span>&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptates repellendus, natus, nisi odit dolor necessitatibus magni voluptatibus voluptatem iure eum cumque ea error nesciunt hic officiis voluptate rerum cupiditate!</p>
                    </li>
                    <li className='mt-5'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={sumsub} alt="sumsub" width='136' />
                        </a>
                        <p className='lg:mt-2 mt-2'><span className='font-bold'>Compliance & AML.</span>&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptates repellendus, natus, nisi odit dolor necessitatibus magni voluptatibus voluptatem iure eum cumque ea error nesciunt hic officiis voluptate rerum cupiditate!</p>
                    </li>
                </ul>
            </div>
            <div className='p-4 mt-3 lg:p-6'>
                <div>
                    <h1 className='font-bold text-3xl text-center mb-4 capitalize'>Why you choose Wehodler</h1>
                </div>
                <div className='lg:grid lg:grid-cols-3 lg:gap-5'>
                    <div className='mb-4'>
                        <div className='flex items-center gap-2'>
                            <GrVolumeControl/>
                            <h3 className='font-bold'>Risk Control</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis aliquam asperiores vero praesentium odit beatae! Dolores eligendi molestiae quae deserunt aliquid ex vitae mollitia optio, ratione cumque vero. Dolorum.</p>
                    </div>
                    <div className='mb-4'>
                        <div className='flex items-center gap-2'>
                            <BsHandThumbsUp />
                            <h3 className='font-bold'>Team experience</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis aliquam asperiores vero praesentium odit beatae! Dolores eligendi molestiae quae deserunt aliquid ex vitae mollitia optio, ratione cumque vero. Dolorum.</p>
                    </div>
                    <div className='mb-4'>
                        <div className='flex items-center gap-2'>
                            <BsShieldCheck />
                            <h3 className='font-bold'>Secured crypto wallet</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis aliquam asperiores vero praesentium odit beatae! Dolores eligendi molestiae quae deserunt aliquid ex vitae mollitia optio, ratione cumque vero. Dolorum.</p>
                    </div>
                    <div className='mb-4'>
                        <div className='flex items-center gap-2'>
                            <BsChatDots />
                            <h3 className='font-bold'>Fantastic customer support</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis aliquam asperiores vero praesentium odit beatae! Dolores eligendi molestiae quae deserunt aliquid ex vitae mollitia optio, ratione cumque vero. Dolorum.</p>
                    </div>
                    <div className='mb-4'>
                        <div className='flex items-center  gap-2'>
                            <BiCodeCurly />
                            <h3 className='font-bold'>Safety of fiat funds</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis aliquam asperiores vero praesentium odit beatae! Dolores eligendi molestiae quae deserunt aliquid ex vitae mollitia optio, ratione cumque vero. Dolorum.</p>
                    </div>
                </div>
            </div>
            <div className='p-5 lg:p-7 bg-gray-700 text-white'>
                <div className='font-bold text-2xl mb-2'>Safety and Security</div>
                <div className='lg:flex flex lg:flex-row flex-col gap-4 lg:gap-8'>
                    <div className='lg:w-1/2'>All transactions on WeHodler are 100% secure. WeHodler follows all the industry best practices for security checks, data protection, data encryption. We store fiat funds at reputable Bank accounts across Europe and partner with trusted fiat payment providers only. WeHodler uses Ledger Vault's industry leading IT infrastructure to securely control its crypto assets with a multi-authorization self-custody management solution and $150 million pooled crime insurance.</div>
                    <div className='lg:w-1/2'>
                        <ul className='grid sm:grid-cols-2 grid-cols-3 gap-2 '>
                            <li><img src={elli2} alt="" width='150' /></li>
                            <li><img src={fire} alt="" width='180' /></li>
                            <li><img src={ledger2} alt="" width='200' /></li>
                            <li><img src={pci} alt="" width='130' /></li>
                            <li><img src={secure} alt="" width='150' /></li>
                        </ul>
                    </div>
                </div>
            </div>
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
    </div>
  )
}

export default Company