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
      <p className="mb-1">{label}:</p>
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
            className="border-[1px] border-slate-400 rounded-md px-3 h-[38px] w-full"
          />
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border-[1px] border-slate-400 bg-white shadow-lg">
            {(filteredCrypto || defaultCrypto).map((crypto) => {
              return (
                <Combobox.Option
                  key={crypto.id}
                  value={crypto}
                  className="px-3 py-1 text-sm"
                >
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