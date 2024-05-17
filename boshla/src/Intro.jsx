import React from 'react'
import rasm1 from './assests/heroSlider1.jpg'

const Intro = () => {
  
  return (
    <div className='intro'>
      <div className="">
      <div className="intro_slider">
        <img src={rasm1} alt="" />
      </div>
      <div className="intro_slider_txt">
        <h1>EcoFruits</h1>
        <h3>из Узбекистана с любовью</h3>
      </div>
        <div className="intro_card">
          <h3 className='intro_card_title'>Сухофрукты очень питательны</h3>
          <p className='intro_card_subtitle'>Один кусочек сухофрукта содержит примерно такое же количество питательных веществ, как и свежий фрукт, но упакован в гораздо меньшую упаковку.</p>
          <p className='intro_card_subtitle'>Одна порция может обеспечить большой процент рекомендуемой суточной нормы многих витаминов и минералов, таких как фолиевая кислота.</p>
        </div>
      </div>
    </div>
  )
}

export default Intro