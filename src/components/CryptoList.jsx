import React from "react";
import PropTypes from "prop-types";
import CryptoItem from "./CryptoItem";
import NewCrypto from "./NewCrypto";

function CryptoList({ cryptocurrencies, updateCryptocurrencies }) {
  return (
    <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {(cryptocurrencies || []).map((crypto) => (
        <CryptoItem crypto={crypto} key={crypto.id} />
      ))}
      <NewCrypto
        addCrypto={(cryptocurrency) =>
          updateCryptocurrencies([...cryptocurrencies, cryptocurrency])
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
  updateCryptocurrencies: PropTypes.func
};

CryptoList.defaultProps = {
  cryptocurrencies: [],
  updateCryptocurrencies: () => {}
};

export default CryptoList;
