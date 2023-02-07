import React from "react";
import '../stylesheets/Coin.css'

function Coin ({ name, ticker,id,  dataFromParent, bitcoinAmount}) {


  let coinData =0
  let btcPrice=0
  try{
    dataFromParent.forEach(row => {
      if (row.symbol === 'BTCUSDT'){
        btcPrice=row.price;
      }
      if (row.symbol === ticker){
        coinData=row.price;
      }
      });
  }
  catch (e) {
  }

  return(
    <div className="coin-style h-40">
      <div className="container h-40">
        <div className="card-body border rounded row">
          <h5 className="col text-center card-title">{name}</h5>
          <div className="col coin-value">
            {ticker==='BUSDUSDT' ? "$" +(btcPrice*bitcoinAmount/coinData).toFixed(2) : (btcPrice*bitcoinAmount/coinData).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coin;