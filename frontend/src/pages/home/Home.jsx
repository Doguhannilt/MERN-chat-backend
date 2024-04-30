import React from 'react'
import Logout from '../../components/sidebar/Logout'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div>
      <Sidebar />
      <MessageContainer />
      <Logout/>
    </div>
  )
}

export default Home
