import React, {useState} from "react";
import './CurrenciesExchanges.css'
import checkValue from '../../utils/checkInputValue';

export const CurrenciesExchanges = ({ currenciesData }) => {

    const [activeCurrencyFirst, setActiveCurrencyFirst] = useState(currenciesData[0].rate);
    const [activeCurrencySecond, setActiveCurrencySecond] = useState(currenciesData[0].rate);


    let [config, setConfig] = useState({
        inputCurrencyFirst: "",
        inputCurrencySecond: "",
        activeCurrencyFirst: activeCurrencyFirst,
        activeCurrencySecond: activeCurrencySecond
    });

    function handleInputCurrencyFirst(event) {
        const checkedValue = checkValue(event.target.value)
        setConfig(calculateCurrencies({ inputCurrencyFirst: checkedValue, activeCurrencyFirst, activeCurrencySecond}))
    }

    function handleInputCurrencySecond(event) {
        const checkedValue = checkValue(event.target.value)
        setConfig(calculateCurrencies({ inputCurrencySecond: checkedValue, activeCurrencyFirst, activeCurrencySecond}))
    }

    function calculateCurrencies({
        inputCurrencyFirst = '',
        inputCurrencySecond = "",
        activeCurrencyFirst,
        activeCurrencySecond
    }) {
        let newInputCurrencyFirst = ''
        let newInputCurrencySecond = ''

        if (inputCurrencyFirst > 0) {
            newInputCurrencyFirst = inputCurrencyFirst 
            newInputCurrencySecond = newInputCurrencyFirst * activeCurrencyFirst / activeCurrencySecond
        }
        if (inputCurrencySecond > 0) {
            newInputCurrencySecond = inputCurrencySecond 
            newInputCurrencyFirst = newInputCurrencySecond * activeCurrencySecond / activeCurrencyFirst
        }

        return {newInputCurrencyFirst, newInputCurrencySecond}
    }




    //const uah = { cc: "UAH", r030: 980, rate: 1, txt: "Українська гривня" };
    
    console.log(currenciesData);

    const currenciesOptions = currenciesData.map((currency) => (
            <option key={currency.r030} value={currency.rate}>{currency.cc + " " + currency.txt}</option>
    ))

    return (
        <div className="converter_wrapper">
            <div className="converter_block">
                <input
                    className="input_view"
                    type="text"
                    value={config.newInputCurrencyFirst || ""}
                    onChange={handleInputCurrencyFirst} 
                />
                <select
                    className="converter_select"
                    onChange={e => {
                        setActiveCurrencyFirst(e.target.value)
                }}>
                    {currenciesOptions}
                </select>
            </div>
            <div className="converter_block">
                <input
                    className="input_view"
                    type="text"
                    value={config.newInputCurrencySecond || ""}
                    onChange={handleInputCurrencySecond} 
                />
                <select
                    className="converter_select"
                    onChange={e => {
                        setActiveCurrencySecond(e.target.value)
                        
                }}>
                    {currenciesOptions}
                </select>
            </div>
        </div>
    )
}