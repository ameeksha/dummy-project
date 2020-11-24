import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Headar from './components/headar';
import NavBar from './components/navBar';
import Dashboard from './components/dashboard';
import Projects from './components/projects';
import ProjectDetails from './components/projectDetails';





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
            <Redirect from="/" exact to="/dashboard" />
          </Switch>
        </main>
        
      </React.Fragment>
   
  );
}

export default App;
