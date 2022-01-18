import { Comment, Share, ThumbUp } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react';
import './Middle.css'

const Post = forwardRef(({name,disc,comment,photoURL},ref) => { //in parent to chaild ref, it pass diffrent refrence to every child
    return (
        <div className='Post' ref={ref}>
            <div className='Post__header'>
                <div className='userinfo'>
                    <Avatar src={photoURL}/>
                    <div className='userInfo'>
                    <h3>{name}</h3>
                    <p>{disc}</p>
                    </div>
                    
                </div>
                <div className='dot'>
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
                </div>
            </div>
            <div className='Post__body'>
                <p>{comment}</p>
            </div>
            <div className='Post__bottom'>
                <div className='option_bottom'>
                    <ThumbUp/>
                    <span>Like</span>
                </div>
                <div className='option_bottom'>
                    <Comment/>
                    <span>Comment</span>
                </div>
                <div className='option_bottom'>
                    <Share/>
                    <span>Share</span>
                </div>
            </div>
        </div>
    );
}
)
export default Post;
