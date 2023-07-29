import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import "./LoginT.css";

export const LoginT = () => {
  return (
    <div className='logint'>
        <div className='logint__in'>
            <h2>New Customer</h2>
            <h2>Signup</h2>
        </div>
        <hr/>
        <div className='logint__in'>
            <AccountCircleIcon/>
            <p>My profile</p>
        </div>
        <hr/>
        <div className='logint__in'>
            <LocalHospitalIcon/>
            <p>Flipkart Plus Zone</p>
        </div>
        <hr/>
        <div className='logint__in'>
            <BorderColorIcon/>
            
            <p>Orders</p>
        </div>
        <hr/>
        <div className='logint__in'>
            <CardGiftcardIcon/>
            <p>Gift Cards</p>
        </div>
        


    </div>
  )
}
