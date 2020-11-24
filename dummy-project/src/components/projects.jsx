import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios.get(`/projects`)
            .then(res => {
                console.log(res);
                setProjects(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // const handleClick=() => {}
    // onClick={() =>  window.location.href=`/projectDetails/${project._id}`}

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        {
                            projects.map(project => <div className="col-lg-4" >

                                <div className="card box-shadow2 bg-info mb-5">
                                    <div className="d-inline-block ml-4 pt-3 mt-2 pb-2 mb-2">
                                        {/* <span className="digit"><img src="assets/images/projectavatar_04.svg" alt="L"/></span> */}

                                        <span><h4><strong><Link to={`/projectDetails/${project._id}`}>{project.project_name}</Link></strong></h4></span>
                                        <span className="text-light">Software Project</span>

                                    </div>
                                </div>

                            </div>)
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Projects;