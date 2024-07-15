import React from 'react'
import '../App.css'

const Mars = () => {
  return (
    <div>
      <div>
        <h1 className='planet-name'>MARS</h1>
        <p className='description'>Dont forget your hiking boots. you'll need them to <br />
        tacckle Olympus Mons, the tallest planetary mountain in <br />
        our solar system. Its two and a half times the size of <br />
        Everest!
        </p>
        <hr className='divider' />
        <div className='stats'>
          <div className='stat-item'>
            <h3 className='stat-title'>AVG. DISTANCE</h3>
            <p className='stat-value'>225 MIL KM</p>
        </div>
        <div className='stat-item'>
            <h3 className='stat-title'>EST. TRAVEL TIME</h3>
            <p className='stat-value'>9 MONTHS</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Mars
