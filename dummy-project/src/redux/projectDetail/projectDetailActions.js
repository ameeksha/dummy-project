import axios from 'axios'


export const fetchProjects = (props) => {
  
  return (dispatch) => {
    dispatch(fetchProjectsRequest())
    axios
      .get(`/projects/${props}`)
      .then(response => {
        const projects = response.data
        console.log('project')
        console.log(projects)
        dispatch(fetchProjectsSuccess(projects))
      })
      .catch(error => {
        dispatch(fetchProjectsFailure(error.message))
      })
  }
}


export const fetchProjectsRequest = () => {
  return {
    type: 'FETCH_PROJECTS_REQUEST'
  }
}

export const fetchProjectsSuccess = projects => {
  return {
    type: 'FETCH_PROJECTS_SUCCESS',
    payload: projects
  }
}

export const fetchProjectsFailure = error => {
  return {
    type: 'FETCH_PROJECTS_FAILURE',
    payload: error
  }
}
