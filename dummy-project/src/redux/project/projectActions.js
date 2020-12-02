import axios from 'axios'


export const fetchProjects = (props) => {
  // console.log("ppppppppppppppppppp")
  // console.log(props)
  return (dispatch) => {
    dispatch(fetchProjectsRequest())
    axios
      .get('/projects')
      .then(response => {
        const projects = response.data
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

export const addProject = projectObj => {
    return (dispatch) => {
      axios.post('/projects', projectObj)
        .then(response => {
          dispatch({
            type: 'ADD_PROJECT',
            payload: response.data
          })
        })
        .catch(error => {
          console.log(error);
        });
    }
  }