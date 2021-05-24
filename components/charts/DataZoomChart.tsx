import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "My stock chart",
  },
  series: [
    {
      data: [
        /* Jan 2017 */
        [1483401600000, 22948],
        [1483488000000, 22956],
        [1483574400000, 22850],
        [1483660800000, 23109],

        // [1483401600000, 115.8, 116.33, 114.76, 116.15],
        // [1483488000000, 115.85, 116.51, 115.75, 116.02],
        // [1483574400000, 115.92, 116.86, 115.81, 116.61],
        // [1483660800000, 116.78, 118.16, 116.47, 117.91],
        // [1483920000000, 117.95, 119.43, 117.94, 118.99],
      ],
    },
  ],
};

const MyStockChart = (data) => {
  const [loading, isLoading] = useState(true);
  const [chartOption, setChartOption] = useState({});

  useEffect(() => {
    setChartOption(setOption(data));
  }, [data]);

  const setOption = (chartData) => {
    const options = {
      title: {
        text: "My employee chart",
      },
      series: [
        {
          color: "#7427EE",
          data: chartData.data,
        },
      ],
    };

    isLoading(false);
    return options;
  };

  if (loading) return <div>Loading...</div>;

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={chartOption}
    />
  );
};
export default MyStockChart;
