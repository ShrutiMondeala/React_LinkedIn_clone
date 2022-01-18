
import { BusinessCenter, Cases, Home, Message, NotificationAdd, Notifications, People, Search, SearchOffOutlined } from '@mui/icons-material';
import { Avatar} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser, logoutuser, selectUser } from '../features/userSlice';
import './Header.css';
import Headericons from './HeaderIcons';

const Header = () => {

    const user= useSelector(selectUser);
    console.log(user);
    
    return (
        <div className='Header'>
            <div className='headerleft'>
                <div className='headerleft__logo'>
                    <img src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1641893874~hmac=b161b9660b80d814043bb19a0cbcb1d3"/>
                </div>
                <div className='headerleft__search'>
                    <div className='A'><Search/></div>
                    <div className='B'>
                    <input placeholder='here'/>
                    </div>
                </div>
            </div>
            <div className='headerright'>
                    <Headericons Icon={Home} title="Home"/>
                    <Headericons Icon={People} title="My Network"/>
                    <Headericons Icon={BusinessCenter} title="Jobs"/>
                    <Headericons Icon={Message} title="Messaging"/>
                    <Headericons Icon={Notifications} title="Home"/>
                    <Headericons avatar={Avatar} title={user.displayName} />
            </div>
        </div>
    );
}

export default Header;
