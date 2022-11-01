import React from "react";
import "./Home.css";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [news, setNews] = useState("");
  const [alphaNews, setAlphaNews] = useState([]);

  // useEffect(() => {
  //   const getNews = () => {
  //     fetch(
  //       "https://newsapi.org/v2/everything?q=business&apiKey=303be9184122470198a38e255a0edf62"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setNews(data.articles))
  //       .catch((err) => console.log(err.message));
  //   };

  //   getNews();
  // });

  // useEffect(() => {
  //   const getNews = () => {
  //     fetch(
  //       "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&topics=technology&apikey=DOPBA3OUQ0CRL1WD"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setAlphaNews(data.feed))
  //       // .then((data) => console.log(data.feed))
  //       .catch((err) => console.log(err.message));
  //   };

  //   getNews();
  // });

  const navigateToNews = (newsUrl) => {
    window.open(newsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="home">
      <div className="heroSection">
        <img
          id="heroImage"
          src="https://eoimages.gsfc.nasa.gov/images/imagerecords/8000/8108/ipcc_bluemarble_west_lrg.jpg"
          alt=""
        />
        <div className="heroContainer">
          <div className="heroDetails">
            <p>is data really the new oil ?</p>
            <p>
              with <span>EquiData</span>, maybe YES.
            </p>
            <p id="tagline">Go global with data at fingertips ☝.</p>
            <p className="heroTags">
              {" "}
              Business <span>|</span> Economy <span>|</span> Stock-Market{" "}
              <span>|</span> Technology{" "}
            </p>
          </div>
        </div>
      </div>
      <marquee direction="right" scrollamount="10">
        Latest & trending news from across the world!!
      </marquee>
      <div className="newsSection">
        {news ? (
          <div className="newsGrid">
            {news.map((item, index) => {
              return (
                <div
                  key={index}
                  className="newsList"
                  onClick={() => navigateToNews(item.url)}
                >
                  <div>
                    {item.urlToImage ===
                    "https://images.readwrite.com/wp-content/uploads/2022/09/Business-Trends.jpg" ? (
                      <img
                        src="https://img.freepik.com/free-vector/blue-breaking-news-tv-background_1017-14201.jpg?size=626&ext=jpg&ga=GA1.2.213141466.1660914609&semt=sph"
                        alt="News Banner"
                      />
                    ) : (
                      <img src={item.urlToImage} alt="News Banner" />
                    )}
                  </div>

                  <div className="newsDetails">
                    <p className="title">{item.title}</p>
                    <p className="newsHeadline">
                      {item.content.split(" ").slice(0, 12).join(" ")}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="newsList"></div>
          </div>
        ) : (
          // {alphaNews ? (
          //   <div className="newsGrid">
          //     {alphaNews.map((item, index) => {
          //       return (
          //         <div
          //           key={index}
          //           className="newsList"
          //           onClick={() => navigateToNews(item.url)}
          //         >
          //           <div>
          //             <img src={item.banner_image} alt="News Banner" />
          //           </div>

          //           <div className="newsDetails">
          //             <p className="title">{item.title}</p>
          //             <p className="newsHeadline">{item.summary}</p>
          //           </div>
          //         </div>
          //       );
          //     })}
          //     <div className="newsList"></div>
          //   </div>
          // ) : (
          <div className="error">
            <i className="fa-solid fa-circle-exclamation"></i>
            <h1>
              {" "}
              oops...we ran into an error. Please wait while we fetch the news
              for you. You can re-visit the site after some time, thank you.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
