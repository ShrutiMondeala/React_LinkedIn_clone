import React from 'react';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Middle from './Components/Middle';
import Rightsidebar from './Components/RightSidebar';
import Sidebar from './Components/Sidebar';
import {useDispatch, useSelector} from 'react-redux';
import {logoutuser,loginuser,selectUser} from './features/userSlice'
import {useEffect} from 'react'
import { auth } from './Firebase';

function App() {

//install react-flip-move
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {     // everytime change is done reload, this is being used so that if user is already login and we refresh it, it wont bring to login page , it will STAY
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(loginuser({
                    email:userAuth.email,
                    uid:userAuth.uid,
                    photoURL:userAuth.photoURL,
                    displayName:userAuth.displayName
        }))
      }
      else{
        dispatch(logoutuser())
      }
    })
  }, []);
  return (
    <>
    {
      !user ? (<Login />) : (    
      <div className='appWrapper'>
      <Header/>
      <div className='App_body'>
        <Sidebar/>
        <Middle/>
        <Rightsidebar/>
      </div>
      </div>)
    }

    
    </>
    
    
  );
}

export default App;
