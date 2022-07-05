import React, { useEffect, useReducer } from "react";
import CryptoList from "./components/CryptoList";
import cryptocurrencyReducer from "./reducers/cryptocurrencyReducer";

function App() {
  const [cryptocurrencies, dispatchCryptocurrencies] = useReducer(
    cryptocurrencyReducer,
    JSON.parse(localStorage.getItem("cryptocurrencies")) || []
  );

  useEffect(() => {
    const json = JSON.stringify(cryptocurrencies);
    localStorage.setItem("cryptocurrencies", json);
  });

  return (
    <div className="h-full p-4 bg-slate-200">
      <CryptoList
        cryptocurrencies={cryptocurrencies}
        dispatchCryptocurrencies={dispatchCryptocurrencies}
      />
    </div>
  );
}

export default App;
