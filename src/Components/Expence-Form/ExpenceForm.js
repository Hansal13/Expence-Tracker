import React from "react";
import { useState } from "react";
import Expence from "../Expence/Expence";
import "../Expence-Form/ExpenceForm.css";

export default function ExpenceForm() {
  const [formData, setFormData] = useState({
    item: "",
    price: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  // Submit Data By Object
  const [data, newData] = useState([]);
  const submitHandler = (event) => {
    event.preventDefault();
    let expenceData = {
      title: formData.item,
      price: formData.price,
    };
    console.log(expenceData);
    const updateData = [...data, expenceData];
    newData(updateData);
    setFormData({
      item: "",
      price: "",
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="expence-form">
          <div className="expence-item">
            <label htmlFor="item"> Items </label>
            <input
              type="text"
              name="item"
              id=""
              value={formData.item}
              placeholder="Enter Item"
              onChange={handleInput}
            />
          </div>
          <div className="expence-price">
            <label htmlFor="item"> Expence Price </label>
            <input
              type="text"
              name="price"
              id=""
              value={formData.price}
              placeholder="Enter Item"
              onChange={handleInput}
            />
          </div>
          <div className="add-button">
            <button type="submit" className="btn btn-dark">
              Add Expence
            </button>
          </div>
        </div>
      </form>
      <div>
        <Expence data={data} event={submitHandler} />
      </div>
    </>
  );
}
