import React from 'react'
import { MessageProvider } from '@/contexts'

import { ChatList } from './components'

const Chat: React.FC = () => {
  return (
    <MessageProvider>
      <ChatList />
    </MessageProvider>
  )
}

export default Chat
