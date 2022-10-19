import React from 'react';
import { Line } from 'react-chartjs-2';

const MonthlyVisitorsChart = ({ Data }) => {
  const key = Data.flatMap(Object.keys);
  const result = [];
  const newArray = () => {
    const arrA = [];
    const arrB = [];
    for (let i = 0; i < Data.length; i++) {
      arrA.push(Object.values(Data[i])[0].visitor);
      arrB.push(Object.keys(Data[i])[0]);
    }
    arrB.reduce((_, curr, idx) => {
      result.push({ x: curr, y: arrA[idx] });
      return result;
    });
  };
  newArray();

  const data = {
    labels: key,
    datasets: [
      {
        type: 'line',
        label: '방문자 수',
        borderColor: '#6395f9',
        borderWidth: 2,
        data: result,
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
          title: context => context[0].label + ' 방문자',
          label: context => {
            let label = context.dataset.label + '' || '';
            return context.parsed.y !== null
              ? label + ': ' + context.parsed.y + '명'
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
          text: '단위: 명',
        },
      },
    },
  };

  return <Line type="line" data={data} options={options} />;
};
export default MonthlyVisitorsChart;
