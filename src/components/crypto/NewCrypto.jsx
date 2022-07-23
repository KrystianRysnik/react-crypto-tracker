import React from "react";
import PropTypes from "prop-types";
import Autocomplete from "../input/Autocomplete";
import Input from "../input/Input";
import { fetchDetails } from "../../api/coingeckoApi";

function NewCrypto({ addCrypto }) {
  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const coinDetails = await fetchDetails(formData.get("coin[id]"));
    const prices = coinDetails[formData.get("coin[id]")];

    addCrypto({
      id: formData.get("coin[id]"),
      name: formData.get("coin[name]"),
      symbol: formData.get("coin[symbol]"),
      quantity: parseFloat(formData.get("quantity")),
      prices
    });

    e.target.reset();
  };

  return (
    <li className="p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleAdd}>
        <div className="mb-3">
          <Autocomplete id="coin" label="Cryptocurrency" />
        </div>
        <div className="mb-3">
          <Input id="quantity" label="Quantity" type="number" />
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
