import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery1.webp'
import gallery_2 from '../../assets/gallery2.png'
import gallery_3 from '../../assets/gallery3.png'
import gallery_4 from '../../assets/gallery4.png'


const Campus = () => {
  return (
    <div className='campus'>
       <div className="gallery">
         <img src={gallery_1} alt="" />
         <img src={gallery_2} alt="" />
         <img src={gallery_3} alt="" />
         <img src={gallery_4} alt="" />
       </div>
    </div>
  )
}

export default Campus
