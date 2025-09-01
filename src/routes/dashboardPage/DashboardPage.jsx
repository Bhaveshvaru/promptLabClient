import './dashboardpage.css'

const DashboardPage = () => {
  return (
    <div className='dashboardPage'>
      <div className='texts'>
        <div className='logo'>
          <img src='/logo.png' alt='logo' />
          <h1>PromptLab AI</h1>
        </div>
        <div className='options'>
          <div className='option'>
            <img src='/chat.png' alt='chat' />
            <span>Create a new Chat</span>
          </div>
          <div className='option'>
            <img src='/image.png' alt='chat' />
            <span>Analyze Image</span>
          </div>
          <div className='option'>
            <img src='/code.png' alt='chat' />
            <span>Help me with my Code</span>
          </div>
        </div>
      </div>
      <div className='formContainer'>
        <form>
          <input type='text' placeholder='Ask me anything...' />
          <button>
            <img src='/arrow.png' alt='arrow' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashboardPage
