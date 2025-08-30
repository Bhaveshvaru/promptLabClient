import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation'

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState('human1')
  return (
    <div className='homepage'>
      <img src='/orbital.png' alt='orbital' className='orbital' />
      <div className='left'>
        <h1>PromptLab</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          An AI-powered conversational assistant built to understand and respond
          naturally to human language.Perfect for productivity, learning, and
          everyday problem-solving.
        </h3>
        <Link to='/dashboard'>Get Started</Link>
      </div>
      <div className='right'>
        <div className='imgContainer'>
          <div className='bgContainer'>
            <div className='bg'></div>
          </div>
          <img src='/bot.png' alt='bot' className='bot' />
          <div className='chat'>
            <img
              src={
                typingStatus === 'human1'
                  ? '/human1.jpeg'
                  : typingStatus === 'human2'
                  ? '/human2.jpeg'
                  : 'bot.png'
              }
              alt=''
            />
            <TypeAnimation
              sequence={[
                'Fix this bug',
                2000,
                () => {
                  setTypingStatus('bot')
                },
                'Summarize this Essay',
                2000,
                () => {
                  setTypingStatus('human2')
                },
                'Give me learning plan',
                2000,
                () => {
                  setTypingStatus('bot')
                },
                'Suggest UI design',
                2000,
                () => {
                  setTypingStatus('human1')
                },
              ]}
              wrapper='span'
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
