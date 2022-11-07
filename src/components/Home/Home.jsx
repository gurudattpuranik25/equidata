import React from "react";
import "./Home.css";
import { useEffect } from "react";
import { useState } from "react";
import stock_gif from "../../assets/stock_gif.gif";
import crypto_gif from "../../assets/crypto_gif.gif";
import news_gif from "../../assets/news_gif.gif";
import business from "../../assets/business.png";
import sports from "../../assets/sports.png";
import education from "../../assets/education.png";
import entertainment from "../../assets/entertainment.png";
import technology from "../../assets/technology.png";
import fashion from "../../assets/fashion.png";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Home() {
  const [news, setNews] = useState("");
  const [alphaNews, setAlphaNews] = useState([]);

  useEffect(() => {
    const getNews = () => {
      fetch(
        "https://newsapi.org/v2/everything?q=business AND sports AND entertainment AND technology &apiKey=303be9184122470198a38e255a0edf62"
      )
        .then((response) => response.json())
        .then((data) => setNews(data.articles))
        .catch((err) => console.log(err.message));
    };

    getNews();
  });

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

      <div className="gifSection">
        <div className="stockGif gifs">
          <img src={stock_gif} />
          <h1>Stocks</h1>
          <p>
            Get all the key business metrices like financial ratios, sales data
            and, profits along with price & earning charts of your favorite US
            stock.
          </p>
        </div>
        <div className="cryptoGif gifs">
          <img src={crypto_gif} />
          <h1>Crypto</h1>
          <p>
            Keep yourself updated with the latest price, ranks and price
            fluctuations of all the Cryptocurrencies.
          </p>
        </div>
        <div className="newsGif gifs">
          <img src={news_gif} />
          <h1>News</h1>
          <p>
            Read global news, trending & non-trending with just a click. Never
            miss an update on technology, finance, politics & more.
          </p>
        </div>
      </div>
      <div className="swiperCarousel ">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1612010167102-d1e8f83833e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1621264448270-9ef00e88a935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0b2NrJTIwbWFya2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1586339949216-35c2747cc36d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          </SwiperSlide>
        </Swiper>
      </div>

      <marquee className='homeMarquee' direction="right" scrollamount="10">
        Latest & trending news from across the world!!
      </marquee>
      <div className="newsSection">
        <div className="sectionTags">
          <div className="businessTag individualSection">
            {/* <img src={business} alt="" /> */}
            <i className="fa-solid fa-business-time"></i>
            <p>Business</p>
          </div>
          <div className="sports individualSection">
            {/* <img src={sports} alt="" /> */}
            <i className="fa-solid fa-medal"></i>
            <p>Sports</p>
          </div>
          <div className="education individualSection">
            {/* <img src={education} alt="" /> */}
            <i className="fa-solid fa-graduation-cap"></i>
            <p>Education</p>
          </div>
          <div className="entertainment individualSection">
            {/* <img src={entertainment} alt="" /> */}
            <i className="fa-solid fa-music"></i>
            <p>Entertainment</p>
          </div>
          <div className="technology individualSection">
            {/* <img src={technology} alt="" /> */}
            <i className="fa-solid fa-microchip"></i>
            <p>Technology</p>
          </div>
          <div className="fashion individualSection">
            {/* <img src={fashion} alt="" /> */}
            <i className="fa-solid fa-shirt"></i>
            <p>Fashion</p>
          </div>
        </div>
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
