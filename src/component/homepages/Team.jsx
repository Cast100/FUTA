import React from 'react'
import './Team.css'
import imgs from '../../asset/john.jpeg'
import img1 from '../../images/pix.png'
import Heading from '../Header/Heading'

const Team = () => {
  const team = [
    {
    
      title: 'President',
      cover:  imgs,
      name: "Kabanda John",
      
    },
    {
    
      title:'Public Relation',
      cover: img1,
      name: "Rwegaba Moses",
      
    },
    
  ]
  return (
  
       <>
      <section className='team background'>
        <div className='container'>
        <Heading title='Team' subtitle='FUTA Members'/>

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' style={{width: '98%' , borderRadius:'12px'}}/>
                  </div>
                  <p>{val.title}</p>
                  <h3>{val.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
    
  )
}

export default Team
