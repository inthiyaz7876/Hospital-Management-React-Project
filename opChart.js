import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    name: 'Day 1',  op: 200,
  },
  {
    name: 'Day 2',  op: 198,
  },
  {
    name: 'Day 3',  op: 800,
  },
  {
    name: 'Day 4', op: 308,
  },
  {
    name: 'Day 5', op: 400,
  },
  {
    name: 'Day 6',  op: 300,
  },
  {
    name: 'Day 7', op: 430,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <AreaChart width={730} height={300} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />

  <Area type="monotone" dataKey="op" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
    );
  }
}
