import React from 'react'
import './logo.css'
import Image1 from '../../svg/ea.jpg'
import Image2 from '../../svg/icon.jpg'
import Image3 from '../../svg/image.jpg'
import Image4 from '../../svg/img.gif'
import Image5 from '../../svg/msc.jpg'
import Image6 from '../../svg/state.png'
import Image7 from '../../svg/ura.png'



const logo = () => {
    const icon = [
        {
            id: 1,
            cover: Image1,
            
          },
          {
            id: 2,
            cover: Image2,
            
          },
          
          {
            id: 3,
            cover: Image3,
           
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
            id: 7,
            cover: Image7,
           
          },  

       ]
  return (
    <div>
       <section className='logo padding'>
       <div 
       
       className='container'>
        <div className='heading'>
        <h2>Our Partners</h2>

        </div>
        
        <div className='content grid7 mtop'>
           {icon.map((items, index) =>{
              return(
                <div className='box' key={index}>
               <img src={items.cover} alt=''/>
              </div>
              )  
           })}
        </div>

       </div>
      </section>
    </div>
  )
}

export default logo
