import { useEffect, useRef } from 'react'
import './newPrompt.css'

const Newprompt = () => {
  const endRef = useRef()

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])
  return (
    <>
      <div className='endChat'></div>
      <form className='newForm'>
        <label htmlFor='file'>
          <img src='/attachment.png' alt='logo' />
        </label>
        <input type='file' multiple={false} id='file' hidden />
        <input type='text' placeholder='Ask Anything...' />
        <button>
          <img src='/arrow.png' alt='' />
        </button>
      </form>
      <div ref={endRef} />
    </>
  )
}

export default Newprompt
