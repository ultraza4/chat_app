import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Ozen Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/13415959/pexels-photo-13415959.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='avatar' />
        <span className='name'>John Norton</span>
        <button onClick={()=>signOut(auth)} className='logout'>logout</button>
      </div>
    </div>
  )
}

export default Navbar