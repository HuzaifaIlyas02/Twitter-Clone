import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'

function TweetBox() {
  return (
    <div className='tweetbox'>
      <form>
        <div className='tweetBox__input'>
        <Avatar src="C:\Users\PMYLS\Desktop\Twitter-Clone\pngegg.png" />
        <input placeholder="What's happening?" type='text' />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
