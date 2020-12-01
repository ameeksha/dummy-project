import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AdminLogin = () => {


  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const history = useHistory();


  const submitHandler = e => {
    e.preventDefault();
    // console.log('ami');
    // props.addAlbum(state)
    axios.post('/login', state)
      .then(response => {
        console.log(response);
        history.push('/main')
        alert('User logged in');

      })
      .catch(error => {
        console.log(error);
      })
    setState({
      email: '',
      password: ''
    })
  }


  return (

    <div className="card mr-auto ml-auto" style={{ height: 500, width: 500, boxShadow: '1px 1px 10px #888888', background: '#f8f9fa!important;', marginTop: 200 }}>
      <form className="p-4" onSubmit={submitHandler}>

        <h4 className="text-uppercase">
          <strong>Sign in</strong>
        </h4>

        <br />

        <div className="form-group mb-5">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" name="state[email]" value={state.email} onChange={e => setState({ ...state, email: e.target.value })} />
        </div>

        <div className="form-group mb-5">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" name="state[password]" value={state.password} onChange={e => setState({ ...state, password: e.target.value })} />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>

      </form>

    </div>
  );
}

export default AdminLogin;