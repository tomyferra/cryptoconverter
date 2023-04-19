import React from "react";
import { useState } from "react";
import '../stylesheets/Converter.css';
import {Coins} from './CoinsData';
import Coin from '../components/Coin';



function Converter () {

  const [values, setValues] = useState(0);
  const [price, setPrice] = useState();
  const [loading, setLoading] = useState(true);

  function handleClick (evt) {
    evt.preventDefault();
    const value = evt.target.value;

    setValues({
      ...values,
      [evt.target.id]: value});

    //get all tickers from the list of Coins and create a new URL to query once and get all the values at the same time.
    let url = 'https://www.binance.me/api/v3/ticker/price?symbols=[%22BTCUSDT%22,%22'
    Coins.forEach(coin => {
      url=String(url + coin.ticker + '%22,%22');
      });
    url=url.slice(0,-4)
    url=url.concat(']')
    console.log(url);

    //perform the API call
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPrice(data);
        setLoading(false);  
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleChange (evt) {
    evt.preventDefault();
    const value=evt.target.value;

    if (values<0){
      alert("!Not negative numbers!");
    }

    setValues({
      ...values,
      [evt.target.id]: value});
  }
 
  return(
    <div className="container-fluid converter-container text-center" id="CryptoApp">
      <div className="row bitcoin-amount">
        <div className="container">
          <label htmlFor="bitcoinamount"><h2>Bitcoin <i className="cf cf-btc"></i></h2></label>
          <p>Enter the Bitcoin value you want to convert. The app will display the converted value expressed in multiple currencies based on the current exchange rate</p>
          <input type="number" min="0" className="form-control container w-50" id="bitcoinamount" placeholder="Bitcoin" onChange={handleChange} />
          <button onClick={handleClick} type="button" className="btn btn-primary">Get Updated values!</button>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="row coins-value">
            {Coins.map( (coin) => (
                <div className="col col-sm-4 coins-style">
                  <Coin name={coin.name} id={coin.id} ticker={coin.ticker} dataFromParent={price} bitcoinAmount={values.bitcoinamount} icon={coin.icon}/>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="row description-converter">
        <h3>Exchange rate based on Binance public API</h3>
      </div>
    </div>
  );
}

export default Converter;