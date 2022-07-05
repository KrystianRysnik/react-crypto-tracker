import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";

function NewCrypto({ addCrypto }) {
  const handleAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    addCrypto({
      id: formData.get("id"),
      name: formData.get("name"),
      quantity: parseFloat(formData.get("quantity")),
      price: parseFloat(formData.get("price"))
    });
    e.target.reset();
  };

  return (
    <li className="p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleAdd}>
        <div className="mb-4">
          <Input id="id" label="id" />
        </div>
        <div className="mb-4">
          <Input id="name" label="Name" />
        </div>
        <div className="mb-4">
          <Input id="quantity" label="Quantity" type="number" />
        </div>
        <div className="mb-4">
          <Input id="price" label="Price" type="number" />
        </div>
        <div>
          <button
            type="submit"
            className="block w-full py-2 px-1 bg-blue-600 rounded-md text-white"
          >
            Add
          </button>
        </div>
      </form>
    </li>
  );
}

NewCrypto.propTypes = {
  addCrypto: PropTypes.func.isRequired
};

export default NewCrypto;
