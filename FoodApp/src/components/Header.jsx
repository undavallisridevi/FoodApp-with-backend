import React from 'react'
import logoImg from '../assets/logo.jpg'
import Button from '../UI/Button'

const Header = () => {
  return (
    <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="restaurant"/>
            <h1>Restaurant</h1>
        </div>
        <nav>
            <Button textOnly>Cart (0)</Button></nav>
    </header>
      
    
  )
}

export default Header
