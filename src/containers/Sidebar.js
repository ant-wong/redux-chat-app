import { connect } from 'react-redux'
import SidebarComp from '../components/Sidebar'

export const Sidebar = connect(state => ({
  users: state.users
}), {})(SidebarComp)