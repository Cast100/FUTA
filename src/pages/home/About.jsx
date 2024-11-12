import React from 'react'
import './About.css'
import Image from '../../asset/member.png'
import icon from '../../asset/Business.png'
import Team from '../../component/homepages/Team'
import Heading from '../../component/Header/Heading'
import Back from '../../component/Header/Back'



const About = () => {
  return (
    <>
      <section className='about'>
      <Back name='About Us' title='About Us - Who We Are?' cover={icon} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='About Us' subtitle='Check out our company story and work process' />

            <p>Federation of Uganda Traders Associations(FUTA) is jointed association with traders with the aim of seeking resources for traders, solve some of the challenges that traders face,with the corroboration of government ministries.Futa was founded on 6/jan/2004 to have umbrella body among traders entities.
          As futa,we empower the traders with help of Ministry of Finance,Trade,URA and the government of uganda.With our aims
          we would likely to have Futa Bank,Tv Station, Radio Station so that we can reachout to any trader in the country and
          also to have Futa cargo to easier up our traders for import and export goods,We plan to have different Offices in Districts</p>

          </div>
          <div className='right row'>
            <img src={Image} alt='' style={{width: '200%' , borderRadius:'12px'}}/>
          </div>
        </div>
      </section>
      <Team/>
    </>
  )
}

export default About
