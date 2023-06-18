import CartContext from "./CartContext";
import React,{ useState} from "react";


const CartContextProvider = (props)=>{
   const [cartValue,setCartValue] = useState([])

   const updateCartValue =(newData)=>{
    setCartValue((prevData)=>{
        return [...prevData,newData]
    })
   }
    return(
        <CartContext.Provider value={{cartValue,updateCartValue}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;