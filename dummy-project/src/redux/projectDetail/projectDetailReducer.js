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
        default: return state
    }
}

export default reducer