import { useEffect, useRef } from 'react'
import './newPrompt.css'
import Upload from '../upload/upload'
import { useState } from 'react'
import { IKImage } from 'imagekitio-react'
import model from '../../lib/gemini'
import Markdown from 'react-markdown'

const Newprompt = () => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const endRef = useRef()
  const [img, setImg] = useState({
    isLoading: false,
    error: '',
    dbData: {},
    aiData: {},
  })

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const add = async (text) => {
    setQuestion(text)
    const result = await model.generateContent(text)
    const response = await result.response
    setAnswer(response.text())
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const text = e.target.text.value
    if (!text) return
    add(text)
  }
  return (
    <>
      {img.isLoading && <div className=''>Loading...</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width='380'
          transformation={[{ width: 380 }]}
        />
      )}
      <div className='endChat'></div>
      {question && <div className='message user'>{question}</div>}
      {answer && (
        <div className='message'>
          <Markdown>{answer}</Markdown>
        </div>
      )}
      <form className='newForm' onSubmit={handleSubmit}>
        <Upload setImg={setImg} />
        <input type='file' multiple={false} id='file' hidden />
        <input type='text' name='text' placeholder='Ask Anything...' />
        <button type='submit'>
          <img src='/arrow.png' alt='' />
        </button>
      </form>
      <div ref={endRef} />
    </>
  )
}

export default Newprompt
