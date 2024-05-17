import React from 'react'
import why1 from './assests/why1.svg'
import why2 from './assests/why2.svg'
import why3 from './assests/why3.svg'
import why4 from './assests/why4.svg'
import why5 from './assests/why5.svg'
import why6 from './assests/why6.svg'

const Why = () => {
  return (
    <div className='Why'> 
    <div className="container">
      <h2 className='why_title'>Почему мы</h2>
      <div className="why_images">
        <div className="why_image">
            <div className="why why_1">
            <img src={why1} alt="" />
            <p>Гарантия высокого качества</p>
            </div>
            <div className="why why_2">
            <img src={why2} alt="" />
            <p>Вкусные и полезные продукты</p>
            </div>
            <div className="why why_3">
            <img src={why3} alt="" />
            <p>Сертифицированная продукция</p>
            </div>
        </div>
        <div className="why_image">
            <div className="why why_4">
            <img src={why4} alt="" />
            <p>Упаковка</p>
            </div>
            <div className="why why_5">
            <img src={why5} alt="" />
            <p>Экспорт</p>
            </div>
            <div className="why why_6">
            <img src={why6} alt="" />                
            <p>Конкурентоспособные цены</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Why