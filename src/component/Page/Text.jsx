import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import gsap from 'gsap'

function Text() {
    useEffect(() =>{
        let textAnimation = gsap.timeline();
        textAnimation.from('.word', {
            y: 100,
            stagger:{
                each: 0.7
            }
        })
    })
  return (
    <div className='w-100 p-3 vh - 20 d-flex align-items-center justify-column-center flex-column'>
      <div className='d-flex'>
        {
            'Federation Of Uganda Traders Associations'.split('').map((word) => {
                return word === '' ?<div className='word'>&nbps;</div> :<div className='word'>{word}</div>
            })
        }
      </div>
    </div>
  )
}

export default Text
