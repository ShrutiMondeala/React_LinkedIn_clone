import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Sidebar.css';
const Sidebar = () => {

    const user=useSelector(selectUser);
    return (
        <div className='Sidebar'>
            <div className='Sidebar__profile'>
               <img src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v960-ning-30.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=63dd5f402645ef52fb7dfb592aec765a'/>
     
               <div className="Sidebar__info">
               <Avatar src={user.photoURL}/>
                   <h3>{user.displayName}</h3>
                   <p>Full Stack Developer</p>
                </div>

                <div className='Sidebar__stats'>
                    <span>Who viewed your profile</span>
                    <span className='stats'>76</span>
                    
                </div>
                <div className='Sidebar__stats'>
                    <span>Connections<br/><b>Grow your network</b></span>
                    <span className='stats'>76</span>
                    
                </div>
            </div>

            <div className='Sidebar_recenttab'>
                <span className='Recenthead'>Recent</span>
                <span className='Recenttab'><span className='hash'>#</span>branding</span>
                <span className='Recenttab'><span className='hash'>#</span>Marketing</span>
                <span className='Recenttab'><span className='hash'>#</span>webdesigning</span>
                <span className='Recenttab'><span className='hash'>#</span>glabttrade</span>
                <span className='Recenttab'><span className='hash'>#</span>digitalmarketing</span>
                <span className='Recenttab'><span className='hash'>#</span>reactjs</span>
                <span className='Recenttab'><span className='hash'>#</span>nodejs</span>
            </div>
        </div>
    );
}

export default Sidebar;
