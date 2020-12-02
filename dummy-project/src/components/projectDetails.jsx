import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import AddUser from './addUser';
// import CoolTabs from 'react-cool-tabs';
import { Tabs } from "@feuer/react-tabs";
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchProjects } from '../redux/projectDetail/projectDetailActions';



const ProjectDetails = ({ projectData, fetchProjects, match }) => {

    let param = match.params.id;

    const [showModal, setShow] = useState(false);
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetchProjects()
      }, [])
      
    useEffect(() => {
        axios.get(`/projects/${param}/users`)
            .then(res => {
                console.log(res);
                setUsers(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
// console.log('projename');
// console.log(projectData.projects.project_name)
    return (
        <React.Fragment>
            <div className="row m-5">

                <div className="col-lg-3">
                    <div className="card mb-4" style={{ height: 700, boxShadow: '1px 1px 10px #888888', background: '#f8f9fa!important;' }}>
                        <h3 className="pt-4 pl-4"><strong>LIST OF USERS</strong></h3>
                        <Button className="btn btn-warning btn-shadow mb-2 mt-4 mr-4 ml-4 bg-warning" onClick={handleShow}>+ Add User</Button>
                        <AddUser projectId={param} show={showModal} onHide={handleClose}></AddUser>
                        <div className="row">
                            <div className="col-md-12">
                                {
                                    users.map(user => <div>

                                        <span><h4 style={{ color: "dodgerblue" }}><strong><Link className="m-4" to={`/main/timesheet/${user._id}`}>{user.name}</Link></strong></h4></span>

                                    </div>)
                                }
                            </div>
                        </div>

                    </div>
                </div>


                <div className="col-lg-9">


                    <div className="card p-4" style={{ height: 700, boxShadow: '1px 1px 10px #888888', background: '#f8f9fa!important;' }}>

                        {/* <div className="card-body"> */}
                        {/* <div className="d-inline-block mt-4 pl-4">
                                <div className="desc">
                                    <span className="header text-light pl-0"><strong>PROJECT NAME</strong></span>
                                    <h2><strong>{project.project_name}</strong></h2>
                                </div>
                            </div> */}

                        <h3 className="text-dark mb-3" ><strong>PROJECT NAME</strong></h3>
                        <h5 style={{ color: "dodgerblue" }}><strong>{projectData.projects.project_name}</strong></h5>

                        <div className="row ">
                            <div className="col-lg-12 mt-5 mb-4">

                                <Tabs
                                    tabsProps={{
                                        style: {
                                            textAlign: "left",
                                        }
                                    }}
                                    activeTab={{
                                        id: "tab1"
                                    }}
                                >
                                    <Tabs.Tab id="tab1" title="Overview">
                                        <div style={{ padding: 10 }}>

                                            <div className="row mt-5">
                                                <div className="col-lg-12">

                                                    <div className="d-flex">
                                                        <div className="d-inline-block col-md-4 mr-auto text-left">
                                                            <span className="text-dark font-size-12">Name</span>
                                                            <p style={{ color: "dodgerblue" }}><strong>{projectData.projects.project_name}</strong></p>
                                                        </div>
                                                        <div className="divider"></div>
                                                        <div className="d-inline-block col-md-4 mr-auto ml-auto">
                                                            <span className="text-dark font-size-12">Project Manager</span>
                                                            <p style={{ color: "dodgerblue" }}><strong>{projectData.projects.project_manager}</strong></p>
                                                        </div>

                                                        <div className="d-inline-block col-md-4 mr-auto ml-auto ">
                                                            <span className="text-dark font-size-12">Team Lead</span>
                                                            <p style={{ color: "dodgerblue" }}><strong>{projectData.projects.tech_lead}</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3" style={{ height: 320, background: 'rgb(217 217 217 / 42%)', overflow: "hidden" }}>
                                                <div>
                                                    <h5><strong>Summery</strong></h5>
                                                </div>
                                                <p className="pt-2 text-dark">{projectData.projects.description}</p>
                                            </div>

                                        </div>
                                    </Tabs.Tab>
                                    <Tabs.Tab id="tab3" title="Approval">
                                        <Redirect to={`/main/approval/${param}`} />
                                    </Tabs.Tab>
                                </Tabs>

                            </div>
                            {/* </div> */}


                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>




    );
}

const mapStateToProps = (state) => {
    return {
        // pt: ownProps.match.path,
      projectData: state.project
    }
  }
  
  const mapDispatchToProps = (dispatch, {match}) => {
    const mat = match.params.id;
   
    return {
      fetchProjects: () => dispatch(fetchProjects(mat))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProjectDetails) ;