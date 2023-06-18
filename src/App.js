import React from "react";
import ReadyNewItem from "./components/NewItem/ReadyNewItem.js";
import CartContextProvider from "./contexts/CartContext/CartContextProvider.js";
import MainFormDataContext from "./contexts/FormDataContext/MainFormDataContext.js";
import Cart from "./components/Cart/Cart.js";


function App() {
  return (
    <MainFormDataContext>
      <CartContextProvider>
      
        <Cart />
        <ReadyNewItem />
       
      </CartContextProvider>
    </MainFormDataContext>
  );
}

export default App;
