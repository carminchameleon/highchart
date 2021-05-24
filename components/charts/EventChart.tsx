import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import styled from "styled-components";

import HighchartsReact from "highcharts-react-official";

const colorList = [
  "#889AEA",
  "#F9E4B4",
  "#BBA1E8",
  "#90CCC6",
  "#E3BBC1",
  "#B5ADB1",
  "#B5ADB1",
  "#EFCEAB",
  "#DCA1D2",
  "#A1C1DC",
];

const EventChart = (data) => {
  const [loading, isLoading] = useState(true);
  const [chartOption, setChartOption] = useState({});
  const [hoverData, setHoverData] = useState(0);

  const list = [
    "전기전자제품",
    "핸드셋",
    "디스플레이 패널",
    "인공지능",
    "호텔",
    "유틸리티",
    "금융",
    "제약",
  ];

  const tableData = [
    { industryName: "전기전자제품", value: "888조 888억", companyNumber: 99 },
    { industryName: "핸드셋", value: "777조 777억", companyNumber: 800 },
    {
      industryName: "디스플레이 패널",
      value: "999조 999억",
      companyNumber: 123,
    },
    { industryName: "인공지능", value: "888조 888억", companyNumber: 134 },
    { industryName: "호텔", value: "777조 777억", companyNumber: 135 },
    { industryName: "유틸리티", value: "999조 999억", companyNumber: 156 },
    { industryName: "금융", value: "888조 888억", companyNumber: 167 },
    { industryName: "제약", value: "777조 777억", companyNumber: 134 },
  ];

  useEffect(() => {
    setChartOption(setOption(data, setHoverData));
  }, [data]);

  const setOption = (chartData, setHoverData) => {
    const handleHover = (e) => {
      setHoverData(e.target.index);
    };

    const options = {
      title: {
        text: "상위 투자 산업",
      },
      xAxis: {
        categories: [
          "전기전자제품",
          "핸드셋",
          "디스플레이 패널",
          "인공지능",
          "호텔",
          "유틸리티",
          "금융",
          "제약",
        ],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: "Rainfall (mm)",
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
        series: {
          point: {
            events: {
              mouseOver: handleHover.bind(this),
            },
          },
        },
      },
      series: [
        {
          type: "column",
          // name: "Tokyo",
          color: "rgba(31, 31, 32, 0.2)",
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 216.4],
          // events: {
          //   click: function (event) {
          //     setHoverData(this.chart.index);

          //     // this.chart.series[1].points[event.point.x].setState("hover");
          //   },
          // },
          states: {
            hover: {
              color: colorList[hoverData],
              borderColor: colorList[hoverData],
            },
          },
        },
      ],
    };

    isLoading(false);
    return options;
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <HighchartsReact
        highcharts={Highcharts}
        // constructorType={"stockChart"}
        options={chartOption}
      />

      <IndustryContainer>
        {tableData.map((item, index) => {
          return (
            <IndustryData index={index} isCurrentData={index === hoverData}>
              <IndustryName>{item.industryName}</IndustryName>
              <IndustryPrice>{item.value}</IndustryPrice>
              <IndustryCompany>
                <Logos>
                  <div>R</div>
                </Logos>
                <CompanyNumber>+{item.companyNumber}개</CompanyNumber>
              </IndustryCompany>
            </IndustryData>
          );
        })}
      </IndustryContainer>

      <div>{hoverData}</div>
    </Container>
  );
};

const Container = styled.div`
  /* max-width: 1000px; */
`;
const IndustryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div::nth-child(4n) {
    margin-right: 0px;
  }
`;

const IndustryData = styled.div<{ index: number; isCurrentData: boolean }>`
  padding: 24px 16px;
  width: 208px;
  background: rgba(111, 111, 148, 0.03);
  border-radius: 6px;
  margin-right: 16px;
  font-weight: normal;
  border: 1px solid;
  border-color: ${(props) =>
    !props.isCurrentData
      ? "rgba(111, 111, 148, 0.03)"
      : colorList[props.index]};
`;

const IndustryName = styled.div`
  font-size: 14px;
  margin-bottom: 9px;
`;

const IndustryPrice = styled.div`
  font-size: 12px;
  margin-bottom: 8px;
`;

const IndustryCompany = styled.div`
  display: flex;
  align-items: center;
`;

const Logos = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #d8d8d8;
  font-size: 16px;
  color: gray;
  font-weight: 900;
  text-align: center;
  div {
    padding-top: 4px;
  }
`;

const CompanyNumber = styled.div`
  margin-left: 8px;
  font-size: 13px;
  color: rgba(31, 31, 32, 0.4);
`;

export default EventChart;
