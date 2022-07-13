import React from "react";
import PropTypes from "prop-types";
import { XIcon } from "@heroicons/react/solid";

function CryptoItem({ cryptocurrency, removeCrypto }) {
  const { name, quantity, price, symbol } = cryptocurrency;

  return (
    <li className="p-4 bg-white rounded-lg shadow-md relative">
      <h3 className="font-medium">{name}</h3>
      <p className="text-xl">
        {quantity} <small className="uppercase">{symbol}</small>
      </p>

      <p className="text-sm">{(price * quantity).toFixed(2)}$</p>

      <button
        className="w-[42px] h-[42px] absolute top-0 right-0 text-slate-500 hover:text-slate-800"
        type="button"
        onClick={() => removeCrypto()}
      >
        <XIcon className="w-[20px] mx-auto " />
      </button>
    </li>
  );
}

CryptoItem.propTypes = {
  cryptocurrency: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number
  }).isRequired,
  removeCrypto: PropTypes.func.isRequired
};

export default CryptoItem;
