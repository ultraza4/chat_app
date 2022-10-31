import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Ozen Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/13415959/pexels-photo-13415959.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='avatar' />
        <span className='name'>John Norton</span>
        <button className='logout'>logout</button>
      </div>
    </div>
  )
}

export default Navbar