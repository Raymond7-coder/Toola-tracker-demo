// components/ui/OverviewDonutChart.tsx
'use client';

import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const OverviewDonutChart = () => {
  // Replace these with your real data later
  const totalTools = 1248;
  const inUse = 298;
  const available = 842;

  // Utilization = (In Use / Total) × 100
  const utilizationPercent = Math.round((inUse / totalTools) * 100);

  const series = [utilizationPercent, 100 - utilizationPercent]; // In Use vs Not In Use

  const options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    fill: {
        type: "gradient"
    },
    series,
    labels: ['In Use', 'Not In Use'],
    colors: ['#018002', '#e5e7eb'], // green-500 & gray-200
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          size: '68%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '14px',
              fontWeight: 600,
              color: '#6b7280',
              offsetY: 20,
            },
            value: {
              show: true,
              fontSize: '36px',
              fontWeight: 700,
              color: '#111827',
              offsetY: -20,
              formatter: () => `${utilizationPercent}%`,
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Utilization',
              fontSize: '14px',
              fontWeight: 600,
              color: '#6b7280',
              formatter: () => `${utilizationPercent}%`,
            },
          },
        },
      },
    },
    tooltip: {
      enabled: false, // Clean look — no tooltip needed
    },
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <Chart options={options} series={series} type="donut" height={200} />

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">{inUse}</span> tools in use
          {' · '}
          <span className="font-semibold text-gray-900">{available}</span> available
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Total inventory: <span className="font-medium">{totalTools}</span> tools
        </p>
      </div>
    </div>
  );
};

export default OverviewDonutChart;