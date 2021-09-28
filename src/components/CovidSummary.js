import React from 'react'
import Card from './Card';
import NumberFormat from 'react-number-format';

function CovidSummary(props) {
  const { totalConfirmed, totalRecovered, totalDeaths, country } = props;
  return (
    <div>
      <div>
        <div>
          <h1 style={{ textTransform: 'capitalize' }}>{country === '' ? 'World Wide Corona Report' : country}</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card>
              <span>Total Confirmed</span>< br />
              <span>{<NumberFormat 
              value={totalConfirmed}
              displayType={'text'}
              thousandSeparator={true}
              />}</span>
            </Card>
            <Card>
              <span>New Confirmed</span>< br />
              <span>{totalRecovered}</span>
            </Card>
            <Card>
              <span>Total Deaths</span>< br />
              <span>{totalDeaths}</span>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CovidSummary
