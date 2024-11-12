import React from 'react'
import './style.css'
//import Heading from '../Header/Heading'
import Image1 from '../../asset/pix.png'
import Image2 from '../../asset/pix2.png'
import Image4 from '../../asset/pix4.png'
import Image5 from '../../asset/px.png'
import Image6 from '../../images/pic1.png'
import Image9 from '../../images/app.jpeg'
import Image7 from '../../images/new.jpeg'
import Image8 from '../../images/new2.jpeg'
import Image10 from '../../images/pixs.jpeg'

const Location = () => {
    const location = [
        {
            id: 1,
            cover: Image1,
            
          },
          {
            id: 2,
            cover: Image2,
            
          },
          
          {
            id: 4,
            cover: Image4,
           
          },
          {
            id: 5,
            cover: Image5,
           
          },
          {
            id: 6,
            cover: Image6,
           
          },
         
          {
            id: 9,
            cover: Image9,
    
          },  
          {
            id: 7,
            cover: Image7,
           
          },  
          {
            id: 8,
            cover: Image8,
           
          },  
          {
            id: 10,
            cover: Image10,
           
          },  
       ]
  return (
    <>
      <section className='location padding'>
       <div className='container'>
        <div className='heading'>
        <h2>Interaction with Traders</h2>
        <p>Traders Meeting with Traders Leaders</p>
        </div>
        
        <div className='content grid3 mtop'>
           {location.map((items, index) =>{
              return(
                <div className='box' key={index}>
               <img src={items.cover} alt=''/>
              </div>
              )  
           })}
        </div>

       </div>
      </section>
    </>
  )
}

export default Location
