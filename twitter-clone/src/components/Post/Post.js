import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish'

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
                <Avatar src="https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif" />
            </div>

            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            Muhammad Huzaifa Ilyas {' '}
                            <span className='post__headerSpecial'>
                            <VerifiedUserIcon className='post__badge' /> <a className="tag" href='https://twitter.com/m_huzaifa_25'>@huzaifa_ilyas</a>
                            </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>I challenge you to build a Twitter Clone with React!</p>
                    </div>
                </div>
                <img src="https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif" alt=""/>

                <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default Post
