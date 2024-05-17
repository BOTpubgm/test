import React from 'react'
import Frame1 from './assests/Frame.jpg'
import Frame2 from './assests/Frame2.jpg'
import Frame3 from './assests/Frame3.jpg'
import Frame4 from './assests/Frame4.jpg'
import Frame5 from './assests/Frame5.jpg'
import Frame6 from './assests/Frame6.jpg'
import Frame7 from './assests/Frame7.jpg'
import Frame8 from './assests/Frame8.jpg'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="container">
      <div className="gallery__inner">
      <h1 className='gallery__title'>Галерея</h1>
      <div className="gallery__images">
        <div className="gallery__image">
           <img  src={Frame1} alt="" />
        </div>
        <div className="gallery__image">
           <img  src={Frame2} alt="" />
        </div>
        <div className="gallery__image">
           <img  src={Frame3} alt="" />
        </div>
        <div className="gallery__image">
           <img  src={Frame4} alt="" />
        </div>
        <div className="gallery__image">
           <img  src={Frame5} alt="" />
        </div>
        <div className="gallery__image">
           <img  src={Frame6} alt="" />
        </div>
        <div className="gallery__image">
           <img  src={Frame7} alt="" />
        </div>
        <div className="gallery__image">
           <img  src={Frame8} alt="" />
        </div>
      </div>
      </div> 
      </div>
      </div>
  )
}

export default Gallery