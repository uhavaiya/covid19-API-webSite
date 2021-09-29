// import React, { Component } from 'react'
// import CountryList from './CountryList';

// class Delta extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       countries: [],
//       stats: []
//     }
//   }
//   async componentDidMount() {
//     const resp = await fetch('https://api.covid19api.com/countries')
//     const countries = await resp.json();
//     console.log(countries, "this is delta state");
//     this.setState({ countries })
//     this.state.countries.forEach(async country => {
//       // const resp = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`)
//       const resp = await fetch(`https://api.covid19api.com/country/${country.Slug}/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`)
//       const data = await resp.json()
//       if (data.length)
//         this.setState(prevState => (
//           { stats: prevState.stats.concat({...data[data.length - 1],CountryCode:country.IS02}) }
//         ))
//     })
//   }
//   render() {
//     return (
//       <div>
//         <CountryList />
//       </div>
//     )
//   }
// }

// export default Delta
