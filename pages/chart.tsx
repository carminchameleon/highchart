import React, { useState, useEffect } from "react";
import styled from "styled-components";

import * as Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import EventChart from "../components/EventChart";
import DataZoomChart from "../components/DataZoomChart";
import employee from "../utils/employee";

const Title = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

const options: Highcharts.Options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3],
    },
  ],
};

const changeDateUnit = (string): number => {
  const year = string.slice(0, 4);
  const month = string.slice(4, 6);
  const day = moment(`${year}-${month}-01`)._d;
  const unixDay = new Date(day).getTime();
  return unixDay;
};

const Home: React.FC = (props: HighchartsReact.Props) => {
  if (typeof Highcharts === "object") {
    HighchartsExporting(Highcharts);
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    getDataSet(employee);
  }, []);

  const getDataSet = (data): [] => {
    let result = [];
    data.map((item) => {
      for (const [key, value] of Object.entries(item)) {
        const list = [changeDateUnit(key), value];
        result.push(list);
      }
    });
    setData(result);
  };

  return (
    <Title>
      chart
      {/* <HighchartsReact
        constructorType={"stockChart"}
        highcharts={Highcharts}
        options={options}
        {...props}
      /> */}
      <DataZoomChart data={data} />
      <EventChart />
    </Title>
  );
};

export default Home;
