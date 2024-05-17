import React from 'react'
import fruit1 from './assests/fruit1.png'
import fruit2 from './assests/fruit2.png'
import fruit3 from './assests/fruit3.png'
import fruit4 from './assests/fruit4.png'
import fruit5 from './assests/fruit5.png'
import fruit6 from './assests/fruit6.png'
const Comfort = () => {
  return (
    <div className='Comfort'>
        <div className="container">
        <h2 className='comfort_title'>Узбекские сухофрукты и орехи</h2>
        <div className="comfort_images">
            <div className="comfort_image">
                <div className="fruit">
                <img src={fruit1} alt="" />
                <h1>Сухофрукты</h1>
                <p>Предоставляем большой выбор сухофруктов: курага, изюм, компотные смеси, чернослив.</p>
                </div>
                <div className="fruit">
                <img src={fruit2} alt="" />
                <h1>Орехи</h1>
                <p>Поставляем орехи оптом. Ассортимент постоянно расширяется.</p>
                </div>
            </div>
            <div className="comfort_image">
                <div className="fruit">
                <img src={fruit3} alt="" />
                <h1>Бобовые</h1>
                <p>Осуществляем оптовую продажу фасоли и маша. Вся продукция свежего урожая, колибрована.</p>
                </div>
                <div className="fruit">
                <img src={fruit4} alt="" />
                <h1>Сухофрукты</h1>
                <p>Предлагаем большой выбор свежих фруктов, только что собранных с сада.</p>
                </div>
            </div>
            <div className="comfort_image">
                <div className="fruit">
                <img src={fruit5} alt="" />
                <h1>Овощи</h1>
                <p>Осуществляем поставку свежих овощей собранных с полей.</p>
                </div>
                <div className="fruit">
                <img src={fruit6} alt="" />
                <h1>Бахчевые культуры</h1>
                <p>Осуществляем оптовую продажу бахчевых культур.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Comfort