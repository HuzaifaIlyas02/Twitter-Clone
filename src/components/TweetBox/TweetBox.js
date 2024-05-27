import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from './../../Firebase'
import { collection, addDoc } from 'firebase/firestore';


function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  
  const sendTweet = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'posts'), {
        displayName: 'Muhammad Huzaifa Ilyas',
        username: 'huzaifa_ilyas',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: "/avatar.png",
      });

      setTweetMessage("");
      setTweetImage("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
        <Avatar src={"/avatar.png"} />
        <input 
        onChange={(e) => setTweetMessage(e.target.value)}
        value={tweetMessage} placeholder="What's happening?" type='text' />
        </div>
        <input 
        value={tweetImage}
        onChange={(e) => setTweetImage(e.target.value)}
        className='tweetBox__imageInput'
        placeholder='Enter image URL'
        type='text'/>
        <Button onClick= {sendTweet} type="submit" className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
