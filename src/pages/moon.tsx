import React from 'react'
import '../App.css'

const Moon = () => {
  return (
    <div className="md:flex">
      <div>
        <h1 className='heading-xs'> MOON</h1>
        <p>See our planet as you've never seen it before. A perfect <br />
        relaxing trip away to help regain perspective and come <br />
        back refreshed. While you're there, take in some history <br />
        by visiting the Luna and Apollo 11 landing sites.
        </p>
        <div>
            <h1 className='heading'>AVG. DISTANCE</h1>
            <p>384,400 KM</p>
        </div>
        <div>
            <h1 className='heading'>EST. TRAVEL TIME</h1>
            <p>3 DAYS</p>
        </div>
      </div>
    </div>
  )
}

export default Moon
