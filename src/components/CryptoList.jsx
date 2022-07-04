import React from "react";
import PropTypes from "prop-types";
import CryptoItem from "./CryptoItem";
import NewCrypto from "./NewCrypto";

function CryptoList({ cryptocurrencies, dispatchCryptocurrencies }) {
  return (
    <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      price: PropTypes.number
    })
  ),
  dispatchCryptocurrencies: PropTypes.func
};

CryptoList.defaultProps = {
  cryptocurrencies: [],
  dispatchCryptocurrencies: () => {}
};

export default CryptoList;
