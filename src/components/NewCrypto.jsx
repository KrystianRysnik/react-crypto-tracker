import React from "react";
import PropTypes from "prop-types";

function NewCrypto({ addCrypto }) {
  const handleAdd = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    addCrypto({
      id: formData.get("id"),
      name: formData.get("name"),
      quantity: formData.get("quantity"),
      price: formData.get("price")
    });
    e.target.reset();
  };

  return (
    <li className="p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleAdd}>
        <div className="mb-4">
          <label htmlFor="id">
            Id:
            <input
              type="id"
              name="id"
              id="id"
              className="border-[1px] border-slate-400 rounded-md"
            />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="id">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              className="border-[1px] border-slate-400 rounded-md"
            />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="quantity">
            Quantity:
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="border-[1px] border-slate-400 rounded-md"
            />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="price">
            Price:
            <input
              type="number"
              step="0.01"
              name="price"
              id="price"
              className="border-[1px] border-slate-400 rounded-md"
            />
          </label>
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
