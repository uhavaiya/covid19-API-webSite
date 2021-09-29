import React from 'react'

function Index() {
  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo"><a href='#'>Cov<span>id19.</span></a></div>
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Reaction</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="home" id="home" >
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Corona Update</div>
            <div className="text-2">Total Cases</div>
            <div className="text-3">corona <span>ActiveCases</span></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
