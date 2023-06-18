import React from 'react'
import Button from './Button'

function NewItem(props) {
  return (
    <div className='d-flex justify-content-around bg-light  border border-light border-2 p-2' >
    <span>{props.name}</span>
    <span>{props.description}</span>
    <span>{props.price} Rs.</span>
    <span>{props.quantity} </span>
    <Button name={props.name} description={props.description} price={props.price}/>
     </div>
  )
}

export default NewItem