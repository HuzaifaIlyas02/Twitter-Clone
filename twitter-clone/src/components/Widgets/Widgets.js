import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search'
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from 'react-twitter-embed'

function getRandomProfileName() {
  const validProfileNames = [
    "elonmusk",
    "BarackObama",
    "katyperry",
    "justinbieber",
    "rihanna",
    "Cristiano",
    "ladygaga",
    "TheEllenShow",
    "realDonaldTrump",
    "taylorswift13",
    "YouTube",
    "narendramodi",
    "BillGates",
    "Oprah",
    "KimKardashian",
    "jtimberlake",
    "neymarjr",
  ];

  const randomNumber = Math.floor(Math.random() * validProfileNames.length);
  const profileName = validProfileNames[randomNumber];
  return profileName;
}

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"858551177860055040"} />

             
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName={getRandomProfileName()}
          options={{ height: 400 }}
        />

        
      </div>
    </div>
  )
}

export default Widgets
