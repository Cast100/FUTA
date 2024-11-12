import React from 'react'
import './service.css'

const service = () => {

    const data = [

        {
          id: '01',
          heading:'Mission',
          desc: 'To organize,advocate for favorable policies and transform traders into prosperous Economy'
        },
        
        {
            id: '02',
            heading:'Vision',
            desc: 'Empowered traders for sustainable development'
          }
    ]
  return (
    <>
      <section className='branding'>
        <div className='container grid'>
          {data.map((value) => {  
           return(
            <div className='box flex'>
            <div className='text'>
                <h1>{value.id}</h1>
            </div>
            <div className='para'>
            <h2>{value.heading}</h2>
            <p>{value.desc}</p>
            </div>
            </div>
           )  
          })}
        </div>

      </section>
    </>
  )
}

export default service
