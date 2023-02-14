import { GET_JOBS } from "../actions"

const initialState = {
    listing: [],
}

const JobReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_JOBS: 
        return {
            ...state,
            listing: action.payload,
        }
        default:
            return state;
    }
}
export default JobReducer;