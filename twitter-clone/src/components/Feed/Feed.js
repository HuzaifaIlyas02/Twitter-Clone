import React, { useState } from 'react'
import './Feed.css'
import TweetBox from '../TweetBox/TweetBox'
import Post from '../Post/Post'

function Feed() {
  const [posts, setPosts] = useState([]);
  return (
    <div className='feed'>
      {/* Header*/}
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      
      <TweetBox />    
      <Post 
        displayName={"Muhammad Huzaifa Ilyas"}
        username={"huzaifa_ilyas"}
        verified={true}
        text={"I challenge you to build a Twitter Clone with React!"}
        image={"https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif"}
        avatar={"/avatar.png"}
      />
    </div> 
  )
}

export default Feed
