import React, { useEffect, useState } from 'react'
import '../stateWiseData/statewise.css'
import { Line } from 'react-chartjs-2';

function Statewise() {

  const [data, setData] = useState([])

  const getcvdData = async () => {
    const url = 'https://data.covid19india.org/data.json';
    // let url = 'https://data.covid19india.org/v4/min/data.min.json';
    const data = await fetch(url)
    const parsedData = await data.json()
    console.log(parsedData.statewise, "parsedData");
    setData(parsedData.statewise);
  }

  useEffect(() => {
    getcvdData();
  }, [])
  // const conNum = parsedData.statewise.map(d => d.confirmed)
  const mapData = {
    labels: ['CONFIRMED',	'RECOVERD',	'DEATHS',	'ACTIVE'],
    datasets: [
      {
        label: '# of Votes',
        // data: conNum,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
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
    <>
      <div className="container-fluid mt-5 ">
        <div className="main-heading">
          <h1 className="mb-5 text-center"><span className="font-weight-bold"> INDIA </span> COVID-19 Dashboard</h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th> State</th>
                <th> Confirmed</th>
                <th> Recoverd</th>
                <th> Deaths</th>
                <th> Active</th>
                <th> Updated</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((curElen, ind) => {
                  return (
                    <tr key={ind}>
                      <th> {curElen.state}</th>
                      <td> {curElen.confirmed}</td>
                      <td> {curElen.recovered}</td>
                      <td> {curElen.deaths}</td>
                      <td> {curElen.active}</td>
                      <td> {curElen.lastupdatedtime}</td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
        <div className='header'>
          <h1 className='title'>Line Chart</h1>
          <div className='links'>
            <a
              className='btn btn-gh'
              href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
            >
              Github Source
            </a>
          </div>
        </div>
        <Line data={mapData} options={options} />
      </div>
    </>
  )
}

export default Statewise
