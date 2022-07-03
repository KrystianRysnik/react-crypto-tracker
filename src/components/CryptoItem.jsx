import React from "react";
import PropTypes from "prop-types";

function CryptoItem({ crypto }) {
  return (
    <li className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="font-medium">{crypto.name}</h3>
      <p className="text-xl">
        {crypto.quantity} <small className="uppercase">{crypto.id}</small>
      </p>

      <p className="text-sm">{crypto.price * crypto.quantity}$</p>
    </li>
  );
}

CryptoItem.propTypes = {
  crypto: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number
    })
  ).isRequired
};

export default CryptoItem;
