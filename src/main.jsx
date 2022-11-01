import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// https://newsapi.org/v2/everything?q=business&apiKey=303be9184122470198a38e255a0edf62

// https://www.alphavantage.co/query?function=OVERVIEW&symbol=${inputTicker}&apikey=DOPBA3OUQ0CRL1WD
