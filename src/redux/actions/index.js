export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'
export const GET_JOBS = 'GET_JOBS'

export const addToFavorites = (data) => ({
  type: ADD_TO_FAVORITES,
  payload: data
});

export const removeFromFavorites = (data) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: data
});



export const getJobsAsync = (query) =>{
  return async(dispatch) =>{
    const baseEndpoint ="https://strive-benchmark.herokuapp.com/api/jobs?search="
    try{
      let res = await fetch(baseEndpoint + query + "&limit=10");
      if(res.ok){
        let fetchedJobs = await res.json();
        dispatch({
          type: GET_JOBS,
          payload: fetchedJobs,
        })
      }else{
        console.log('error')
      }
    }catch(error){
      console.error(error)
    }
  }
  
}