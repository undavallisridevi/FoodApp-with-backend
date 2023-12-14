import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import {currencyFormatter} from '../util/formattingprice.js'
import CartContext from '../store/CartContext';
import Input from '../UI/Input.jsx';
import Button from '../UI/Button.jsx';
import { UserProgressContext } from '../store/UserProgressContext.jsx'
const Checkout = () => {
  const cartCtx=useContext(CartContext);
  const cartTotal=cartCtx.items.reduce((totalPrice,item)=>totalPrice+item.quantity*item.price,0);
  const userProgressCtx=useContext(UserProgressContext);
  function handleClose()
  {
    userProgressCtx.hideCheckout();
  }
  return (
   <Modal open={userProgressCtx.progress==='checkout'} onClose={handleClose}>
<form>
  <h2>Checkout</h2>
  <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
  <Input label='Full Name' type='text' id="full-name"/>
  <Input label='E-Mail Address' type='email' id="email"/>
  <Input label='Street' type='text' id="street"/>
  <div className='control-row'>
  <Input label='Postal Code' type='text' id="postal-code"/>
  <Input label='City' type='text' id="city"/>
  </div>
  <p className='modal-actions'>
<Button type="button" textOnly onClick={handleClose}>Close</Button>
<Button>Submit Order</Button>
  </p>
</form>
   </Modal>
  )
}

export default Checkout
