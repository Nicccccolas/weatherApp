import React from 'react'

export const InfoCard = ({ weather }) => {
  return (
    <section className='info_card'>
      <h2 className='info_title'>"{weather?.weather[0].description}"</h2>
      <ul className='info_list'>
        <li className='list-elements'><h2><span> Wind speed: </span> {weather?.wind.speed} m/s</h2>
        </li>
        <li className='list-elements'><h2><span> Clouds: </span> {weather?.clouds.all}%</h2>
        </li>
        <li className='list-elements'><h2><span> Pressure: </span> {weather?.main.pressure} mb</h2>
        </li>
      </ul>
    </section>

  )
}

export default InfoCard