import React from 'react'
import Image from '../../asset/logo.png'
import './Footer.css'
import Tooltip from '../../data/Tooltip'

function Footer() {
  const footer = [
    {
      title: "Quick - links",
      text: [ { list: "About us" }, { list: "Membership" }]
    },
    {
      title: "Get in Touch",
      text: [{list:"tel: +256 752199176/753488277"},{list:"email: federationofugandatradersassoc@gmail.com"} ,
        {list:"location: Parkmpya Mall.Room133 kampala city,uganda"}
      ]
    }
    
  ]
  
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
            </div>
            <Tooltip text="+256 752199176 / 753488277">
            <button className='btn5'>Contact Us Today</button>
            </Tooltip>           
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src={Image} alt='' style={{width: '10%'}} />
              <p>Trading for better development of our Economy</p>
              <div className='socialIcon'>
             <a href='https://www.instagram.com/futa.256/?igsh=OGQ5ZDc2ODk2ZA%3D%3D'><i className='fab fa-instagram'></i></a> 
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-youtube '></i>    
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </footer>
      <div className='legal'>
        <span>Copyright © - Federation Of Uganda Traders Associations.</span>
      </div>
    </>
  )
}

export default Footer
