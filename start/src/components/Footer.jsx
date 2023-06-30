import React from 'react'

const Footer = () => {
  return (
    <div className='text-gray-500 p-6'>
      <div>
        <div>
          <div>
            <div></div>
            <div className='w-layout-grid grid-rows-3'>
              <div>
                <img src="" alt="" />
                <div></div>
              </div>
              <div>
                <img src="" alt="" />
                <div>WeHodler S.A.</div>
              </div>
              <div>
                <img src="" alt="" />
                <div>Partnership with regulated EU payment providers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid gap-3 grid-cols-2 mb-2 mt-2 '>
        <div>
          <div>
            <p className='font-bold'>Platform</p>
          </div>
          <div>
            <ul>
              <a href='./hodler'  target='_blank'><li>Hodler</li></a>
              <a href='./loans'  target='_blank'><li>Crypto Loans</li></a>
              <a href='./savings'  target='_blank'><li>Savings</li></a>
              <a href='./exchange'  target='_blank'><li>Exchange</li></a>
            </ul>
          </div>
        </div>

        
        <div>
          <div>
            <p className='font-bold'>Company</p>
          </div>
          <ul>
            <a href='/company' className='' target='_blank'><li>About Us</li></a>
            <a href='/company/affiliates' className='' target='_blank'><li>Affiliate Program</li></a>
            <a href='/company/stats' className='' target='_blank'><li>WeHodler Stats</li></a>
          </ul>
        </div>

        <div>
          <div>
            <p className='font-bold'>Website</p>
          </div>
          <ul>
            <li><a href='/cookie' className='' target='_blank'></a>Cookie Declaration</li>
            <li><a href='/privacy-declare' className='' target='_blank'></a>Privacy Notice</li>
            <li><a href='/security-declare' className='' target='_blank'></a>Security Level Declaration</li>
            <li></li>
          </ul>
        </div>

        <div>
          <div>
            <p className='font-bold'>Help</p>
          </div>
          <ul>
            <li><a href='/help' className='' target='_blank'></a>Help Desk</li>
            <li><a href='/glossary' className='' target='_blank'></a>Glossary</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <p>Cryptocurrencies are a high risk investment and cryptocurrency exchange rates have exhibited strong volatility. Exposure to potential loss could extend to your cryptocurrency investment.</p>
        </div>
        <div>&copy; WeHodler, 2023</div>
      </div>
    </div>
  )
}

export default Footer