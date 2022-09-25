import React, { useState } from 'react'

const Button = ({temperature}) => {

  const [isCelsius, setIsCelsius] = useState(true)
  const changeTemp = () => setIsCelsius(!isCelsius)

  return (
    <section className='button'>
      <h3 className='temp_card'>{isCelsius ? `${temperature?.celsius}°C` : `${temperature?.farenheit}°F`}</h3>
      <button
        onClick={changeTemp} >
        {isCelsius ? 'Degrees °F' : 'Degrees °C'}
      </button >
    </section>

  )
}

  export default Button