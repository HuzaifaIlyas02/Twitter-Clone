import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'

function Post({
        // Props
        displayName,
        username,
        verified,
        text,
        image,
        avatar
}) {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar src="C:\Users\PMYLS\Desktop\Twitter-Clone\pngegg.png" />
            </div>
        </div>
    )
}

export default Post
