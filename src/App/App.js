import React, { useState } from "react";
import { useCurrenciesData } from "./hooks/useCurrenciesData";
import { Header } from "./components/Header/Header";
import { Loader } from "./components/Loader/Loader";
import { CurrenciesExchanges } from "./components/CurrenciesExchanges/CurrenciesExchanges";
import "./App.css";

function App() {
  const [currencies, setCurrensies] = useState();

  const onSuccess = (data) => {
    function SortArray(x, y) {
      return x.txt.localeCompare(y.txt);
    }

    data.sort(SortArray);

    const UAH = { cc: "UAH", r030: 980, rate: 1, txt: "Українська гривня" };
    data.unshift(UAH);

    setCurrensies(data);
  };

  const onError = (error) => {
    console.log("Error", error);
  };

  const { isLoading, isError, error, isFetching } = useCurrenciesData(
    onSuccess,
    onError
  );

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="App">
      <Header currenciesData={currencies} />
      <main className="Apps_components">
        {isLoading || isFetching || !currencies ? (
          <Loader />
        ) : (
          <CurrenciesExchanges currenciesData={currencies} />
        )}
      </main>
    </div>
  );
}

export default App;
