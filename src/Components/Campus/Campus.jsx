import React from 'react'
import './Campus.css'
import gallery_1 from '../../Assets/gallery-1.jpg'
import gallery_2 from '../../Assets/gallery-2.jpg'
import gallery_5 from '../../Assets/gallery-5.jpg'
import gallery_4 from '../../Assets/gallery-4.jpg'
import white_arrow from '../../Assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus container' id='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="gallery images" />
        <img src={gallery_2} alt="gallery images" />
        <img src={gallery_5} alt="gallery images" />
        <img src={gallery_4} alt="gallery images" />
      </div>
      <button className='btn dark-btn' >See More here <img src={white_arrow} alt="see more btn" /></button>
    </div>
  )
}

export default Campus
