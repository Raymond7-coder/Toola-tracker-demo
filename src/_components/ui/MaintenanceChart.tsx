// components/MonthlyToolStatusChart.tsx
'use client';

import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const series = [
  {
    name: 'Missing',
    data: [31, 40, 28, 51, 42, 75, 60, 11, 32, 45, 32, 34] as number[],
  },
  {
    name: 'Damage',
    data: [11, 32, 45, 32, 34, 80, 41, 31, 40, 28, 51, 42] as number[],
  },
];

// Properly typed reduce — this eliminates the error completely
const totalMissing = series[0].data.reduce((sum, value) => sum + value, 0);
const totalDamage = series[1].data.reduce((sum, value) => sum + value, 0);
const totalAtRisk = totalMissing + totalDamage;

const options: ApexOptions = {
  // ... same options as before (no changes needed)
  chart: {
    type: 'area',
    toolbar: { show: false },
  },
  dataLabels: { enabled: false },
//   stroke: { curve: 'smooth', width: 3, colors: ['green', '#F83439'] },
  fill: {
    type: 'gradient',
    gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: { style: { colors: 'gray', fontSize: '13px', fontWeight: 500 }, },
   
  },
  yaxis: {
    labels: {
      style: { colors: '#64748b', fontSize: '12px' },
      formatter: (val) => `${val.toLocaleString()}`,
    },
  },
  grid: {
    // show: false,
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

export default function MaintenanceChart() {
  return (
    <Chart options={options} series={series} type="area" height={250} className="-mt-4" />
  );
}