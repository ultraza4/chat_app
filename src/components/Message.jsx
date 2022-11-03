import React from 'react'

const Message = () => {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/13996231/pexels-photo-13996231.jpeg?cs=srgb&dl=pexels-manuel-michael-13996231.jpg&fm=jpg&_gl=1*2vm57e*_ga*MTAxMDExMzAyOS4xNjU1MzU0MDQz*_ga_8JE65Q40S6*MTY2NzQ2MzQyMy44LjEuMTY2NzQ2MzQyNS4wLjAuMA.." alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
      </div>
    </div>
  )
}

export default Message