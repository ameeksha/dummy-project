import { combineReducers } from 'redux'
import projectReducer from './project/projectReducer'
import projectDetailReducer from './projectDetail/projectDetailReducer';


const rootReducer = combineReducers({

  project: projectReducer,
  projectDetail: projectDetailReducer,
  
  
})

export default rootReducer