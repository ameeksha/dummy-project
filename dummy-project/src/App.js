import React from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import './App.css';
import AdminLogin from './components/adminLogin';
import Main from './main';







function App() {



  return (

    <React.Fragment>
      {/* <Headar></Headar>
      <NavBar></NavBar> */}

      <Switch>


        <Route path="/login" component={AdminLogin} />
        <Route path="/main" component={Main} />
        {/* <Route path="/timesheet" component={Timesheet} />
          <Route path="/approval/:id" component={Approval} /> */}
        <Redirect from="/" exact to="/login" />
      </Switch>

    </React.Fragment>

  );
}

export default App;
