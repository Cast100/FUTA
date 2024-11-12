import React from 'react'
import myVideo from '../../video/press.mp4'
const video = () => {

    
  return (
    <> 
       <video width="400" height= '400' controls>
        <source src={myVideo} type="video/mp4" />
        
      </video>
    </>
  )
}

export default video
