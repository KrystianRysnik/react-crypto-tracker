const formatCurrency = (value, currency) => {
  return Intl.NumberFormat(navigator.language ?? "en-US", {
    style: "currency",
    currency
  }).format(value);
};

export default formatCurrency;
