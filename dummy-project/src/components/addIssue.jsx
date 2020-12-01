import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

const AddIssues = (props) => {

  const [state, setState] = useState({
    project_id: props.projectId,
    issue_name: '',
    description: '',
    start_date: '',
    end_date: '',
    assignee: '',
    reporter: ''
  });

  const submitHandler = e => {
    e.preventDefault();
    console.log(state);
    // props.addAlbum(state)
    axios.post('/issues', state)
      .then(response => {
        console.log(response);
        alert('New Issue Added');
      })
      .catch(error => {
        console.log(error);
      })
    setState({
      project_id: '',
      issue_name: '',
      description: '',
      start_date: '',
      end_date: '',
      assignee: '',
      reporter: ''
    })

  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title><strong>Add New Issue</strong></Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <div className="block">
          <div className="row">
            <div className="col-xl-12">
              <div className="inner">
                <div className="form" >
                  <div className="card-body">
                    <form onSubmit={submitHandler}>
                      <div className="form-row">

                        <div className="form-group col-xl-12">
                          <label className="text-secondary"><strong>ISSUE NAME</strong></label>
                          <input type="text" formControlName="issue_name" className="form-control" name="state[issue_name]" value={state.issue_name} onChange={e => setState({ ...state, issue_name: e.target.value })} />

                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-xl-12">
                          <label>DESCRIPTION</label>
                          <input type="text" formControlName="description" className="form-control" name="state[description]" value={state.description} onChange={e => setState({ ...state, description: e.target.value })} />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-xl-6">
                          <label>START DATE</label>
                          <input type="text" formControlName="start_date" className="form-control" name="state[start_date]" value={state.start_date} onChange={e => setState({ ...state, start_date: e.target.value })} />

                        </div>
                        <div className="form-group col-xl-6">
                          <label>END DATE</label>
                          <input type="text" formControlName="end_date" className="form-control" name="state[end_date]" value={state.end_date} onChange={e => setState({ ...state, end_date: e.target.value })} />

                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-xl-6">
                          <label>ASSIGNEE</label>
                          <input type="text" formControlName="assignee" className="form-control" name="state[assignee]" value={state.assignee} onChange={e => setState({ ...state, assignee: e.target.value })} />

                        </div>
                        <div className="form-group col-xl-6">
                          <label>REPORTER</label>
                          <input type="text" formControlName="reporter" className="form-control" name="state[reporter]" value={state.reporter} onChange={e => setState({ ...state, reporter: e.target.value })} />

                        </div>
                      </div>



                      <button nz-button class="btn-warning btn-shadow col-xl-12">
                        <span class="small"> <i class="icmn-plus"></i> CREATE ISSUE</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Modal.Body>
    </Modal>
  );
}

export default AddIssues;