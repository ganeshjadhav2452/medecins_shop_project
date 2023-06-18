import React from "react";
import CartQuantity from "./CartQuantity";

function CartItem(props) {
   console.log(props)
  return (
    <div className="d-flex justify-content-around align-item-center m-3 border-bottom ">
      <span>{props.name}</span>
      <span>{props.description}</span>
      <span>{props.price} Rs.</span>
     <CartQuantity />
    
    </div>
  );
}

export default CartItem;
