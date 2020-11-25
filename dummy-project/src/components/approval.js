import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddIssues from './addIssue';
import { Button } from 'react-bootstrap'

const Approval = ({ match }) => {

  let param = match.params.id;
  const [issues, setIssues] = useState([]);
  const [showModal, setShow] = useState(false);


  useEffect(() => {
    axios.get(`/issues/${param}`)
      .then(res => {
        console.log(res);
        setIssues(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>

      <Button className="btn-shadow-2" variant="warning" onClick={handleShow}>
        + Add Issues
            </Button>
      <AddIssues show={showModal} onHide={handleClose}></AddIssues>


      <table className="table table-bordered table-hover mt-4 " >
        <thead className="bg-secondary">
          <tr className="text-center">
            <th>Issue Name</th>
            <th>Assignee</th>
            <th>Reporter</th>
            <th>Created</th>
            <th>Updated</th>
            {/* <th>Phone</th>
            <th>Website</th> */}
          </tr>
        </thead>
        <tbody>
          {
            issues.map(issue => <tr key={issue._id}>
              <td>{issue.issue_name}</td>
              <td>{issue.assignee}</td>
              <td>{issue.reporter}</td>
              <td>{issue.start_date}</td>
              <td>{issue.end_date}</td>
            </tr>)
          }
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Approval;