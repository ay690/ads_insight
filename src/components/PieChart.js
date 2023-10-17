import React from "react";
import { Card, Select, Switch } from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Table2 from "./Table2";

const { Option } = Select;
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["40% Male", "35% Female", "25% Unknown"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#EC5800", "#0096FF", "#7393B3"],
        hoverBackgroundColor: ["#EC5800", "#0096FF", "#7393B3"],
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <Card
      title={
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontWeight: "bold" }}>Ad Insights</div>
          <div style={{ marginLeft: "auto" }}>
            <Select defaultValue="clicks" style={{ width: 100 }}>
              <Option value="clicks">Clicks</Option>
            </Select>
          </div>
        </div>
      }
      style={{ width: "auto", height: 500, overflow: "hidden" }}
    >
      <div style={{ height: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Doughnut data={data} options={options} />
      </div>
    </Card>
  );
};

export default PieChart;
