function cryptocurrencyReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((crypto) => crypto.id !== action.payload);
    default:
      throw new Error();
  }
}

export default cryptocurrencyReducer;
