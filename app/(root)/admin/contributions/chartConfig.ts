// chartConfig.ts

import { ChartOptions } from 'chart.js';

export const contributionsChartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month',
      },
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Amount (UGX)',
      },
      ticks: {
        callback: (value) => `${value.toLocaleString()} UGX`,
      },
    },
  },
};
