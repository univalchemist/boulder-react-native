import { useContext } from 'react'

import { MessageContext } from '@/contexts'

export const useMessage = () => useContext(MessageContext)
