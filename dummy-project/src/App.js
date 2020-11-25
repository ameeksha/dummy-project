import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Headar from './components/headar';
import NavBar from './components/navBar';
import Dashboard from './components/dashboard';
import Projects from './components/projects';
import ProjectDetails from './components/projectDetails';
import Timesheet from './components/timesheet';
import Approval from './components/approval';





function App() {
  return (

    <React.Fragment>
      <Headar></Headar>
      <NavBar></NavBar>
      <main className="container">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/projects" component={Projects} />
          <Route path="/projectDetails/:id" component={ProjectDetails} />
          <Route path="/timesheet" component={Timesheet} />
          <Route path="/approval/:id" component={Approval} />
          <Redirect from="/" exact to="/dashboard" />
        </Switch>
      </main>

    </React.Fragment>

  );
}

export default App;
