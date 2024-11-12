import React from 'react'
import './Membership.css'
import icon from '../../asset/Business.png'
import Heading from '../../component/Header/Heading'
import Back from '../../component/Header/Back'

function Membership() {
  return (
    <>
     <section className='about'>
      <Back name='Membership' title='Membership' cover={icon} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Membership'  />

            <p>Federation of Uganda Traders Associations(FUTA) is jointed association with traders with the aim of seeking resources for traders, solve some of the challenges that traders face,with the corroboration of government ministries.Futa was founded on 6/jan/2004 to have umbrella body among traders entities.
          As futa,we empower the traders with help of Ministry of Finance,Trade,URA and the government of uganda.With our aims
          we would likely to have Futa Bank,Tv Station, Radio Station so that we can reachout to any trader in the country and
          also to have Futa cargo to easier up our traders for import and export goods,We plan to have different Offices in Districts</p>
          <br/>
          <h3> Rules for Membership </h3>
          <p>
          <span className="bullet">Membership to the organization shall be by prescription to the Memorandum and articles of Association and any other way as the borad by determine from time to time</span><br/>
          <span className="bullet">Applicants (organization) shall undergo a background check based on their legal status, existance for at least year, the existance of phyiscal address.
            Functional governance structures, and objectives that are consistent with those of the Organization
          </span><br/>
          <span className="bullet">Membership shall be initiated by an application to the Board of Directors which shall consider the application in accordance with provisions of the membership criteria and approved or denied by the AGM</span><br/>
          <span className="bullet">All membership shall pay a membership fee and annual subscripition fees to be determined by the general assembly</span>
          </p>

          </div>
          
        </div>
      </section>
    </>
  )
}

export default Membership
