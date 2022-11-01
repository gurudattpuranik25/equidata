import React, { useState } from "react";
import "./Crypto.css";

// https://cdn.dribbble.com/users/124059/screenshots/4638407/shot.gif

// https://cdn.dribbble.com/users/107759/screenshots/5079225/crypto1.gif

function Crypto() {
  const [cryptoInput, setCryptoInput] = useState("");

  const [cryptoData, setCryptoData] = useState([]);

  const cryptoApi =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  useState(() => {
    const getCryptoData = async () => {
      const response = await fetch(cryptoApi);
      const data = await response.json();
      data;
      setCryptoData(data);
    };

    getCryptoData();
  });

  return (
    <div className="crypto">
      <div className="cryptoHero">
        <h1>
          <span>Cryptogeek??</span> We've got you!
        </h1>
        <div>
          <img
            className="imageOne"
            src="https://media4.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif"
            alt=""
          />
          <img
            className="imageTwo"
            src="https://media3.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif"
            alt=""
          />
        </div>
        {/* <i className="fa-solid fa-arrow-down-long"></i> */}
      </div>
      <div className="cryptoList">
        <div className="inputSection">
          <label>Search your favorite coins here 💰💰</label>
          <input
            type="text"
            placeholder="Bitcoin, Ethereum, Solana"
            value={cryptoInput}
            onChange={(e) => setCryptoInput(e.target.value)}
          />
        </div>
        <div className="cryptoGrid">
          {cryptoData &&
            cryptoData
              .filter((value) => {
                if (cryptoInput === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(cryptoInput.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((item, index) => {
                return (
                  <div key={index} className="cryptoDetails">
                    <div className="cryptoHeader">
                      <img src={item.image} alt="Coin image" />
                      <p className="cryptoName">
                        {item.name} ({item.symbol.toUpperCase()})
                      </p>
                    </div>

                    <div className="cryptoMetrics">
                      <div className="currentPrice">
                        <p className="label">Current Price</p>
                        <p>{item.current_price.toFixed(2)} USD</p>
                      </div>
                      <div className="marketCap">
                        <p className="label">Market Cap</p>
                        <p>{(item.market_cap / 1000000000).toFixed(2)}B USD</p>
                      </div>
                      <div className="marketCapRank">
                        <p className="label">Market Cap Rank</p>
                        <p>{item.market_cap_rank}</p>
                      </div>
                      <div className="totalVolume">
                        <p className="label">Total Volume</p>
                        <p>{(item.total_volume / 1000000).toFixed(2)}M </p>
                      </div>
                      <div className="ath">
                        <p className="label">All Time High</p>
                        <p>{item.ath} USD </p>
                      </div>
                      <div className="24high">
                        <p className="label">24H High</p>
                        <p>{item["high_24h"]} USD </p>
                      </div>
                      <div className="24low">
                        <p className="label">24H Low</p>
                        <p>{item["low_24h"]} USD </p>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Crypto;
