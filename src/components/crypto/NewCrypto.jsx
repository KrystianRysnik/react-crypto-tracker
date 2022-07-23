import React from "react";
import { useDispatch } from "react-redux";
import Autocomplete from "../input/Autocomplete";
import Input from "../input/Input";
import { fetchDetails } from "../../api/coingeckoApi";
import { add } from "../../features/cryptocurrency/cryptocurrenySlice";

function NewCrypto() {
  const dispatch = useDispatch();

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const coinDetails = await fetchDetails(formData.get("coin[id]"));
    const prices = coinDetails[formData.get("coin[id]")];

    dispatch(
      add({
        id: formData.get("coin[id]"),
        name: formData.get("coin[name]"),
        symbol: formData.get("coin[symbol]"),
        quantity: parseFloat(formData.get("quantity")),
        prices
      })
    );

    e.target.reset();
  };

  return (
    <li className="p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleAdd}>
        <div className="mb-3">
          <Autocomplete id="coin" label="Cryptocurrency" />
        </div>
        <div className="mb-3">
          <Input id="quantity" label="Quantity" type="number" />
        </div>
        <div>
          <button
            type="submit"
            className="block w-full py-2 px-1 bg-blue-600 rounded-md text-white"
          >
            Add
          </button>
        </div>
      </form>
    </li>
  );
}

export default NewCrypto;
