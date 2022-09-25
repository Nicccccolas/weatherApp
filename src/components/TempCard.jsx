import { useState } from "react"

const TempCard = ({weather, temperature}) => {
  
  return (
    <div className='temperature_card'>
      <img
      className="temperature_img"
      src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
      
    {/* <h3 className='temp_card'>{temperature?.farenheit}°F</h3> */}
    </div>
  )
}

export default TempCard