import React from 'react'
import Card from './Card';
import './CovidSummary.css'
import NumberFormat from 'react-number-format';
import '../style.css';
import Index from './Index';


function CovidSummary(props) {
  const { totalConfirmed, totalRecovered, totalDeaths, country } = props;
  return (
    <div>
        <div>
          <Index />
          {/* <h1 style={{ textTransform: 'capitalize', height: '56px', background: '#f8f9fa' }}>{country === '' ? 'World Wide Corona Report' : country}</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="card1">
              <Card>
                <span>Total Confirmed</span>< br />
                <span>{<NumberFormat
                  value={totalConfirmed}
                  displayType={'text'}
                  thousandSeparator={true}
                />}</span>
              </Card>
            </div>
            <div className="card2">
              <Card>
                <span>New Confirmed</span>< br />
                <span>{totalRecovered}</span>
              </Card>
            </div>
            <div className="card3">
              <Card>
                <span>Total Deaths</span>< br />
                <span>{totalDeaths}</span>
              </Card>
            </div> */}

          {/* </div> */}
        </div>
    </div>
  )
}

export default CovidSummary
