import React from 'react'
import './OrderButton.css'
function OrderButton(props) {
   
  return (
    <button  className='btn w-25 bg-danger  border border-dark orderButton text-light d-flex justify-content-center center p-1 rounded'>Place Order</button>
  )
}

export default OrderButton