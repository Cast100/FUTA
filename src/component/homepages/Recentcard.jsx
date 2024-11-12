import React from 'react'
import img from'../../images/futa.png'
import img2 from '../../images/fut.png'
import img3 from '../../images/img4.png'
import img4 from '../../images/icon.png'
import img5 from '../../images/new3.jpeg'

const Recentcard = () => {

    const list = [
        {
            id: 1,
            cover: img,
            name: "Leaders of Munende Traders",
           
          },
          {
            id: 3,
            cover: img3,
            name: "Visited Gulu Traders",
            
          },
          {
            id: 2,
            cover: img2,
            name: "Investor in Uganda, Mr.Sung",
            
          },
          {
            id: 4,
            cover: img4,
            name: "Visiting Mubende Traders",
            
          },
          {
            id: 5,
            cover: img5,
            name: "Organising Masaka Traders Conference",
            
          },
         
    ]
  return (
    <>
      <div className='content grid2 mtop'>
        {list.map((val, index) => {
          const { cover,name, } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' style={{width: '100%'}}/>
              </div>
              <div className='text'>
                <div className='category flex'>
                <h4>{name}</h4>
                </div>
                
              </div>
             
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Recentcard
