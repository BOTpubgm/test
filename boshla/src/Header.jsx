import React from 'react'
import logo from './image/logo.png'
import search from './image/Search.png'

const Header = () => {

  function burger() {
    document.querySelector('.line_1').classList.toggle('open_1')
    document.querySelector('.line_2').classList.toggle('open_2')
    document.querySelector('.line_3').classList.toggle('open_3')
    document.querySelector('.header_link').classList.toggle('header_link_open')
  }

  return (
    <div className="Header ">
      <div className="container">
        <div className="header_inner">
      <div className="header_logo">
        <img src={logo} alt="" />
      </div>
      <div className="header_link">
        <a href="">Дома</a>
        <a href="">Продукция</a>
        <a href="">Каталог</a>
        <a href="">Услуги</a>
        <a href="">О нас</a>
        <a href="">Блог</a>
        <a href="">Контакты</a>
      </div>
      <div className="header_other">
      <div className="header_lang">
        <h1>Eng</h1>
      </div>
      <div className="header_search">
        <img src={search} alt="" />
      </div>
      <div onClick={burger} className="header_burger">
        <div className="line line_1"></div>
        <div className="line line_2"></div>
        <div className="line line_3"></div>
      </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Header