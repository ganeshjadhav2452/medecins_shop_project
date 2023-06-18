import React,{useContext} from 'react'
import InputForm from '../InputForm/InputForm'
import ItemContainer from './ItemContainer'


function ReadyNewItem() {

  return (
    <div>
        <InputForm />
        <ItemContainer />
    </div>
  )
}

export default ReadyNewItem