// import './App.css';
import React, { useEffect, useState } from 'react'
import CovidSummary from './components/CovidSummary';
import LineGraph from './components/LineGraph';
import axios from './components/axios'
import Statewise from './components/stateWiseData/Statewise';
import Spinner from './components/Spinner';
import LoadingBar from 'react-top-loading-bar'
// import Delta from './components/stateWiseData/Delta';

function App() {

  const [totalConfirmed, setTotalConfirmed] = useState(0)
  const [totalRecovered, setTotalRecovered] = useState(0)
  const [totalDeaths, setTotalDeaths] = useState(0)
  const [loading, setLoading] = useState(false)
  const [covidSummary, setCovidSummary] = useState({})
  const [days, setDays] = useState(7);
  const [country, setCountry] = useState('');
  const [coronaCountArr, setCoronaCountArr] = useState([]);
  const [lable, setLable] = useState([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setLoading(true)
    axios.get(`/summary`)
      .then(res => {
        setLoading(false)

        if (res.status === 200) {
          setTotalConfirmed(res.data.Global.TotalConfirmed)
          setTotalRecovered(res.data.Global.NewConfirmed)
          setTotalDeaths(res.data.Global.TotalDeaths)
          setCovidSummary(res.data)
        }
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })


  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    // 2020-05-04;
    const year = d.getFullYear();
    const month = `0${d.getMonth() + 1}`.slice(-2); //12 -> 012-> 12
    const _date = d.getDate();
    return `${year}-${month}-${_date}`;
  }

  const countryHandler = (e) => {
    setCountry(e.target.value);
    const d = new Date()
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate() - days));
    // console.log(from,to,"From and to");

    getCoronaReport(e.target.value, from, to)
  }
  const daysHandler = (e) => {
    setDays(e.target.value);
    const d = new Date()
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate() - e.target.value));
    getCoronaReport(country, from, to)
  }

  const getCoronaReport = (countrySlug, from, to) => {
    setProgress(20)
    axios.get(`/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
      .then(res => {
        setProgress(50)
        console.log(res, "resss");

        const yAxisCoronaCount = res.data.map(d => d.Cases);
        const xAxisLable = res.data.map(d => d.Date);
        const covideDetails = covidSummary.Countries.find(country => country.Slug === countrySlug)
        setTotalConfirmed(covideDetails.TotalConfirmed)
        setTotalRecovered(covideDetails.NewConfirmed)
        setTotalDeaths(covideDetails.TotalDeaths)
        setProgress(70)
        setLable(xAxisLable)
        setCoronaCountArr(yAxisCoronaCount)
        setProgress(100)
      })
      .catch(error => {
        console.log(error, "error");
      })
  }

  if (loading) {
    // return <p>Fatching data...</p>
    return <Spinner />
  }



  return (
    <div className="App">
      {/* <LoadingBar
        height={5}
        color='#f11946'
        progress={progress}
      /> */}
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={country}
      />
      {/* <div>
        <select value={country} onChange={countryHandler}>
          <option value="">Select Country</option>
          {
            covidSummary.Countries && covidSummary.Countries.map(country =>
              <option key={country.Slug} value={country.Slug}>{country.Country}</option>
            )
          }
        </select>
        <select value={days} onChange={daysHandler}>
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div> */}
      {/* <LineGraph
        yAxis={coronaCountArr}
        lable={lable}
      /> */}
      {/* <Statewise /> */}
      {/* <Delta /> */}
    </div>
  );
}

export default App;
