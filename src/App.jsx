import React, { useState } from "react";
import CryptoList from "./components/CryptoList";
import initialCryptocurrencies from "./data";

function App() {
  const [cryptocurrencies, updateCryptocurrencies] = useState(
    initialCryptocurrencies
  );

  return (
    <div className="h-full p-4 bg-slate-200">
      <CryptoList
        cryptocurrencies={cryptocurrencies}
        updateCryptocurrencies={updateCryptocurrencies}
      />
    </div>
  );
}

export default App;
