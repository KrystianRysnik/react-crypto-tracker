import React from "react";
import { useSelector } from "react-redux";
import CryptoItem from "./CryptoItem";
import NewCrypto from "./NewCrypto";
import formatCurrency from "../../utils/formatCurrency";

function CryptoList() {
  const cryptocurrencies = useSelector((state) => state.cryptocurrency);
  const sum = (cryptocurrencies || []).reduce((prev, next, index) => {
    if (index === 1) {
      return prev.prices.usd * prev.quantity + next.prices.usd * next.quantity;
    }
    return prev + next.prices.usd * next.quantity;
  });

  return (
    <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <li className="p-4 bg-white rounded-lg shadow-md relative">
        <h3 className="font-medium">Sum</h3>
        <p className="text-sm">{formatCurrency(sum, "USD")}</p>
      </li>
      {(cryptocurrencies || []).map((cryptocurrency) => (
        <CryptoItem cryptocurrency={cryptocurrency} key={cryptocurrency.id} />
      ))}
      <NewCrypto />
    </ul>
  );
}

export default CryptoList;
