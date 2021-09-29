import React, { useEffect, useState } from 'react'
import '../stateWiseData/statewise.css'
// import Delta from './Delta';
// import { Line } from 'react-chartjs-2';
// import LineGraphState from './LineGraphState';

function Statewise() {

  const [data, setData] = useState([])
  const [states, setStates] = useState('');
  // const [lable, setLable] = useState([])
  // const [coronaCountArr, setCoronaCountArr] = useState([]);


  console.log(states, "This is state value");


  const getcvdData = async () => {
    const url = 'https://data.covid19india.org/data.json';
    // let url = 'https://data.covid19india.org/v4/min/data.min.json';
    const dataurl = await fetch(url)
    const parsedData = await dataurl.json()
    console.log(parsedData.statewise, "parsedData");
    setData(parsedData.statewise);
    // console.log(parsedData, "parsedData");
    // const caseURL = 'https://data.covid19india.org/v4/min/data.min.json';
    // const datacaseURL = await fetch(caseURL);
    // const caseData = await datacaseURL.json()
    // console.log(caseData,"caseData");
    // const yAxisCoronaCount = data.map(d => d.confirmed);
    // setCoronaCountArr(yAxisCoronaCount)


  }


  useEffect(() => {
    getcvdData();
  }, [])
  // const conNum = parsedData.statewise.map(d => d.confirmed)


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
                      <th><span style={{ cursor: "pointer" }} value={states} onClick={() => setStates(curElen.state)}> {curElen.state} </span></th>
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
        {/* <h1>Delta Cases</h1>
        <LineGraphState
          yAxis={coronaCountArr}
        /> */}
      </div>
    </>
  )
}

export default Statewise
