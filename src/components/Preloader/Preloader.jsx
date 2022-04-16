import React from 'react'
import useStylesPreloader from './UseStylesPreloader'

const Preloader = () => {
  useStylesPreloader();

  return (
    <div className='preloader-wrapper'>
      <img className='preloader-img' src="./logo-img.png" alt="loader-heart" />
    </div>
  )
};

export default Preloader