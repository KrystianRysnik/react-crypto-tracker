import React, { useState } from "react";
import PropTypes from "prop-types";
import { Combobox } from "@headlessui/react";
import { searchQuery } from "../../api/coingeckoApi";

const defaultCrypto = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC"
  }
];

function Autocomplete({ id, label }) {
  const [selectedCrypto, setSelectedCrypto] = useState();
  const [filteredCrypto, setFilteredCrypto] = useState(defaultCrypto);

  const setQuery = async (query) => {
    if (query.length < 3) return;

    const resp = await searchQuery(query);
    setFilteredCrypto(resp);
  };

  return (
    <label htmlFor={id}>
      {label}:
      <Combobox
        name={id}
        id={id}
        value={selectedCrypto}
        onChange={setSelectedCrypto}
      >
        <div className="relative inline">
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(crypto) =>
              crypto ? `${crypto.symbol} - ${crypto.name}` : ""
            }
            className="border-[1px] border-slate-400 rounded-md"
          />
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {(filteredCrypto || defaultCrypto).map((crypto) => {
              return (
                <Combobox.Option key={crypto.id} value={crypto}>
                  {crypto.symbol} - {crypto.name}
                </Combobox.Option>
              );
            })}
          </Combobox.Options>
        </div>
      </Combobox>
    </label>
  );
}

Autocomplete.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Autocomplete;
