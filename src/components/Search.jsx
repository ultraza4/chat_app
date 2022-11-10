import React from 'react'
import { useState } from 'react'

const Search = () => {
  const [userName, setUserName] = useState("");


  return (
    <div className='search'>
      <div className="searchForm">
        <input type="" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/13415959/pexels-photo-13415959.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className="userChatInfo">
          <span>John</span>
        </div>
      </div>
    </div>
  )
}

export default Search