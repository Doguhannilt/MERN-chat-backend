import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'

const Sidebar = () => {
  return (
    <div>
      
        <SearchInput />
        <div>
            <Conversation />
            <LogoutButton />
        </div>

    </div>
  )
}

export default Sidebar
