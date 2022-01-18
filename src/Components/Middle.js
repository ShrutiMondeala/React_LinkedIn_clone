
import { ArticleSharp, Event, Photo, YouTube } from '@mui/icons-material';
import { Avatar, Input } from '@mui/material';
import React from 'react';
import './Middle.css';
import Post from './Post.js';
import {useEffect,useState} from 'react';
import { db } from '../Firebase';
import firebase from 'firebase'
import {useSelector} from 'react-redux'
import {selectUser} from '../features/userSlice'
import FlipMove from 'react-flip-move';
const Middle = () => {

    const user=useSelector(selectUser);
    const[Value,setValue]=useState('');
    const[Posts,setPosts]=useState([]);
    const submitForm=(e)=>{
        e.preventDefault();
        
        db.collection("posts").add({
            name:user.displayName,
            description:"Software enginner",
            comment:Value,
            photoURL:user.photoURL,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        });

        setValue(" ")
    }

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{ //take imidiate snap of the data entered, to take the data back from database
            setPosts(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
    }, []);
    return (
        <div className='Feed'>
            <div className='Wrapper'>
            <div className='FeedInput'>
                <Avatar src={user.photoURL}/>
                <form onSubmit={submitForm}>
                    <input type="text" placeholder='Start a post' value={Value}  onChange={(e)=> setValue(e.target.value)}/>
                    <input type='submit'/>
                </form>
            </div>
            <div className='Feedicons'>
                <div className='options'>
                    <Photo style={{color:"rgb(221, 177, 184)",fontSize:"35px"}}/>
                    <span>Photo</span>
                </div>
                <div className='options'>
                    <YouTube style={{color:"rgb(224, 71, 97)",fontSize:"35px"}}/>
                    <span>Video</span>
                </div>
                <div className='options'>
                    <Event style={{color:"rgb(224, 176, 86)",fontSize:"35px"}}/>
                    <span>Event</span>
                </div>
                <div className='options'>
                    <ArticleSharp style={{color:"rgb(141, 141, 207)",fontSize:"35px"}}/>
                    <span>Write Artical</span>
                </div>
            </div>
            </div>

         <FlipMove>
         {
                Posts.map(({id,data :{name,description,comment,photoURL}})=>{
                    return <Post key={id} name={name} disc={description} comment={comment} photoURL={photoURL}/> 
                })
            }
        </FlipMove>   
            

           
            
        
        </div>
    );
}

export default Middle;
