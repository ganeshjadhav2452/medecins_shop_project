import React, { useState, useContext } from "react";
import "./CartBody.css";
import CartItem from "./CartItem";
import CartContext from "../../contexts/CartContext/CartContext";
import OrderButton from "./OrderButton";

function CartBody(props) {
  


  let { cartValue } = useContext(CartContext);



  let cartMedicine = new Map();

  const cartBodyClickHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={cartBodyClickHandler}
      className=" bg-light  border border-dark border-2 p-2 cartItem "
    >
      <div className="d-flex justify-content-around   border-bottom bg-light border-dark rounded border-2 fw-bold">
        <span>Item</span> <span>description</span> <span>Amount</span>
        <span>Quantity</span>
      </div>

      {cartValue.length == 0 ? (
        <p className="bg-danger d-flex justify-content-around fw-bold rounded mt-3 text-light">
          sorry you dont have any medicine added please add some !
        </p>
      ) : (
        cartValue.map((med) => {
            if(cartMedicine.has(med.name)){
                cartMedicine.set(med.name,cartMedicine.get(med.name)+1)
            
            
                console.log(cartMedicine.get(med.name))
                return null
            }else{
                cartMedicine.set(med.name,1)
            }

            
          return (
            <CartItem
              name={med.name}
              description={med.description}
              price={med.price}
              quantity={med.quantity}
            />
          );
        })
      )}
      <OrderButton cartMedicine={cartMedicine}/>
    </div>
  );
}

export default CartBody;
