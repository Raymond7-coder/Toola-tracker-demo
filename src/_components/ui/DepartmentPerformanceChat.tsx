// components/MonthlyToolStatusChart.tsx
'use client';

import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const series = [
  { name: 'Available', data: [245, 238, 256, 267, 289] },
  { name: 'In Use', data: [195, 188, 206, 217, 239] },
  { name: 'Damaged', data: [35, 32, 30, 34, 38] },
  { name: 'Under Maintenance', data: [42, 38, 35, 42, 45] },
  { name: 'Missing', data: [28, 25, 22, 28, 32] },
];


// Properly typed reduce — this eliminates the error completely
const totalMissing = series[0].data.reduce((sum, value) => sum + value, 0);
const totalDamage = series[1].data.reduce((sum, value) => sum + value, 0);
const totalAtRisk = totalMissing + totalDamage;

const options: ApexOptions = {
  // ... same options as before (no changes needed)
  chart: {
    type: 'bar',
    height: 350,
    // stacked: true,
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 3,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: { enabled: false },
  stroke: { show: true, width: 3, colors: ['transparent'] },
  xaxis: {
    categories: ['Wireline', 'JARS', 'CTRL', 'Fishing', 'OCTG'],
    axisTicks: { show: false },
    axisBorder: { show: false },
    labels: { style: { colors: 'gray', fontSize: '13px', fontWeight: 500 }, },
   
  },
  yaxis: {
    labels: {
      style: { colors: '#64748b', fontSize: '12px' },
      formatter: (val) => `${val.toLocaleString()}`,
      show: false
    },
    show: false
  },
  grid: {
    show: false,
    borderColor: '#f1f5f9',
    strokeDashArray: 6,
    xaxis: { lines: { show: false } },
  },
  tooltip: {
    y: { formatter: (val) => `${Number(val).toLocaleString()}` },
  },
  colors: ['green', '#3b82f6', '#ef4444', '#f59e0b', '#f97316'],
  legend: { show: false },
};

export default function DepartmentPerformaceChart() {
  return (
    <Chart options={options} series={series} type="bar" height={280} className="-mt-10" />
  );
}