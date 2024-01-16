import { faker } from '@faker-js/faker'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

import { IEvent, IEventAttendee } from '@/types'
import { ME_MOCK } from '@/constants'

export const mockMessage = (sentences: number) => {
  return faker.lorem.sentences(sentences)
}

export const mockEvents = (count: number): IEvent[] => {
  const createAttendee = (): IEventAttendee => {
    return {
      id: uuidv4(),
      avatar: faker.image.url({ width: 30, height: 30 }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      role: 'attendee',
      attending: true,
    }
  }

  const createEvent = (): IEvent => {
    const time = moment()
      .add(faker.number.int({ min: 0, max: 15 }), 'days')
      .add(faker.number.int({ min: 0, max: 10 }), 'hours')
      .format('YYYY-MM-DD HH:mm')
    const attendees = faker.helpers.multiple(createAttendee, {
      count: faker.number.int({ min: 3, max: 12 }),
    })
    attendees[0].role = 'organizer'
    attendees[1] = {
      ...attendees[1],
      ...ME_MOCK,
    }
    attendees[faker.number.int({ min: 0, max: attendees.length - 1 })].attending = false
    attendees[faker.number.int({ min: 0, max: attendees.length - 1 })].attending = undefined

    return {
      id: uuidv4(),
      time,
      duration: faker.number.int({ min: 15, max: 120 }),
      name: faker.lorem.sentence(),
      description: faker.lorem.sentences({ min: 1, max: 3 }),
      type: 'Location or Online meeting',
      seats: faker.number.int({ min: 3, max: 15 }),
      attendees,
    }
  }

  return faker.helpers.multiple(createEvent, { count })
}
