import React from 'react'
import './Cover.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Cover = () => {
  return (
    <div className='cover container'>
         <div className="cover-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Our-cutting edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
         </div>
    </div>
  )
}

export default Cover
