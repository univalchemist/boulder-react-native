import { v4 as uuidv4 } from 'uuid'
import { IChatHistory } from './types'

export const _history: IChatHistory[] = [
  {
    _id: uuidv4(),
    title: 'Pension pay out',
    text: 'How often will I get a pension pay out when I’m retired?',
    date: new Date(),
  },
  {
    _id: uuidv4(),
    title: 'Pension pay out',
    text: 'How often will I get a pension pay out when I’m retired?',
    date: new Date(),
  },
  {
    _id: uuidv4(),
    title: 'Pension pay out',
    text: 'How often will I get a pension pay out when I’m retired?',
    date: new Date(),
  },
  {
    _id: uuidv4(),
    title: 'Pension pay out',
    text: 'How often will I get a pension pay out when I’m retired?',
    date: new Date('2023-07-19'),
  },
  {
    _id: uuidv4(),
    title: 'Pension size',
    text: 'How often will I get a pension pay out when I’m retired?',
    date: new Date('2023-07-19'),
  },
  {
    _id: uuidv4(),
    title: 'Pension size',
    text: 'How often will I get a pension pay out when I’m retired?',
    date: new Date('2023-07-13'),
  },
]
