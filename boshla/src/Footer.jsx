import React from 'react'
import footerimg from './assests/endingBanner.png'
import footerlogo from './assests/footerLogo.svg'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="container">
            <div className="footer_inner">
            <img className="footer_img" src={footerimg} alt="" />
            <div className="footer_column">
            <div className="footer_column1">
                <img className='footer_logo' src={footerlogo} alt="" />
                    <p className='footer_txt'>Республика Узбекистан, г.Ташкент, Шайхонтохурский район, улица Лайлитогон 1, 141300, Самаркандская область, Пайарикский район, улица Самарканд 52.</p>
                    <div className="footer_info">
                    <div className="phone_number">
                        <p>+998 71 200 0224</p>
                        <p>+998 94 602 0004</p>
                        <p>+998 97 766 3050</p>
                    </div>
                    <div className="email">
                        <p>www.greendesert.uz</p>
                        <p>sales@ecofruit.uz</p>
                        <p>info@ecofruit.uz</p>
                    </div>
                    </div>
            </div>
            <div className="footer_column2">
                <h1 className="column_title">Быстрые ссылки</h1>
                <div className="column_menu">
                    <a href="">Контакты</a>
                    <a href="">Услуги</a>
                    <a href="">Каталог</a>
                    <a href="">Продукция</a>
                    <a href="">О нас</a>
                    <a href="">Блог</a>
                </div>
                <form className="column2_input">
                    <input type="text" placeholder='ваше имя'/>
                    <input type="text" placeholder='ваше email'/>
                    <button className='btn'>Отправит</button>
                </form>
            </div>
             <div className="footer_column3">
                <h1 className="column3_title">Подписывайтесь на нас</h1>
                <form className="column3_input">
                    <input type="text" placeholder='ваше сообщение'/>
                </form>
             </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer