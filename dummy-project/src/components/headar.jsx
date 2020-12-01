import React from 'react';
import logo from '../logo.png'
const Headar = () => {

  return (
    <React.Fragment>
      <div className="row pl-4" style={{ width: 500 }}>
        <img src={logo} alt="bestpeers" style={{ width: 60, marginRight: 5 }} />
        <h1>Bestpeers</h1>
      </div>
    </React.Fragment>
  );
}

export default Headar;