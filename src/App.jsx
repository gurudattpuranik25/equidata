import React, { useState } from "react";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Business from "./components/Business/Business";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import { useEffect } from "react";
import Crypto from "./components/Crypto/Crypto";

function App() {
  const [data, setData] = useState();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </div>
  );
}

export default App;

// const data = {
//   "2022-10-26": {
//     "1. open": "133.7200",
//     "2. high": "135.8630",
//     "3. low": "132.8100",
//     "4. close": "135.0100",
//     "5. volume": "5140023",
//   },
//   "2022-10-25": {
//     "1. open": "132.0000",
//     "2. high": "133.3000",
//     "3. low": "131.3000",
//     "4. close": "132.9300",
//     "5. volume": "5957623",
//   },
// };

// Object.values(data).forEach((element) => {
//   console.log(Object.values(element)[3]);
// });

// {dailyData &&
//   Object.values(dailyData).forEach((element) => {
//     Object.values(element).forEach((item) =>
//       console.log(Object.values(item)[3])
//     );
//   })}

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false

// @keyframes morph {
//   0% {
//     border-radius: 50%;
//     transform: translateX(-700px);
//     transform: rotate(20deg);
//   }

//   25% {
//     border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
//     transform: translateX(-350px);
//     /* transform: rotate(40deg); */
//   }

//   50% {
//     border-radius: 66% 34% 34% 66% / 50% 50% 50% 50%;
//     transform: translateX(0px);
//     /* transform: rotate(60deg); */
//   }

//   75% {
//     border-radius: 50% 50% 51% 49% / 69% 73% 27% 31%;
//     transform: translateX(350px);
//     /* transform: rotate(80deg); */
//   }

//   100% {
//     border-radius: 31% 69% 69% 31% / 50% 50% 50% 50%;
//     transform: translateX(700px);
//     transform: rotate(100deg);
//   }
// }
