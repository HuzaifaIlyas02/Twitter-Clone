import React, {forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish'

const Post = forwardRef(
    ({displayName, username, verified, text, image, avatar}, ref) => {
        return (
            <div className='post' ref={ref}>
                <div className='post__avatar'>
                    <Avatar src={avatar} />
                </div>

                <div className='post__body'>
                    <div className='post__header'>
                        <div className='post__headerText'>
                            <h3>
                                {displayName} {' '}
                                <span className='post__headerSpecial'>
                                {verified && <VerifiedUserIcon className='post__badge' />} <a className="tag" href='https://twitter.com/m_huzaifa_25'>@{username}</a>
                                </span>
                            </h3>
                        </div>
                        <div className='post__headerDescription'>
                            <p>{text}</p>
                        </div>
                    </div>
                    <img src={image} alt=""/>

                    <div className='post__footer'>
                        <ChatBubbleOutlineIcon className="comment" fontSize='small' />
                        <RepeatIcon className="repost" fontSize='small' />
                        <FavoriteBorderIcon className="like" fontSize='small' />
                        <PublishIcon className="share" fontSize='small' />
                    </div>
                </div>
            </div>
        );
    }
);

export default Post;
