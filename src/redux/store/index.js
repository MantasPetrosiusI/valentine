import {combineReducers, configureStore } from '@reduxjs/toolkit'
import FavouriteReducer from '../reducers/FavouriteReducer'
import JobReducer from '../reducers/JobReducer'

const store = configureStore({
  reducer: combineReducers({
  favs: FavouriteReducer,
  jobs: JobReducer,
})
})

export default store