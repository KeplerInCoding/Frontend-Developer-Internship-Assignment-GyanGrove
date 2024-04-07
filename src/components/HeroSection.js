import React from 'react'
import bg from "../images/Banner.svg"

const HeroSection = () => {
  return (
    <div style={{ 
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh' }}>
      </div>
  )
}

export default HeroSection