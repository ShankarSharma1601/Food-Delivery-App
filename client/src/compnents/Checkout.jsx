import React from 'react'
import { Button} from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch} from 'react-redux'
import {placeOrder} from '../actions/orderAction'
const Checkout = ({subTotal}) => {
    const dispatch = useDispatch()
    const tokenHandler = (token) =>{
       dispatch(placeOrder(token, subTotal))
    }
  return (
    <StripeCheckout 
    amount = {subTotal*100}
    shippingAddress
    token={tokenHandler}
    stripeKey="pk_test_51HT3awLRpPHpN9zVZksDRZ16m6HANATIi914WwDG7xbmNKQGsMyXEBTuUxlNZlkZ3EYFsfu5t0NQDeNQYbukyICZ000lVzvD9Y"
    //stripeKey="pk_test_dcougdluycvldycvduxbdiucvdyuadaeqtwyeueiodoplxnbzzvczfsgv"
    currency="INR">
        <Button>Pay Now</Button>
    </StripeCheckout>
  )
}

export default Checkout;