/* eslint-disable max-len */
// For temporary
import { v4 as uuidv4 } from 'uuid'
import { IComment, IMessage, User } from '@/types'
import { OperatingList } from '@/types'

// Support user for backend response
export const _user: User = {
  _id: 2,
  name: 'Support',
  avatar: 'https://picsum.photos/id/20/200/200',
  type: 'system',
}

export const _user1: User = {
  _id: 1,
  name: 'User 1',
  avatar: 'https://picsum.photos/id/10/200/200',
}

export const _user2: User = {
  _id: 2,
  name: 'User 2',
  avatar: 'https://picsum.photos/id/20/200/200',
}

export const _user3: User = {
  _id: 3,
  name: 'User 3',
  avatar: 'https://picsum.photos/id/30/200/200',
}

export const _user4: User = {
  _id: 4,
  name: 'User 4',
  avatar: 'https://picsum.photos/id/40/200/200',
}

export const _user5: User = {
  _id: 4,
  name: 'User 5',
  avatar: 'https://picsum.photos/id/50/200/200',
}

export const _news: IMessage[] = [
  {
    _id: 4,
    text: 'We are delighted to announce that we have secured a new partnership with ABC Stores, a rising star in the retail industry. ABC Stores...',
    createdAt: new Date(),
    user: _user,
    title: 'New customer closed yesterday!',
  },
  {
    _id: 2,
    text: 'Typically, pension payments are made monthly to mimic the regularity of a salary. However, it can depend on the specifics of your pension plan or insurance policy - some might offer quarterly, semi-annual, or even annual payouts.',
    createdAt: new Date(),
    user: _user,
    title: 'New customer closed yesterday!',
  },
  {
    _id: 3,
    text: 'Typically, pension payments are made monthly to mimic the regularity of a salary. However, it can depend on the specifics of your pension plan or insurance policy - some might offer quarterly, semi-annual, or even annual payouts.',
    createdAt: new Date(),
    user: _user,
    title: 'New customer closed yesterday!',
    image: 'https://picsum.photos/seed/picsum/400/300',
  },
]

export const _messages: IMessage[] = [
  {
    _id: 4,
    text: "The size of your pension payout can depend on the type of plan you have. With some plans, you'll receive a fixed payout that doesn't change over time. However, other plans could offer variable payouts, which might increase or decrease based on the performance of the investments tied to your pension.",
    createdAt: new Date(),
    user: _user2,
    title: 'Hello world',
  },
  {
    _id: 3,
    text: 'Will the pension pay out vary in size?',
    createdAt: new Date(),
    user: _user1,
  },
  {
    _id: 2,
    text: 'Typically, pension payments are made monthly to mimic the regularity of a salary. However, it can depend on the specifics of your pension plan or insurance policy - some might offer quarterly, semi-annual, or even annual payouts.',
    createdAt: new Date(),
    user: _user2,
  },
  {
    _id: 1,
    text: 'How often will I get a pension pay out when I’m retired?',
    createdAt: new Date(),
    user: _user1,
  },
]

export const _newsDetail: IMessage = {
  _id: 4,
  text: "We are delighted to announce that we have secured a new partnership with ABC Stores, a rising star in the retail industry. ABC Stores is a nationwide network of high-quality supermarkets, renowned for their extensive selection of products and exceptional customer service. Our partnership, finalized on July 1, 2023, represents a significant stride towards expanding our business reach and impacting consumers on a broader scale.\n\nWith their innovative approach to retail and dedication to providing top-notch shopping experiences, ABC Stores aligns perfectly with our vision to deliver market-leading services. This new partnership will allow us to enhance the range of services offered to our retail customers, delivering more personalized and effective solutions.\n\nIt's an exciting time for us as we commence this new journey. We're thrilled to be partnering with ABC Stores, and we look forward to achieving great things together. By continually exploring and capitalizing on new opportunities, we are making consistent strides towards our goal of being at the forefront of the retail industry.\n\nStay tuned for more exciting updates and developments in the coming months. Together with ABC Stores, we're committed to making shopping easier, more enjoyable, and more rewarding for customers all over the country.",
  createdAt: new Date(),
  user: _user2,
  title: 'New customer closed yesterday!',
}

export const _comments: IComment[] = [
  {
    _id: 1,
    text: 'Great Work!✨️✨️',
    createdAt: new Date(),
    user: _user1,
    replies: [
      {
        _id: 2,
        text: 'Today, My day is awesome with food 😂, Today, My day is .',
        createdAt: new Date(),
        user: _user2,
        replies: [
          {
            _id: 3,
            text: 'Stunning! Your attention to detail',
            createdAt: new Date(),
            user: _user3,
            image: 'https://picsum.photos/seed/picsum/400/300',
            replies: [
              {
                _id: 4,
                text: 'Thanks a lot brother 👦 ',
                createdAt: new Date(),
                user: _user4,
              },
            ],
          },
        ],
      },
    ],
  },
]

export const _operatingInformation: OperatingList[] = [
  {
    title: 'CURRENTLY ACTIVE',
    data: [
      {
        id: uuidv4(),
        title: 'Title goes here',
        description: 'Description goes here',
        date: new Date(),
        time: '11:00am - 5:00pm',
      },
      {
        id: uuidv4(),
        title: 'Title goes here',
        description: 'Description goes here',
        date: new Date(),
        time: '11:00am - 5:00pm',
      },
    ],
  },
  {
    title: 'PLANNED',
    data: [
      {
        id: uuidv4(),
        title: 'Title goes here',
        description: 'Description goes here',
        date: new Date(),
        time: '11:00am - 5:00pm',
      },
    ],
  },
]
