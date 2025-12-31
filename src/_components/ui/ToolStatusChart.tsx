// components/MonthlyToolStatusChart.tsx
'use client';

import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const series = [
  {
    name: 'Missing',
    data: [89, 112, 98, 134, 156, 178, 165, 189, 203, 198, 221, 245] as number[],
  },
  {
    name: 'Damage',
    data: [42, 58, 51, 67, 79, 88, 92, 101, 112, 108, 124, 138] as number[],
  },
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
    stacked: true,
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      borderRadiusApplication: 'around',
    },
  },
  dataLabels: { enabled: false },
  stroke: { show: true, width: 8, colors: ['transparent'] },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
  colors: ['green', '#F83439'],
  legend: { show: false },
};

export default function ToolStatusChart() {
  return (
    <Chart options={options} series={series} type="bar" height={280} className="-mt-10" />
  );
}