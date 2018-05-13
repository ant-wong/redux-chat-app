import { connect } from 'react-redux'
import MessagesListComp from '../components/MessagesList'

export const MessagesList = connect(state => ({
  messages: state.messages
}), {})(MessagesListComp)