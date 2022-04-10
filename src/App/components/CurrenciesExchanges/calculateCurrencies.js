export default function calculateCurrencies({
  inputCurrencyFirst = "",
  inputCurrencySecond = "",
  activeCurrencyFirst,
  activeCurrencySecond,
}) {
  let newInputCurrencyFirst = "";
  let newInputCurrencySecond = "";

  if (inputCurrencyFirst > 0) {
    newInputCurrencyFirst = inputCurrencyFirst;
    newInputCurrencySecond =
      (newInputCurrencyFirst * activeCurrencyFirst) / activeCurrencySecond;
  }
  if (inputCurrencySecond > 0) {
    newInputCurrencySecond = inputCurrencySecond;
    newInputCurrencyFirst =
      (newInputCurrencySecond * activeCurrencySecond) / activeCurrencyFirst;
  }

  return { newInputCurrencyFirst, newInputCurrencySecond };
}
