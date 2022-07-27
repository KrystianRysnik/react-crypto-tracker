import React from "react";
import PropTypes from "prop-types";
import { XIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import formatCurrency from "../../utils/formatCurrency";
import { remove } from "../../features/cryptocurrency/cryptocurrenySlice";

function CryptoItem({ cryptocurrency }) {
  const dispatch = useDispatch();
  const { id, name, quantity, prices, symbol } = cryptocurrency;

  return (
    <li className="card">
      <h3 className="font-medium">{name}</h3>
      <p className="text-xl dark:text-stone-400">
        {quantity} <small className="uppercase">{symbol}</small>
      </p>

      <p className="text-sm dark:text-stone-400">
        {formatCurrency(prices.usd * quantity, "USD")}
      </p>

      <button
        className="close"
        type="button"
        onClick={() => dispatch(remove(id))}
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
    prices: PropTypes.shape({
      usd: PropTypes.number,
      eur: PropTypes.number,
      pln: PropTypes.number
    })
  }).isRequired
};

export default CryptoItem;
