import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import AddProject from './addProject';
import AddIssues from './addIssue';

function NavBar() {
  const url = window.location.pathname;
  console.log('url')
  console.log(url)
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark" style={{ height: 100 }}>
      {/* <a className="navbar-brand" href='#' style={{ fontWeight: 600 }} >Bestpeers</a> */}

      <ul className="navbar-nav ml-5">
        <li className="nav-item">
          <a className="nav-link" href="/dashboard">Dashboard</a>
        </li>
        <li className="nav-item ml-2">
          <a className="nav-link" href="/projects">Projects</a>
        </li>
      </ul>



      <div class="ml-auto">
        {
          (url == '/projects') ?
            <div>
              <Button className="btn-shadow-2" variant="warning" onClick={handleShow}>
                + Add Project
              </Button>
              <AddProject show={showModal} onHide={handleClose}></AddProject>
            </div>
            : ((url == '/timesheet') ? <div>
              <Button className="btn-shadow-2" variant="warning" onClick={handleShow}>
                + Add Issues
            </Button>
              <AddIssues show={showModal} onHide={handleClose}></AddIssues>
            </div>
              : null)

        }
      </div>
    </nav>
  );
}

export default NavBar;