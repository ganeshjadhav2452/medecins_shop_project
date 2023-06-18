import React, { useContext } from "react";
import NewItem from "./NewItem";
import FormDataContext from "../../contexts/FormDataContext/FormDataContext";

function ItemContainer() {
  let { formdata } = useContext(FormDataContext);

  let medicineName = [];

 
  return (
    <div className="container mt-5 rounded border border-info h-100 w-100 p-0">
      <div className="d-flex justify-content-around   border-bottom bg-light border-dark rounded border-2 fw-bold">
        <span>Item</span> <span>description</span> <span>Amount</span><span>Quantity</span>
        <span>Action</span>
      </div>

      {formdata.length == 0 ? (
        <p className="bg-danger d-flex justify-content-around fw-bold rounded mt-3 text-light">
          sorry you dont have any medicine avilable !
        </p>
      ) : (
        formdata.map((med) => {
          {
            if (med.name.trim() === "") {
              return (
                <p className="bg-danger d-flex justify-content-around fw-bold rounded mt-3 text-light">
                  sorry medicine name is empty !
                </p>
              );
            }

           else if (medicineName.includes(med.name)) {
              return (
                <p className="bg-danger d-flex justify-content-around fw-bold rounded mt-3 text-light">
                  sorry this medicine  is already avilable in inventory!
                </p>
              );
            }else{
                medicineName.push(med.name)
            }
          }

          {
          }
          return (
            <NewItem
              name={med.name}
              description={med.description}
              price={med.price}
              quantity={med.quantity}
            />
          );
        })
      )}
    </div>
  );
}

export default ItemContainer;
