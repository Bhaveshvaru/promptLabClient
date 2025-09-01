import { Link } from 'react-router-dom'
import './chatList.css'

const ChatList = () => {
  return (
    <div className='chatList'>
      <span className='title'>DashBoard</span>
      <Link to='/dashboard'>Create a New Chat </Link>
      <Link to='/'>Explore PromptLab</Link>
      <Link to='/'>My Chat Title</Link>
      <hr />
      <span className='title'>Recent Chats</span>
      <div className='list'>
        <Link to='/'>My Chat Title</Link>
        <Link to='/'>My Chat Title</Link>
        <Link to='/'>My Chat Title</Link>
        <Link to='/'>My Chat Title</Link>
        <Link to='/'>My Chat Title</Link>
        <Link to='/'>My Chat Title</Link>
        <Link to='/'>My Chat Title</Link>
        <Link to='/'>My Chat Title</Link>
        <Link to='/'>My Chat Title</Link>
        <Link to='/'>My Chat Title</Link>
        <Link to='/'>My Chat Title</Link>
      </div>
      <hr />
      <div className='upgrade'>
        <img src='/logo.png' alt='logo' />
        <div className='texts'>
          <span>Upgrade to Prompt AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  )
}

export default ChatList
