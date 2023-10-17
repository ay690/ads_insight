import React from "react";
import { Table, Select } from "antd";

const { Option } = Select;

const dataSource = [
  {
    key: "1",
    group: "Male",
    clicks: 348,
    cost: 12528,
    conversions: 42,
    revenue: 62118,
  },
  {
    key: "2",
    group: "Female",
    clicks: 692,
    cost: 24912,
    conversions: 35,
    revenue: 5175,
  },
  {
    key: "3",
    group: "Unknown",
    clicks: 105,
    cost: 3943,
    conversions: 3,
    revenue: 4489,
  },
];

const columns = [
  {
    title: "Group",
    dataIndex: "group",
    key: "group",
    sorter: (a, b) => a.group.localeCompare(b.group),
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
  group: "Total",
  clicks: dataSource.reduce((acc, item) => acc + item.clicks, 0),
  cost: dataSource.reduce((acc, item) => acc + item.cost, 0),
  conversions: dataSource.reduce((acc, item) => acc + item.conversions, 0),
  revenue: dataSource.reduce((acc, item) => acc + item.revenue, 0),
};

dataSource.push(total);

const titleStyle = {
  fontWeight: "bold",
};

const Table2 = () => {
  return (
    <Table
      title={() => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={titleStyle}>Ad Insights</div>
          <div style={{ marginLeft: "auto" }}>
            <Select defaultValue="clicks" style={{ width: 100 }}>
              <Option value="clicks">Clicks</Option>
            </Select>
          </div>
        </div>
      )}
      dataSource={dataSource}
      columns={columns}
      bordered
    />
  );
};

export default Table2;
