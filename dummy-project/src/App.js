import React from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import './App.css';
import AdminLogin from './components/adminLogin';
import Main from './main';


function App() {

  return (

  
      <React.Fragment> 
      <Switch>
        <Route path="/login" component={AdminLogin} />
        <Route path="/main" component={Main} />
        <Redirect from="/" exact to="/login" />
      </Switch>
    </React.Fragment>
  
  );
}

export default App;
