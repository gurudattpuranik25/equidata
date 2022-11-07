import React from "react";
import { Line, Bar } from "react-chartjs-2";
import chartPackage from "chart.js/auto";
import "./Business.css";

function Chart({
  dailyChartData,
  weeklyChartData,
  monthlyChartData,
  earningsMetrics,
}) {
  console.log(
    dailyChartData,
    weeklyChartData,
    monthlyChartData,
    earningsMetrics
  );

  const dailyDates = Object.keys(dailyChartData);
  const dailyPrice = Object.values(dailyChartData).map(
    (item) => item["4. close"]
  );

  const weeklyDates = Object.keys(weeklyChartData);
  const weeklyPrice = Object.values(weeklyChartData).map(
    (item) => item["5. adjusted close"]
  );

  const monthlyDates = Object.keys(monthlyChartData);
  const monthlyPrice = Object.values(monthlyChartData).map(
    (item) => item["5. adjusted close"]
  );

  const annualEarningsDate = earningsMetrics.annualEarnings.map(
    (item) => item["fiscalDateEnding"]
  );
  const annualReportedEps = earningsMetrics.annualEarnings.map(
    (item) => item["reportedEPS"]
  );

  const quarterlyEarningsDate = earningsMetrics.quarterlyEarnings.map(
    (item) => item["fiscalDateEnding"]
  );
  const quarterlyReportedEps = earningsMetrics.quarterlyEarnings.map(
    (item) => item["reportedEPS"]
  );

  return (
    <div className="charts">
      <div className="earningsChart">
        <div className="quarterlyEarningsChart">
          <h1>
            {" "}
            <span className="stick">|</span> Quarterly Earnings
          </h1>
          <Bar
            data={{
              labels: quarterlyEarningsDate.reverse(),
              datasets: [
                {
                  label: "Earnings vs Date",
                  data: quarterlyReportedEps.reverse(),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: {
                    // This more specific font property overrides the global property
                    font: {
                      size: 16,
                    },
                  },
                },
              },
            }}
          />
        </div>
        <div className="annualEarningsChart">
          <h1>
            {" "}
            <span className="stick">|</span> Annual Earnings
          </h1>
          <Bar
            data={{
              labels: annualEarningsDate.reverse(),
              datasets: [
                {
                  label: "Earnings vs Date",
                  data: annualReportedEps.reverse(),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: {
                    // This more specific font property overrides the global property
                    font: {
                      size: 16,
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="dailyChart">
        <h1>
          {" "}
          <span className="stick">|</span> Daily Price Chart
        </h1>
        <Line
          data={{
            labels: dailyDates.reverse(),
            datasets: [
              {
                label: "Stock Price ( $ ) vs Date",
                data: dailyPrice.reverse(),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  // This more specific font property overrides the global property
                  font: {
                    size: 16,
                  },
                },
              },
            },
          }}
        />
      </div>

      <div className="weeklyChart">
        <h1>
          {" "}
          <span className="stick">|</span> Weekly Price Chart
        </h1>
        <Line
          data={{
            labels: weeklyDates.reverse(),
            datasets: [
              {
                label: "Stock Price ( $ ) vs Date",
                data: weeklyPrice.reverse(),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  // This more specific font property overrides the global property
                  font: {
                    size: 16,
                  },
                },
              },
            },
          }}
        />
      </div>
      <div className="monthlyChart">
        <h1>
          {" "}
          <span className="stick">|</span> Monthly Price Chart
        </h1>
        <Line
          data={{
            labels: monthlyDates.reverse(),
            datasets: [
              {
                label: "Stock Price ( $ ) vs Date",
                data: monthlyPrice.reverse(),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  // This more specific font property overrides the global property
                  font: {
                    size: 16,
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Chart;
