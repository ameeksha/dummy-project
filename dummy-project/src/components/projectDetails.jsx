import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import AddUser from './addUser';
// import CoolTabs from 'react-cool-tabs';
import { Tabs } from "@feuer/react-tabs";
import { Redirect } from 'react-router-dom';




const ProjectDetails = ({ match }) => {

    const [showModal, setShow] = useState(false);
    const [users, setUsers] = useState([]);
    const [project, setProject] = useState([])
    let param = match.params.id;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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

    useEffect(() => {
        axios.get(`/projects/${param}`)
            .then(res => {
                console.log(res);
                setProject(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <React.Fragment>
            <div className="row">

                <div className="col-lg-3">
                    <div className="card box-shadow2 bg-secondary mb-4" style={{ height: 740 }}>
                        <h3 className="pt-4 pl-4"><strong>Users</strong></h3>
                        <Button className="btn btn-warning btn-shadow mb-2 mt-4 mr-4 ml-4 bg-warning" onClick={handleShow}>+ Add Project</Button>
                        <AddUser projectId={param} show={showModal} onHide={handleClose}></AddUser>
                        <div className="row">
                            <div className="col-md-12">
                                {
                                    users.map(user => <div className="col-lg-4" >



                                        <span><h4><strong>{user.first_name}</strong></h4></span>
                                        {/* <span className="text-light">Software Project</span> */}




                                    </div>)
                                }
                            </div>
                        </div>

                    </div>
                </div>


                <div className="col-lg-9">


                    <div className="card box-shadow2 bg-secondary">

                        <div className="card-body">
                            <div className="d-inline-block mt-5 pl-5">
                                <span className="digit"><img src="assets/images/projectavatar_04.svg" alt="" /></span>
                                <div className="desc">
                                    <span className="header text-light pl-0"><strong>PROJECT NAME</strong></span>
                                    <h2><strong>{project.project_name}</strong></h2>
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-lg-12 mt-5 mb-4">
                                    {/* <CoolTabs
	       tabKey={'1'}
	       style={{ width:  550, height:  500, background:  'white' }}
	       activeTabStyle={{ background:  'red', color:  'white' }}
	       unActiveTabStyle={{ background:  'green', color:  'black' }}
	       activeLeftTabBorderBottomStyle={{ background:  'blue', height:  4 }}
	       activeRightTabBorderBottomStyle={{ background:  'yellow', height:  4 }}
	       tabsBorderBottomStyle={{ background:  'orange', height:  4 }}
	       leftContentStyle={{ background:  'lightgreen' }}
	       rightContentStyle={{ background:  'lightblue' }}
	    //    leftTabTitle={'Left title'}
	    //    rightTabTitle={'Right title'}
	    //    leftContent={<Content1/>}
	    //    rightContent={<Content2/>}
	       contentTransitionStyle={'transform 0.6s ease-in'}
	       borderTransitionStyle={'all 0.6s ease-in'}/> */}



                                    <Tabs
                                        tabsProps={{
                                            style: {
                                                textAlign: "left"
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
                                                                <span className="text-light font-size-12">Name</span>
                                                                <p><strong>{project.project_name}</strong></p>
                                                            </div>
                                                            <div className="divider"></div>
                                                            <div className="d-inline-block col-md-4 mr-auto ml-auto">
                                                                <span className="text-light font-size-12">Project Manager</span>
                                                                <p><strong>{project.project_manager}</strong></p>
                                                            </div>
                                                            <div className="divider"></div>
                                                            <div className="d-inline-block col-md-4 mr-auto ml-auto ">
                                                                <span className="text-light font-size-12">Team Lead</span>
                                                                <p><strong>{project.tech_lead}</strong></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-100 pl-3" id="summaryBox">
                                                    <div className="text-light">
                                                        Summery
                </div>
                                                    <p><strong>{project.description}</strong></p>
                                                </div>

                                            </div>
                                        </Tabs.Tab>
                                        <Tabs.Tab id="tab2" title="Timesheet">
                                            <Redirect to="/timesheet" />
                                        </Tabs.Tab>
                                        <Tabs.Tab id="tab3" title="Approval">
                                            <Redirect to={`/approval/${param}`} />
                                        </Tabs.Tab>
                                    </Tabs>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>




    );
}

export default ProjectDetails;