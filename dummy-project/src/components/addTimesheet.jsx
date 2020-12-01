import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

const AddTimesheet = (props) => {
  const [state, setState] = useState({
    user_id: props.userId,
    day: '',
    date: '',
    time_in: '',
    time_out: '',
    total_hour: ''
  });

  const submitHandler = e => {
    e.preventDefault();
    console.log(state);
    // props.addAlbum(state)
    axios.post('/timesheet', state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
    setState({
      user_id: '',
      day: '',
      date: '',
      time_in: '',
      time_out: '',
      total_hour: ''
    })

  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title><strong>Add Details</strong></Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <div className="block">
          <div className="row">
            <div className="col-xl-12">
              <div className="inner">
                <div className="form" >
                  <div className="card-body">
                    <form onSubmit={submitHandler}>
                      {/* <div className="form-group col-xl-12">
                        <label className="text-secondary"><strong>USER ID</strong></label>
                        <input type="text" formControlName="user_id" className="form-control" name="state[user_id]" value={state.user_id} onChange={e => setState({ ...state, user_id: e.target.value })} />

                      </div> */}
                      <div className="form-row">

                        <div className="form-group col-xl-12">
                          <label className="text-secondary"><strong>DAY</strong></label>
                          <input type="text" formControlName="day" className="form-control" name="state[day]" value={state.day} onChange={e => setState({ ...state, day: e.target.value })} />

                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-xl-12">
                          <label>DATE</label>
                          <input type="text" formControlName="date" className="form-control" name="state[date]" value={state.date} onChange={e => setState({ ...state, date: e.target.value })} />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-xl-6">
                          <label>TIME IN</label>
                          <input type="text" formControlName="time_in" className="form-control" name="state[time_in]" value={state.time_in} onChange={e => setState({ ...state, time_in: e.target.value })} />

                        </div>
                        <div className="form-group col-xl-6">
                          <label>TIME OUT</label>
                          <input type="text" formControlName="time_out" className="form-control" name="state[time_out]" value={state.time_out} onChange={e => setState({ ...state, time_out: e.target.value })} />

                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-xl-12">
                          <label>TOTAL HOURS</label>
                          <input type="text" formControlName="total_hour" className="form-control" name="state[total_hour]" value={state.total_hour} onChange={e => setState({ ...state, total_hour: e.target.value })} />

                        </div>
                      </div>



                      <button nz-button class="btn-warning btn-shadow col-xl-12">
                        <span class="small"> <i class="icmn-plus"></i>ADD</span>
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

export default AddTimesheet;