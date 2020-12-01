import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

const AddUser = (props) => {

  const [state, setState] = useState({
    project_id: props.projectId,
    name: '',
    email_address: '',
    time_zone: '',
    shift: '',
    holiday_group: ''
  });

  const submitHandler = e => {
    e.preventDefault();
    console.log(state);
    // props.addAlbum(state)
    axios.post('/users', state)
      .then(response => {
        console.log(response);
        alert('New User Added');
      })
      .catch(error => {
        console.log(error);
      })
    setState({
      project_id: '',
      name: '',
      email_address: '',
      time_zone: '',
      shift: '',
      holiday_group: ''
    })
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title><strong>Add New User</strong></Modal.Title>
      </Modal.Header>
      <Modal.Body>



        <div className="block">
          <div className="row">
            <div className="col-xl-12">
              <div className="inner">
                <div className="form" >

                  <div className="card-body">
                    <form onSubmit={submitHandler}>



                      <input type="hidden" formControlName="project_id" className="form-control" name="state[project_id]" value={state.project_id} onChange={e => setState({ ...state, project_id: e.target.value })} />


                      <div className="form-row">

                        <div className="form-group col-xl-12">
                          <label className="text-secondary"><strong>NAME</strong></label>
                          <input type="text" formControlName="name" className="form-control" name="state[name]" value={state.name} onChange={e => setState({ ...state, name: e.target.value })} />
                        </div>
                        {/* <div class="form-group col-xl-6">
                          <label>LAST NAME</label>
                          <input type="text" formControlName="last_name" className="form-control" name="state[last_name]" value={state.last_name} onChange={e => setState({ ...state, last_name: e.target.value })} />
                        </div> */}
                      </div>
                      <div className="form-row">
                        <div className="form-group col-xl-6">
                          <label>EMAIL ADDRESS</label>
                          <input type="text" formControlName="email_address" className="form-control" name="state[email_address]" value={state.email_address} onChange={e => setState({ ...state, email_address: e.target.value })} />
                        </div>
                        <div className="form-group col-xl-6">
                          <label>TIME ZONE</label>
                          <input type="text" formControlName="time_zone" className="form-control" name="state[time_zone]" value={state.time_zone} onChange={e => setState({ ...state, time_zone: e.target.value })} />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-xl-6">
                          <label>SHIFT</label>
                          <input type="text" formControlName="shift" className="form-control" name="state[shift]" value={state.shift} onChange={e => setState({ ...state, shift: e.target.value })} />
                        </div>
                        <div className="form-group col-xl-6">
                          <label>HOLIDAY GROUP</label>
                          <input type="text" formControlName="holiday_group" className="form-control" name="state[holiday_group]" value={state.holiday_group} onChange={e => setState({ ...state, holiday_group: e.target.value })} />
                        </div>
                      </div>

                      <button nz-button className="btn-warning btn-shadow mt-4 col-xl-12">
                        <span className="small">+ ADD NEW USER</span>
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

export default AddUser;