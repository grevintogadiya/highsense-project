import React from 'react'
import Welcome from './Welcome'
import Card from './Card'
import Process from './Process'
import Service from './Service'
import Promise from './Promise'
import Fotter from './Fotter'
import Aboutus from './Aboutus'
import Hire from './Hire'


function Home() {
  return (
    <div>
      <Welcome />
      <Card />
      <Process />
      <Service />
      <Promise />
      <Fotter />
      {/* {/secound pag} */}
      <Aboutus />

      <Hire />

 
    </div>
  )
}

export default Home

