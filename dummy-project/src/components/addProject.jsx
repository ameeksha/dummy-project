import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addProject } from '../redux/project/projectActions';

const AddProject = (props) => {

  const [state, setState] = useState({
    project_name: '',
    project_code: '',
    customer: '',
    type_of_project: '',
    hourly_rate: '',
    start_date: '',
    end_date: '',
    project_manager: '',
    tech_lead: '',
    description: ''
  });

  const submitHandler = e => {
    e.preventDefault();
    console.log(state);
    props.addProject(state)
    setState({
      project_name: '',
      project_code: '',
      customer: '',
      type_of_project: '',
      hourly_rate: '',
      start_date: '',
      end_date: '',
      project_manager: '',
      tech_lead: '',
      description: ''
    })

  }

  return (


    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title><strong>Add New Project</strong></Modal.Title>
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
                        <div className="form-group col-xl-9">
                          <label className="text-secondary"><strong>PROJECT NAME</strong></label>
                          <input type="text" formControlName="name" className="form-control" name="state[project_name]" value={state.project_name} onChange={e => setState({ ...state, project_name: e.target.value })} />
                        </div>
                        <div className="form-group col-xl-3">
                          <label>PROJECT CODE</label>
                          <input type="text" formControlName="project_code" className="form-control" name="state[project_code]" value={state.project_code} onChange={e => setState({ ...state, project_code: e.target.value })} />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-xl-6">
                          <label>CUSTOMER</label>
                          <input type="text" formControlName="customer" className="form-control" name="state[customer]" value={state.customer} onChange={e => setState({ ...state, customer: e.target.value })} />
                        </div>
                        <div className="form-group col-xl-3">
                          <label>TYPE OF PROJECT</label>
                          <input type="text" formControlName="type_of_project" className="form-control" name="state[type_of_project]" value={state.type_of_project} onChange={e => setState({ ...state, type_of_project: e.target.value })} />
                        </div>
                        <div className="form-group col-xl-3">
                          <label>HOURLY RATE</label>
                          <input type="text" formControlName="hourly_rate" className="form-control" name="state[hourly_rate]" value={state.hourly_rate} onChange={e => setState({ ...state, hourly_rate: e.target.value })} />
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
                        <div className="form-group col">
                          <label>PROJECT MANAGER</label>
                          <input type="text" formControlName="project_manager" className="form-control" name="state[project_manager]" value={state.project_manager} onChange={e => setState({ ...state, project_manager: e.target.value })} />
                        </div>

                        <div className="form-group col">
                          <label>TECH LEAD</label>
                          <input type="text" formControlName="tech_lead" className="form-control" name="state[tech_lead]" value={state.tech_lead} onChange={e => setState({ ...state, tech_lead: e.target.value })} />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>DESCRIPTION</label>
                        <input type="text" formControlName="description" className="form-control" name="state[description]" value={state.description} onChange={e => setState({ ...state, description: e.target.value })} />
                      </div>

                      <button className="btn-warning btn-shadow col-xl-12">
                        <span className="small"> <i className="icmn-plus"></i> CREATE PROJECT</span>
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

export default connect(null, { addProject })(AddProject);


