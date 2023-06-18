import FormDataContext from "./FormDataContext";
import React, { useState } from "react";

const MainFormDataContext = (props) => {
  // let medicineData = {
  //     name:'Panderm+',
  //     description:'used to solve eaching and fungus'
  // }

  const [formdata, setFormData] = useState([]);
  console.log(formdata)
  let updateMedicineData = (updatedData) => {
    setFormData((prevData) => {
        return [...prevData,updatedData]
    });
  };

  return (
    <FormDataContext.Provider value={{formdata,updateMedicineData}}>
      {props.children}
    </FormDataContext.Provider>
  );
};
export default MainFormDataContext;
