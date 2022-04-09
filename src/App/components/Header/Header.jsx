import React from "react";
import "./Header.css";

export const Header = (props) => {
    const { currenciesData } = props;
    if (!currenciesData) return;

    const euro = currenciesData.find(item => (item.cc === 'EUR'));
    const usd = currenciesData.find(item => (item.cc === 'USD'));
    
    return (
    <header className="App-header">
        <h4>CURRENCIES EXCHANGES</h4>
            <ul className="currency_info">
                <li>
                    <span>USD:</span>
                    <span>{usd.rate}</span>
                </li>
                <li>
                    <span>EUR:</span>
                    <span>{euro.rate}</span>
                </li>     
            </ul>
    </header>
    )
}