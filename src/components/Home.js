import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div >
      <div className="image">
        <img src={require('./images//warren_buffet.webp')} alt="" />
        <div className="quote">Without <b>Passion</b> you dont have energy <br />Without energy you have <b>nothing</b></div>
      </div>
    </div>
  )
}

export default Home
