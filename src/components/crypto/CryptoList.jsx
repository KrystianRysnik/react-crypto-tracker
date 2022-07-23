import React from "react";
import PropTypes from "prop-types";
import CryptoItem from "./CryptoItem";
import NewCrypto from "./NewCrypto";
import formatCurrency from "../../utils/formatCurrency";

function CryptoList({ cryptocurrencies, dispatchCryptocurrencies }) {
  const sum = (cryptocurrencies || []).reduce((prev, next, index) => {
    if (index === 1) {
      return prev.prices.pln * prev.quantity + next.prices.pln * next.quantity;
    }
    return prev + next.prices.pln * next.quantity;
  });

  return (
    <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <li className="p-4 bg-white rounded-lg shadow-md relative">
        <h3 className="font-medium">Sum</h3>
        <p className="text-sm">{formatCurrency(sum, "USD")}</p>
      </li>
      {(cryptocurrencies || []).map((cryptocurrency) => (
        <CryptoItem
          cryptocurrency={cryptocurrency}
          key={cryptocurrency.id}
          removeCrypto={() =>
            dispatchCryptocurrencies({
              type: "remove",
              payload: cryptocurrency.id
            })
          }
        />
      ))}
      <NewCrypto
        addCrypto={(cryptocurrency) =>
          dispatchCryptocurrencies({ type: "add", payload: cryptocurrency })
        }
      />
    </ul>
  );
}

CryptoList.propTypes = {
  cryptocurrencies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      quantity: PropTypes.number,
      prices: PropTypes.shape({
        usd: PropTypes.number,
        eur: PropTypes.number,
        pln: PropTypes.number
      })
    })
  ),
  dispatchCryptocurrencies: PropTypes.func
};

CryptoList.defaultProps = {
  cryptocurrencies: [],
  dispatchCryptocurrencies: () => {}
};

export default CryptoList;
