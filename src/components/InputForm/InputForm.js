import React, { useContext, useState } from "react";
import FormDataContext from "../../contexts/FormDataContext/FormDataContext";


function InputForm() {
    const myContext = useContext(FormDataContext);
   
  const [updatedValue, updateTheValue] = useState({
    name: "",
    description: "",
    price: "",
    quantity:''
  });

  const enteredName = (e) => {
    updateTheValue({
      ...updatedValue,
      name: e.target.value,
    });
  };
  const enteredDescription = (e) => {
    updateTheValue({
      ...updatedValue,
      description: e.target.value,
    });
  };
  const enteredPrice = (e) => {
    updateTheValue({
      ...updatedValue,
      price: e.target.value,
    });
  };

  const enteredQuantity = (e)=>{
    updateTheValue({
      ...updatedValue,
      quantity:e.target.value
    })
  }

  const allInputes = (e) => {
    e.preventDefault()

    let updatedInputes = {
      name: updatedValue.name,
      description: updatedValue.description,
      price: updatedValue.price,
      quantity:updatedValue.quantity,
    };

    myContext.updateMedicineData(updatedInputes);

    updateTheValue({
      name:'',
      description:'',
      price:'',
      quantity:''
    })
  };

  return (
    <div className="container bg-light border border-info p-5 rounded mt-3 ">
      <form onSubmit={allInputes}>
        <div className="row">
          <div className="col ">
            <input
              type="text"
              className="form-control input1"
              placeholder="Medicine Name"
              onChange={enteredName}
              value={updatedValue.name}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control input2"
              placeholder="Medicine description"
              onChange={enteredDescription}
              value={updatedValue.description}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control input3"
              placeholder="Medicine price"
              onChange={enteredPrice}
              value={updatedValue.price}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control input3"
              placeholder="Medicine Quantity"
              onChange={enteredQuantity}
              value={updatedValue.quantity}
            />
          </div>
        </div>
        <div className="col-12 d-flex justify-content-around mt-4 ">
          <button
            type="submit"
            className="col-6 rounded-pill btn btn-primary fs-4 submitBtn"
          >
            Add Medicine
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
