import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  datasets: [
    {
      type: 'bar',
      label: '게시글 수',
      backgroundColor: '#62daab',
      data: [
        { x: '1월', y: 100 },
        { x: '2월', y: 200 },
        { x: '3월', y: 70 },
        { x: '4월', y: 80 },
        { x: '5월', y: 100 },
        { x: '6월', y: 60 },
        { x: '7월', y: 40 },
        { x: '8월', y: 120 },
        { x: '9월', y: 90 },
        { x: '10월', y: 150 },
        { x: '11월', y: 110 },
        { x: '12월', y: 130 },
      ],
    },
  ],
};

const options = {
  spanGaps: true,
  maxBarThickness: 30,
  grouped: true,
  interaction: {
    mode: 'index',
  },
  plugins: {
    title: {
      display: true,
      font: {
        family: "'Noto Sans KR', 'serif'",
        size: '20',
      },
    },
    legend: {
      labels: {
        usePointStyle: true,
        padding: 5,
        font: {
          family: "'Noto Sans KR', 'serif'",
          lineHeight: 1,
          size: '12',
        },
      },
    },
    tooltip: {
      backgroundColor: 'rgba(48, 48, 48, 0.8)',
      padding: 10,
      bodyFont: {
        font: {
          family: "'Noto Sans KR', sans-serif",
        },
      },
      usePointStyle: true,
      filter: item => item.parsed.y !== null,
      callbacks: {
        title: context => context[0].label + ' 게시글',
        label: context => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null
            ? label + ': ' + context.parsed.y + '개'
            : null;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawTicks: true,
        tickLength: 4,
        color: '#E2E2E230',
      },
      axis: 'x',
      position: 'bottom',
      ticks: {
        minRotation: 45,
        padding: 5,
      },
    },
    y: {
      type: 'linear',
      grid: {
        color: '#E2E2E230',
      },
      axis: 'y',
      display: true,
      position: 'left',
      title: {
        display: true,
        align: 'end',
        color: '#808080',
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        text: '단위: 수',
      },
    },
  },
};

const MonthlyPostsChart = () => {
  return <Line type="line" data={data} options={options} />;
};
export default MonthlyPostsChart;
