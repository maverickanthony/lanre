import React from 'react'
// import { makeStyles } from '@mui/system/style';
import { Typography } from '@mui/material';
import bloomberg from '../data/bloomberg.svg'
import coindesk from '../data/coindesk.png'
import beincrypto from '../data/beincrypto.png'
import cointele from '../data/cointele.png'
import ninebitcoins from '../data/ninebitcoins.png'


// const useStyles = makeStyles((theme)=> ({
//     head: {
//         display: 'flex',
//         justifyContent: 'center',
//         marginTop: 25
//     }
// }))

const Media = () => {

    
  return (
    <div>
        <div>
            <h3 className='mt-6 font-bold text-3xl text-center' > Media About WeHodler</h3>
            <div className='mt-4'>
                <ul className='flex flex-wrap justify-around mx-4 lg:mx-8'>
                    <li className='m-2'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={cointele} style={{width: '160px', loading: 'lazy'}}/>
                        </a>
                    </li>
                    <li className='m-2'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={bloomberg} style={{width: '150px', loading: 'lazy'}} />
                        </a>
                    </li>
                    <li className='m-2'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={ninebitcoins} style={{width: '150px', loading: 'lazy'}}/>
                        </a>
                    </li>
                    <li className='m-2'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={beincrypto} style={{width: '150px', loading: 'lazy'}}/>
                        </a>
                    </li>
                    <li className='m-2'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={coindesk} style={{width: '150px', loading: 'lazy'}}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Media