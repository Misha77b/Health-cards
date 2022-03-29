import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from '../API/auth/auth.reducer';
import errorHandlerReducer from '../API/errorHandler/errorHandler.reducer';
import chooseDoctorReducer from '../API/chooseDoctor/chooseDoctor.reducer';
import chooseUrgencyReducer from '../API/chooseUrgency/chooseUrgency.reducer';


const reduxDevToolsCompose = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];

const rootReducer = combineReducers({
  authReducer,
  errorHandlerReducer,
  chooseDoctorReducer,
  chooseUrgencyReducer,
});

const store = configureStore({
  devTools: reduxDevToolsCompose,
  reducer: rootReducer,
  middleware: [thunk],
});

export default store