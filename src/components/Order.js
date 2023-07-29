import React from 'react'
import "./Order.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';

function Order() {
  return (
    <div className='order'>
        <div className='top'>
            <div className='icon'>
            <CheckCircleIcon/>
            </div>
            <h2>Order Placed</h2>
            <p>view details</p>
            <div className='coin'>
                <OfflineBoltIcon/>
                <p>SuperCoins</p>
            </div>
        </div>


        <div className='bottom'>
            <div className='gift'>
            <CardGiftcardIcon/>
            <p>You Won a Scratch Card</p>
            </div>

        </div>
    </div>
  )
}

export default Order