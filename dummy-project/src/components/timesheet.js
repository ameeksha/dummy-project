import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import AddTimesheet from './addTimesheet';
import { Link } from 'react-router-dom';

const Timesheet = ({ match }) => {

  const [users, setUsers] = useState([]);
  const [timesheet, setTimesheet] = useState([]);
  const [showModal, setShow] = useState(false);
  let param = match.params.id;

  useEffect(() => {
    axios.get(`/user/${param}`)
      .then(res => {
        console.log(res);
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axios.get(`/timesheet/${param}`)
      .then(res => {
        console.log(res);
        setTimesheet(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <div className="ml-5 mr-5">
        <Button className="btn-shadow-2 mb-4" variant="warning" onClick={handleShow}>
          + Add Details
            </Button>
        <AddTimesheet userId={param} show={showModal} onHide={handleClose}></AddTimesheet>

        <div className="card" style={{ height: 660, boxShadow: '1px 1px 10px #888888', background: '#f8f9fa!important;' }}>
          <div className="row pt-2" style={{ height: 60 }}>
            <span className=" text-dark ml-5 mr-2"><h2><strong>User:</strong></h2></span>
            {
              users.map(user =>
                <span><h2 style={{ color: "dodgerblue" }}><strong>{user.name}</strong></h2></span>
              )
            }
          </div>


          <table className="table table-bordered table-hover  " >
            <thead className="bg-secondary text-dark">
              <tr className="text-center">
                <th>Day</th>
                <th>Date</th>
                <th>Time-In</th>
                <th>Time-Out</th>
                <th>Total Hours</th>
              </tr>
            </thead>
            <tbody>
              {
                timesheet.map(timesheet => <tr key={timesheet._id}>
                  <td><strong>{timesheet.day}</strong></td>
                  <td><strong>{timesheet.date}</strong></td>
                  <td><strong>{timesheet.time_in}</strong></td>
                  <td><strong>{timesheet.time_out}</strong></td>
                  <td><strong>{timesheet.total_hour}</strong></td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>

  );
}

export default Timesheet;