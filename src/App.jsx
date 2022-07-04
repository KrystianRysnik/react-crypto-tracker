import React, { useReducer } from "react";
import CryptoList from "./components/CryptoList";
import initialStatecryptocurrencies from "./data";
import cryptocurrencyReducer from "./reducers/cryptocurrencyReducer";

function App() {
  const [cryptocurrencies, dispatchCryptocurrencies] = useReducer(cryptocurrencyReducer, initialStatecryptocurrencies);

  return (
    <div className="h-full p-4 bg-slate-200">
      <CryptoList cryptocurrencies={cryptocurrencies} dispatchCryptocurrencies={dispatchCryptocurrencies} />
    </div>
  );
}

export default App;
