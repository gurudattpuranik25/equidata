import React, { useState, useRef } from "react";
import { useEffect } from "react";
import "./Business.css";
import Chart from "./Chart";

function Business() {
  const ref = useRef(null);

  const [inputTicker, setInputTicker] = useState("");

  const [apiData, setApiData] = useState();
  const [dailyData, setDailyData] = useState(false);
  const [weeklyData, setWeeklyData] = useState(false);
  const [monthlyData, setMonthlyData] = useState(false);
  const [earnings, setEarnings] = useState(false);

  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${inputTicker}&apikey=DOPBA3OUQ0CRL1WD`;

  const dailyPriceData = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${inputTicker}&apikey=DOPBA3OUQ0CRL1WD`;

  const weeklyPriceData = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${inputTicker}&apikey=DOPBA3OUQ0CRL1WD`;

  const monthlyPriceData = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${inputTicker}&apikey=DOPBA3OUQ0CRL1WD`;

  const earningsData = `https://www.alphavantage.co/query?function=EARNINGS&symbol=${inputTicker}&apikey=DOPBA3OUQ0CRL1WD`;

  const getBusinessData = (e) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
    fetch(url)
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((err) => console.log(err));

    fetch(dailyPriceData)
      .then((response) => response.json())
      .then((data) => setDailyData(data["Time Series (Daily)"]))
      .catch((err) => console.log(err));

    fetch(weeklyPriceData)
      .then((response) => response.json())
      .then((data) => setWeeklyData(data["Weekly Adjusted Time Series"]))
      .catch((err) => console.log(err));

    fetch(monthlyPriceData)
      .then((response) => response.json())
      .then((data) => setMonthlyData(data["Monthly Adjusted Time Series"]))
      .catch((err) => console.log(err));

    fetch(earningsData)
      .then((response) => response.json())
      .then((data) => setEarnings(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="business">
      <div className="businessHero">
        <div className="businessTags">
          <h1 id="businessHeroTitle">
            One stop solution for all business metrices. <br />
            Know little & you will know EVERYTHING.
          </h1>
        </div>
        <div className="tickerInput">
          <div className="metricPoints">
            <p>Revenue</p>
            <p>Profit</p>
            <p>Cash Flow</p>
            <p>EPS</p>
            <p>Growth</p>
            <p>Expense</p>
            <p>EBIDTA</p>
            <p>Beta</p>
            <p>PE Ratio</p>
            <p>PEG Ratio</p>
            <p>Forward PE</p>
            <p>Tailing PE</p>
          </div>
          <form className="dataForm" onSubmit={getBusinessData}>
            <input
              type="text"
              placeholder="Enter the ticker symbol (US) "
              value={inputTicker}
              onChange={(e) => setInputTicker(e.target.value)}
            />
            <button type="submit">
              Fetch Data <i className="fa-solid fa-arrow-down-long"></i>{" "}
            </button>
          </form>
        </div>
      </div>
      <div className="apiData" ref={ref}>
        {apiData ? (
          <div className={apiData ? "metrices" : "noData"}>
            <span className="companyName">{apiData.Name}</span>
            <div className="overview">
              <p className="symbol">
                {apiData.Symbol}, {apiData.Exchange}
              </p>
              <div className="sector">
                <p className="label">Sector :</p>
                <p>{apiData.Sector}</p>
              </div>
              <div className="industry">
                <p className="label">Industry :</p>
                <p>{apiData.Industry}</p>
              </div>{" "}
            </div>

            <div className="address">
              <p className="label">Address : </p>
              <p>{apiData.Address}</p>
            </div>
            <div className="description">
              <p className="label">Description</p>
              <p>{apiData.Description}</p>
            </div>

            <div className="keyData">
              <div className="marketCap">
                <p className="label"> Market Cap</p>
                <p>
                  {(apiData.MarketCapitalization / 1000000000).toFixed(2)}B USD
                </p>
              </div>{" "}
              <div className="ebidta">
                <p className="label"> EBIDTA</p>
                <p>{(apiData.EBITDA / 1000000000).toFixed(2)}B USD</p>
              </div>
              <div className="peRatio">
                <p className="label"> PE Ratio</p>
                <p>{apiData.PERatio}</p>
              </div>
              <div className="pegRatio">
                <p className="label"> PEG Ratio</p>
                <p>{apiData.PEGRatio}</p>
              </div>
              <div className="bookValue">
                <p className="label"> Book Value</p>
                <p>{apiData.BookValue} USD</p>
              </div>
              <div className="divedend">
                <p className="label"> Divedend Per Share</p>
                <p>{apiData.DividendPerShare}</p>
              </div>
              <div className="eps">
                <p className="label"> Earnings Per Share</p>
                <p>{apiData.EPS}</p>
              </div>
              <div className="profitMargin">
                <p className="label"> Profit Margin</p>
                <p>{apiData.ProfitMargin}</p>
              </div>
              <div className="revenueTtm">
                <p className="label"> Revenue TTM</p>
                <p>{(apiData.RevenueTTM / 1000000000).toFixed(2)}B USd</p>
              </div>
              <div className="grossProfitTtm">
                <p className="label"> Gross Profit TTM</p>
                <p>{(apiData.GrossProfitTTM / 1000000000).toFixed(2)}B USD</p>
              </div>
              <div className="trailingPe">
                <p className="label"> Trailing PE</p>
                <p>{apiData.TrailingPE}</p>
              </div>
              <div className="forwardPe">
                <p className="label"> Forward PE</p>
                <p>{apiData.ForwardPE}</p>
              </div>
              <div className="priceToSales">
                <p className="label"> Price To Sales Ratio TTM</p>
                <p>{apiData.PriceToSalesRatioTTM}</p>
              </div>
              <div className="priceToBook">
                <p className="label"> Price To Book Ratio</p>
                <p>{apiData.PriceToBookRatio}</p>
              </div>
              <div className="evToRevenue">
                <p className="label"> EV To Revenue </p>
                <p>{apiData.EVToRevenue}</p>
              </div>
              <div className="evToEbidta">
                <p className="label"> EV To Ebidta </p>
                <p>{apiData.EVToEBITDA}</p>
              </div>
              <div className="beta">
                <p className="label"> Beta </p>
                <p>{apiData.Beta}</p>
              </div>
              <div className="noOfShares">
                <p className="label"> Shares Outstanding </p>
                <p>{(apiData.SharesOutstanding / 1000000000).toFixed(2)}B</p>
              </div>
            </div>
            {dailyData ? (
              <Chart
                dailyChartData={dailyData}
                weeklyChartData={weeklyData}
                monthlyChartData={monthlyData}
                earningsMetrics={earnings}
              />
            ) : (
              <p className="error">no data</p>
            )}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Business;
