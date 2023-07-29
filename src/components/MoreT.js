import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DownloadIcon from '@mui/icons-material/Download';
import "./MoreT.css"
const MoreT = () => {
  return (
    <div className='moret'>
        <div className='moret__in'>
            <NotificationsIcon/>
            <p>Notification Preferences</p>
        </div>
        <hr/>
        <div className='moret__in'>
            <SupportAgentIcon/>
            <p>24*7 Customer Care</p>
        </div>
        <hr/>
        <div className='moret__in'>
            <TrendingUpIcon/>
            <p>Advertise</p>
        </div>
        <hr/>
        <div className='moret__in'>
            <DownloadIcon/>
            <p>Download App</p>
        </div>

    </div>
  )
}

export default MoreT