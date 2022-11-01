import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h1>
        <span>EquiData</span> ?
      </h1>
      <div className="aboutSection">
        <div className="aboutUs">
          <p>
            EquiData is a web application that houses loads of data, news and
            articles, all related to business & technology. Just by entering the
            ticker symbol of any listed company in the United States stock
            market, you get most of the financial metrices that are used to
            analyze the health of a company.
          </p>
          <p>
            These metrices include MArket Capitalization, EBIDTA, PE Ratio, PEG
            Ratio, Book Value, Earnings Per Share (EPS), Revenue TTM, Gross
            Profit TTM, Forward PE, Trailing PE, Price to Book Ratio, EV to
            Revenue, EV to EBIDTA, Beta, 52W High, 52W Low, 50 Day Moving
            Average, 200 Day Moving Average and Number of Shares Outstanding.
          </p>
        </div>
      </div>
      <p className="checkoutBtn">
        <Link id="checkout" to="/business">
          Check Out <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      </p>
    </div>
  );
}

export default About;
