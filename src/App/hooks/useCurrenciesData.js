import { useQuery } from "react-query";
import axios from "axios";

const fetchCurrenciesData = () => {
  return axios.get(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json"
  );
};

export const useCurrenciesData = (onSuccess, onError) => {
  return useQuery("currencies", fetchCurrenciesData, {
    onSuccess,
    onError,
    select: (data) => {
      return data.data;
    },
  });
};
