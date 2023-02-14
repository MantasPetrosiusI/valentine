import { ADD_TO_FAVORITES , REMOVE_FROM_FAVORITES} from "../actions"

const initialState = {
  favs: [],
};

const FavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return{
        ...state,
        favs: [...state.favs, action.payload],
      } 
      
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favs: state.favs.filter((el) => el !== action.payload),
      }
      
    default:
      return state
  }
}

export default FavouriteReducer;
