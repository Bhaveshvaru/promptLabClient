import './chatpage.css'
import Newprompt from '../../components/NewPrompt/NewPrompt'
import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import Markdown from 'react-markdown'
import { IKImage } from 'imagekitio-react'
import { useAuth } from '@clerk/clerk-react'
const ChatPage = () => {
  const path = useLocation().pathname
  const chatId = path.split('/').pop()

  const { getToken } = useAuth()

  const { isPending, error, data } = useQuery({
    queryKey: ['chat', chatId],
    queryFn: async () => {
      // 1. Get the token from Clerk
      const token = await getToken()

      // 2. Add the token to the Authorization header
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/chats/${chatId}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          // You can remove credentials: 'include' if you aren't using custom cookies
        }
      )

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      return res.json()
    },
    enabled: !!chatId, // Only run the query if chatId exists
  })

  return (
    <div className='chatPage'>
      <div className='wrapper'>
        <div className='chat'>
          {isPending
            ? 'Loading...'
            : error
            ? 'Something went wrong!'
            : data?.history?.map((message, i) => (
                <>
                  {message.img && (
                    <IKImage
                      urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                      path={message.img}
                      height='300'
                      width='400'
                      transformation={[{ height: 300, width: 400 }]}
                      loading='lazy'
                      lqip={{ active: true, quality: 20 }}
                    />
                  )}
                  <div
                    className={
                      message.role === 'user' ? 'message user' : 'message'
                    }
                    key={i}
                  >
                    <Markdown>{message.parts[0].text}</Markdown>
                  </div>
                </>
              ))}

          {data && <Newprompt data={data} />}
        </div>
      </div>
    </div>
  )
}

export default ChatPage
