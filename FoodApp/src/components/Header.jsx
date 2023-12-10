import React, { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from '../UI/Button'
import CartContext from '../store/CartContext'
import { UserProgressContext} from '../store/UserProgressContext'

const Header = () => {
  const cartctx=useContext(CartContext);
  const userProgressCtx=useContext(UserProgressContext);
 const totalCartItems=cartctx.items.reduce((totalNumberOfItems,item)=>totalNumberOfItems+item.quantity,0);
 return (
    <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="restaurant"/>
            <h1>Restaurant</h1>
        </div>
        <nav>
            <Button textOnly onClick={()=>userProgressCtx.showCart()}>Cart ({totalCartItems})</Button></nav>
    </header>
      
    
  )
}

export default Header
