const initialState = {
    loading: false,
    projects: [],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PROJECTS_REQUEST':
        return {
          ...state,
          loading: true
        }
      case 'FETCH_PROJECTS_SUCCESS':
        return {
          loading: false,
          projects: action.payload,
          error: ''
        }
      case 'FETCH_PROJECTS_FAILURE':
        return {
          loading: false,
          projects: [],
          error: action.payload
        }
        case "ADD_PROJECT":
            const projects = state.projects.concat(action.payload);
            return { ...state, projects };
      default: return state
    }
  }
  
  export default reducer