import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import ProjectDetails from './projectDetails';
import AddProject from './addProject';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { fetchProjects } from '../redux/project/projectActions';

const Projects = ({ projectData, fetchProjects, match }) => {

    const mat = match.path;
    const [showModal, setShow] = useState(false);
    useEffect(() => {
        fetchProjects()
      }, [])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log('prprprprprprpr')
    console.log(projectData.projects)
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-12 pl-5 pr-5">
                    <Button className="btn-shadow-2 mb-4" variant="warning" onClick={handleShow}>
                        + Add Project
                    </Button>
                    <AddProject show={showModal} onHide={handleClose}></AddProject>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 pl-5 pr-5">
                    <div className="row">
                        {
                            projectData.projects.map(project => <div className="col-lg-4" >

                                <div className="card box-shadow2 bg-info mb-5">
                                    <div className="d-inline-block ml-4 pt-3 mt-2 pb-2 mb-2">
                                        <span><h4><strong><Link to={`/main/projectDetails/${project._id}`}>{project.project_name}</Link></strong></h4></span>
                                    </div>
                                </div>

                            </div>)
                        }
                    </div>
                </div>
            </div>
            <Switch>
                <Route path={`${mat}/projectDetails/:id`} component={ProjectDetails} />
            </Switch>

        </React.Fragment>
    );
}


// export default Projects;

const mapStateToProps = (state) => {
    return {
        // pt: ownProps.match.path,
      projectData: state.project
    }
  }
  
  const mapDispatchToProps = (dispatch, {match}) => {
    const mat = match.path;
   
    return {
      fetchProjects: () => dispatch(fetchProjects(mat))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Projects)