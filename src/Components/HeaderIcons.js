import './Header.css';
import React from 'react';
import { Avatar} from '@mui/material';
import {useSelector } from 'react-redux';
import {  selectUser } from '../features/userSlice';
import firebase from 'firebase';

const Headericons = ({Icon, title, avatar}) => {

    // const dispatch=useDispatch();
    // const logoutChange=(e)=>{     I simply called logoutUser on click of photo and it loged out all users
    //         e.preventDefault();
//
    //         dispatch(logoutuser())
    // }
    const user=useSelector(selectUser);
    return (
        <div className='Headeroption'>
            { Icon && <Icon></Icon>}
            { avatar && <Avatar name={avatar} src={user.photoURL} onClick={e=>firebase.auth().signOut()}/>}
            <span>{title}</span>
        </div>
    );
}

export default Headericons;
