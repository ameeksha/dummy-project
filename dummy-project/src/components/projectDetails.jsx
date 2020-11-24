import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap'
import AddUser from './addUser';

const ProjectDetails = () => {

 const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <div className="row">

                <div className="col-lg-3">
                    <div className="card box-shadow2 bg-secondary">
                        {/* <div className="text-light pt-4"><strong>ADD</strong></div> */}
                        <h3><strong>Users</strong></h3>
                        <Button className="btn btn-warning btn-shadow mb-2 mt-4 mr-4 bg-warning" onClick={handleShow}>+ Add Project</Button>
                       <AddUser show={showModal} onHide={handleClose}></AddUser>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <div><span className="text-black">Name</span></div>
                                    <p>Team Lead</p>
                                </div>
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
                                    <h2><strong>projectDetails.name</strong></h2>
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-lg-12 mt-5 mb-4">
                                    <nav mat-tab-nav-bar>
                                        <a className="col-lg-4" mat-tab-link>
                                            <strong> link.label</strong>
                                        </a>
                                    </nav>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-lg-12">

                                    <div className="d-flex">
                                        <div className="d-inline-block col-md-4 mr-auto text-left">
                                            <span className="text-light font-size-12">Name</span>
                                            <p><strong>projectDetails.name</strong></p>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="d-inline-block col-md-4 mr-auto ml-auto">
                                            <span className="text-light font-size-12">Program</span>
                                            <p><strong>Urban Pioneers</strong></p>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="d-inline-block col-md-4 mr-auto ml-auto ">
                                            <span className="text-light font-size-12">Team Lead</span>
                                            <p><strong>Urban Pioneers</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 pl-3" id="summaryBox">
                                <div className="text-light">
                                    Summery
                </div>
                                <p><strong>projectDetails.description</strong></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>




    );
}

export default ProjectDetails;