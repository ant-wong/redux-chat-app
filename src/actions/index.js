import * as types from '../contstants/ActionTypes'

let nextMessageId = 0
const nextUserId = 0

// MESSAGES
export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})

// USERS
export const addUser = (name) => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
})

export const populateUsersList = (users) => ({
  type: types.USERS_LIST,
  users
})