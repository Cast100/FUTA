import React from 'react'
import Player from 'react-player/youtube'
import './News.css'
import Video from '../Page/video'


function News() {
  return (
    <>
     <section className='recent padding'>
        <div className='container'>
        <div className='heading'>
            <h2><span className='underline'>Message</span> from the President(FUTA)</h2>
            <p>President Kabanda John speaks about EFRIS system which was imposed on Trader by URA.</p>
          </div>
         <div className="content grid2 mtop">
         <Player url='https://www.youtube.com/watch?v=EPeNF30KEBI&ab_channel=UgandaCatholicTelevision' controls={true}
          width='400px'
          height='400px' />
          <Video/>
         
          </div> 
        </div>
      </section>
   
    </>
  )
}

export default News
