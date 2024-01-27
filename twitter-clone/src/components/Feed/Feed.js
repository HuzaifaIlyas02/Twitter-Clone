import React from 'react'
import './Feed.css'
import TweetBox from '../TweetBox/TweetBox'
import Post from '../Post/Post'
function Feed() {
  return (
    <div className='feed'>
      {/* Header*/}
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      
      {/* Tweetbox */}
        <TweetBox />    
      {/* Post*/}
      <Post />
    </div>
  )
}

export default Feed
