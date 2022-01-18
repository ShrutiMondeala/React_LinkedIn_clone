import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginuser } from '../features/userSlice';
import { auth } from '../Firebase';
import './Login.css';

const Login = () => {
    const [signUp, setsignUp] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    const dispach = useDispatch()//to call action

    const register=(e)=>{
        e.preventDefault();
        if(!name){
            alert("Enter full name")
        }
        if(!password){
            alert("Enter password with ccharacters and numbers")
        }
        if(!email){
            alert("Enter email")
        }
        if(!photoURL){
            alert("Enter photo url")
        }

        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
                userAuth.user.updateProfile({
                displayName:name,
                photoURL:photoURL
            }).then(()=>{
                    dispach(loginuser({    // to perfom this function imidiatly
                        email:userAuth.user.email,
                        uid: userAuth.user.uid,
                        photoURL:photoURL,
                        displayName:name
                    }))
            }).catch(error=>alert(error))
        })

        setName("");
        setPassword("");
        setPhotoURL("");
        setEmail("");

    }

    const signin=(e)=>{
            e.preventDefault();
            if(!email){
                alert("Enter email")
            }
            if(!password){
                alert("Enter password")
            }

            auth.signInWithEmailAndPassword(email,password).then(({user})=>
            {
                dispach(loginuser({    //login user is the action where the changes will be made actually

                    photoURL:user.photoURL,
                    displayName:user.displayName
                }))
        }
            ).catch(error=>alert(error))
            
    }
    return (
        <div className='Loginwrapper'>
            <img src='https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png' />

            
        {
            signUp==true? ( <form onSubmit={register}>
                <input type="text" placeholder='name' className='inputFeild' value={name} onChange={e=>setName(e.target.value)}/>
                <input type="password" placeholder='password' className='inputFeild' value={password} onChange={e=>setPassword(e.target.value)}/>
                <input type="email" placeholder='email' className='inputFeild' value={email} onChange={e=>setEmail(e.target.value)}/>
                <input type="text" placeholder='photo url' className='inputFeild' value={photoURL} onChange={e=>setPhotoURL(e.target.value)}/>

                <button type='submit'>Sign In</button>
                <br/>
                <span className='loginin'><b>Already a member ?</b><a href="#" onClick={e=>setsignUp(false)}> Login Here</a></span>
            </form>):(
                  <form onSubmit={signin}>

                    <input type="email" placeholder='email' className='inputFeild' value={email} onChange={e=>setEmail(e.target.value)}/>
                    <input type="password" placeholder='password' className='inputFeild' value={password} onChange={e=>setPassword(e.target.value)}/>
                  <button type='submit'>Log In</button>
                  <br/>
                  <span className='loginin'><b>New to LinkedIn ?</b><a href="#" onClick={e=>setsignUp(true)}> Register Here</a></span>
              </form>

            )
        } 

           </div>
    );
}

export default Login;


