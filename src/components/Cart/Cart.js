import React, { useState, useContext } from "react";
import "./Cart.css";
import cartImg from "../../assets/add-cart.png";
import CartBody from "./CartBody";

function Cart() {
  const [cartOpen, setCartOpen] = useState(false);

  const CartClickHandler = () => {
    if (cartOpen == false) {
      setCartOpen(true);
    } else {
      setCartOpen(false);
    }
  };

  return (
    <div
      className="container cart bg-light rounded border border-info"
      onClick={CartClickHandler}
    >
      <div className="row">
        <div className="col-10">
          <img className="img" src={cartImg} />

          {!cartOpen ? null : <CartBody onCartBody={setCartOpen}/>}
        </div>
      </div>
    </div>
  );
}

export default Cart;
