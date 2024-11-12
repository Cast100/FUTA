import React,{useState}  from 'react'
import './Header.css'
import images from '../../asset/logo.png'
import {Link} from "react-router-dom"
import{nav} from '../../data/Data'
import Tooltip from '../../data/Tooltip'


const Header = () => {
  const [navList, setNavList] = useState(false)
  return (
    <>
     <header>
        <div className='container flex'>
          <div className='logo'>
          <img src={images} alt=""/>
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
           
          </div>
          <div className='button flex'>
          <Tooltip text="+256 752199176 / 753488277">
          <button className='btn1'>  
              <i className='fa fa-phone'></i> Contact Us
            </button>
          </Tooltip>
            
          </div>
          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
