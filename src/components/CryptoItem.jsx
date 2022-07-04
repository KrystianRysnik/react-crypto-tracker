import React from "react";
import PropTypes from "prop-types";

function CryptoItem({ cryptocurrency, removeCrypto }) {
  const { name, quantity, price, id } = cryptocurrency;

  return (
    <li className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="font-medium">{name}</h3>
      <p className="text-xl">
        {quantity} <small className="uppercase">{id}</small>
      </p>

      <p className="text-sm">{price * quantity}$</p>

      <button
        className="block w-full mt-2 py-2 px-1 bg-red-500 rounded-md text-white"
        type="button"
        onClick={() => removeCrypto()}
      >
        Remove
      </button>
    </li>
  );
}

CryptoItem.propTypes = {
  cryptocurrency: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number
  }).isRequired,
  removeCrypto: PropTypes.func.isRequired
};

export default CryptoItem;
