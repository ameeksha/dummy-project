import React, {useState} from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import Headar from './components/headar';
import Dashboard from './components/dashboard';
import Projects from './components/projects';
import ProjectDetails from './components/projectDetails';
import Timesheet from './components/timesheet';
import Approval from './components/approval';
import { Provider } from 'react-redux';
import store from './redux/store';


const Main = ({match}) => {

    const url = match.path;
    const up=`${url}/projects`
    console.log('main');
    console.log(up)
    const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <Provider store={store}>
        <React.Fragment >
            <Headar></Headar>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark" style={{ height: 100 }}>
      <ul className="navbar-nav ml-5">
        <li className="nav-item">
          <a className="nav-link" href={`${url}/dashboard`}>Dashboard</a>
        </li>
        <li className="nav-item ml-2">
          <a className="nav-link" href={`${url}/projects`}>Projects</a>
        </li>
      </ul>
    </nav>          
    <Switch>
          <Route path={`${url}/dashboard`} component={Dashboard} />
          <Route exact path={`${url}/projects`} component={Projects} />
          <Route path={`${url}/projectDetails/:id`} component={ProjectDetails}  />
          <Route path={`${url}/timesheet/:id`} component={Timesheet}  />
          <Route path={`${url}/approval/:id`} component={Approval}  />
     </Switch>         
    </React.Fragment>
    </Provider>
    );
}

export default Main;