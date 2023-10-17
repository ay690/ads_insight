import React from "react";
import { Table } from "antd";
import PieChart from "./PieChart";

const dataSource = [
  {
    key: "1",
    campaign: "Cosmetics",
    clicks: 712,
    cost: 4272,
    conversions: 8,
    revenue: 16568,
  },
  {
    key: "2",
    campaign: "Serums",
    clicks: 3961,
    cost: 27331,
    conversions: 115,
    revenue: 362526,
  },
  {
    key: "3",
    campaign: "Facewash",
    clicks: 9462,
    cost: 76831,
    conversions: 123,
    revenue: 266800,
  },
  {
    key: "4",
    campaign: "Shampoos",
    clicks: 439,
    cost: 2151,
    conversions: 5,
    revenue: 11029,
  },
  {
    key: "5",
    campaign: "Conditioners",
    clicks: 1680,
    cost: 3864,
    conversions: 49,
    revenue: 175245,
  },
  {
    key: "6",
    campaign: "Facewash 2",
    clicks: 4978,
    cost: 29370,
    conversions: 189,
    revenue: 623106,
  },
];

const columns = [
  {
    title: "Campaigns",
    dataIndex: "campaign",
    key: "campaign",
    sorter: (a, b) => a.campaign.localeCompare(b.campaign),
  },
  {
    title: "Clicks",
    dataIndex: "clicks",
    key: "clicks",
    sorter: (a, b) => a.clicks - b.clicks,
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost",
    sorter: (a, b) => a.cost - b.cost,
  },
  {
    title: "Conversions",
    dataIndex: "conversions",
    key: "conversions",
    sorter: (a, b) => a.conversions - b.conversions,
  },
  {
    title: "Revenue",
    dataIndex: "revenue",
    key: "revenue",
    sorter: (a, b) => a.revenue - b.revenue,
  },
];

const total = {
  key: "total",
  campaign: "Total",
  clicks: dataSource.reduce((acc, item) => acc + item.clicks, 0),
  cost: dataSource.reduce((acc, item) => acc + item.cost, 0),
  conversions: dataSource.reduce((acc, item) => acc + item.conversions, 0),
  revenue: dataSource.reduce((acc, item) => acc + item.revenue, 0),
};

dataSource.push(total);

const titleStyle = {
  fontWeight: "bold",
};

const Table1 = () => {
  return (
    <Table
      title={() => <div style={titleStyle}>Ad Insights</div>}
      dataSource={dataSource}
      columns={columns}
      bordered
    />
  );
};

export default Table1;
