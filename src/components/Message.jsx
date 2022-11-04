import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/13996231/pexels-photo-13996231.jpeg?cs=srgb&dl=pexels-manuel-michael-13996231.jpg&fm=jpg&_gl=1*2vm57e*_ga*MTAxMDExMzAyOS4xNjU1MzU0MDQz*_ga_8JE65Q40S6*MTY2NzQ2MzQyMy44LjEuMTY2NzQ2MzQyNS4wLjAuMA.." alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/13756268/pexels-photo-13756268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
    </div>
  )
}

export default Message