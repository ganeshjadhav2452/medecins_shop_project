import React , {useState}from 'react'
import './CartQuantity.css'

function CartQuantity() {
    const [count, setCount] = useState(0);

    const increatement = ()=>{

        setCount(count+1)
    }
    const decreament =()=>{
        if(count>0){
            setCount(count-1)
        }
       
    }
  return (
    <span className='btn mySpan'>
        <button onClick={decreament} className='btn myBtn'>-</button>
        <input type='number' value={count} readOnly className='countInput no-spinners'/>
        <button onClick={increatement} className='btn myBtn'>+</button>
    </span>
  )
}

export default CartQuantity;