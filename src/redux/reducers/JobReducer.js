import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOAD } from "../actions"

const initialState = {
    listing: [],
    isLoading: true,
    isError: false,
}

const JobReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_JOBS: 
        return {
            ...state,
            listing: action.payload,
        }
        case GET_JOBS_LOAD:
            return{
                ...state,
                isLoading: action.payload,
            }
        case GET_JOBS_ERROR:
            return{
                ...state,
                isError: action.payload,
            }
        default:
            return state;
    }
}
export default JobReducer;