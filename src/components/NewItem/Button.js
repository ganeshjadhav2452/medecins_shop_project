import React,{useContext,useState} from 'react'

import CartContext from '../../contexts/CartContext/CartContext'

function Button(props) {
  const CartContextData = useContext(CartContext)
  const [cartItemQuantity,setCartItemQuantity] = useState(1)

    const AddClickHandler=()=>{
      setCartItemQuantity((prev)=>{
        return prev+1;
      })

      let CartData = {
        name:props.name,
        description:props.description,
        price:props.price,
        quantity:cartItemQuantity
      }
      CartContextData.updateCartValue(CartData)
     
    }

  return (
    <button className='btn  btn-success rounded'  onClick={AddClickHandler}  >Add</button>
  )
}

export default Button