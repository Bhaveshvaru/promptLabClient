import './dashboardpage.css'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {
  const queryClient = useQueryClient()

  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: (text) => {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      }).then((res) => res.json())
    },
    onSuccess: (id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['userChats'] })
      navigate(`/dashboard/chats/${id}`)
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const text = e.target.text.value
    if (!text) return

    mutation.mutate(text)
  }
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
        <form onSubmit={handleSubmit}>
          <input type='text' name='text' placeholder='Ask me anything...' />
          <button type='submit'>
            <img src='/arrow.png' alt='arrow' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashboardPage
