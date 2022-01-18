import { InfoRounded } from '@mui/icons-material';
import React from 'react';
import './Sidebar.css'

const Rightsidebar = () => {
    return (
        <div className='Right__bar'>
            <div className='first'>
                <div className='Right__hrader'>
            <h3>LinkedIn News</h3> 
            <span><InfoRounded/></span>
            </div>
            
            <div className='Right__info'>
                <ul>
                    <div className='Right__info__down'>
                    <li>
                        <span>Slaying Job Search Fess</span>
                        <p>6d ago * 6.12 reads</p>
                    </li>
                    <li>
                        <span>Slaying Job Search Fess</span>
                        <p>6d ago * 6.12 reads</p>
                    </li>
                    <li>
                        <span>Slaying Job Search Fess</span>
                        <p>6d ago * 6.12 reads</p>
                    </li>
                    <li>
                        <span>Slaying Job Search Fess</span>
                        <p>6d ago * 6.12 reads</p>
                    </li>
                    <li>
                        <span>Slaying Job Search Fess</span>
                        <p>6d ago * 6.12 reads</p>
                    </li>

                    </div>
                    
                </ul>
            </div>
            </div>
            <br/>
            <div className='second'>
                <div className='Right__hrader'>
            <h3>LinkedIn News</h3> 
            <span><InfoRounded/></span>
            </div>
            
            <div className='Right__info'>
                <ul>
                    <div className='Right__info__down'>
                    <li>
                        <span>Slaying Job Search Fess</span>
                        <p>6d ago * 6.12 reads</p>
                    </li>
                    <li>
                        <span>Slaying Job Search Fess</span>
                        <p>6d ago * 6.12 reads</p>
                    </li>
                    <li>
                        <span>Slaying Job Search Fess</span>
                        <p>6d ago * 6.12 reads</p>
                    </li>
                    <li>
                        <span>Slaying Job Search Fess</span>
                        <p>6d ago * 6.12 reads</p>
                    </li>
                    <li>
                        <span>Slaying Job Search Fess</span>
                        <p>6d ago * 6.12 reads</p>
                    </li>

                    </div>
                    
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Rightsidebar;
