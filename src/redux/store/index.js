import {combineReducers, configureStore } from '@reduxjs/toolkit'
import FavouriteReducer from '../reducers/FavouriteReducer'
import JobReducer from '../reducers/JobReducer'
import {persistStore, persistReducer} from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'


const persistConfig = {
  storage: localStorage,
  key: 'root',
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENV_S3CR37_K3Y
    })
  ]
}

const combinedReducer = combineReducers({
  jobs: JobReducer,
  favs: FavouriteReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
  reducer: persistedReducer,
})

const persistedStore = persistStore(store)

export {store, persistedStore}