import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import {currencyFormatter} from '../util/formattingprice.js'
import Button from '../UI/Button.jsx'
import { UserProgressContext } from '../store/UserProgressContext.jsx'
import CartContext from '../store/CartContext.jsx'
import CartItem from './CartItem.jsx'
const Cart = () => {
    const cartCtx=useContext(CartContext);
    const cartTotal=cartCtx.items.reduce((totalPrice,item)=>totalPrice+item.quantity*item.price,0);
    const userProgressCtx=useContext(UserProgressContext);
 function handleCloseCart(){
    userProgressCtx.hideCart();
 }
    return (
   <Modal className='cart' open={userProgressCtx.progress==='cart'}>
<h2>Your Cart</h2>
<ul>
    {cartCtx.items.map(item=><CartItem key={item.id} {...item} onIncrease={()=>cartCtx.addItem(item)} onDecrease={()=>cartCtx.removeItem(item.id)}/>)}
</ul>
<p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
   <p className='modal-actions'>
    <Button textOnly onClick={handleCloseCart}>Close</Button>
   {cartCtx.items.length >0 && <Button onClick={handleCloseCart}>Go To Checkout</Button>}
   </p>
   </Modal>
  )
}

export default Cart