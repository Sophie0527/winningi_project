import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['10대', '20대', '30대', '40대', '50대', '60대'],
  datasets: [
    {
      type: 'pie',
      label: '사용자',
      backgroundColor: [
        '#c2acb4',
        '#d9bbb8',
        '#e9e1da',
        '#aec5d8',
        '#608fb7',
        '#0c4876',
      ],
      hoverBackgroundColor: ['#909090'],
      data: [5, 20, 10, 6, 15, 17],
    },
  ],
};
const options = {
  plugins: {
    title: {
      display: true,
      text: '사용자 연령대',
      font: {
        family: "'Noto Sans KR', 'serif'",
        size: '20',
      },
    },
    legend: {
      labels: {
        usePointStyle: true,
        padding: 7,
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
      bodySpacing: 5,
      bodyFont: {
        font: {
          family: "'Noto Sans KR', sans-serif",
        },
      },
      usePointStyle: true,
      callbacks: {
        title: context => context[0].label,
        label: context => {
          let label = context.dataset.label + '' || '';
          return context.parsed !== null
            ? label + ': ' + context.parsed + '명'
            : null;
        },
      },
    },
  },
};

const UserAgeChart = () => {
  return (
    <Pie
      type="pie"
      data={data}
      options={options}
      style={{
        position: 'relative',
        width: '350px',
      }}
    />
  );
};
export default UserAgeChart;
