import React from 'react'
import { Line } from 'react-chartjs-2'
function LineGraph(props) {
  const data = {
    labels: props.lable.map(l => l.substr(0, 10)),
    datasets: [
      {
        label: '# of Cases',
        data: props.yAxis,
        fill: true,
        backgroundColor: 'rgb(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div style={{ width: "600px", height: "300px", margin: "50px auto" }}>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineGraph
