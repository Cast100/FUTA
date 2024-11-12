import React from 'react'
import './Partner.css'
import Card from '../homepages/Recentcard'


const Partner = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
        <div className='heading'>
            <h2>Our Cooperation with The Traders</h2>
            <p>A cross the Country</p>
          </div>
          <Card />
        </div>
      </section>
    </>
  )
}

export default Partner
